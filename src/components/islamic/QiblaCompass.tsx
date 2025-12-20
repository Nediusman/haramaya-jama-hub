import { useState, useEffect } from "react";
import { Compass, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function QiblaCompass() {
  const [direction, setDirection] = useState(0);
  const [qiblaDirection, setQiblaDirection] = useState(285); // Approximate for Haramaya to Mecca

  useEffect(() => {
    // Request device orientation permission for mobile devices
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      (DeviceOrientationEvent as any).requestPermission()
        .then((response: string) => {
          if (response === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation);
          }
        });
    } else {
      window.addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  const handleOrientation = (event: DeviceOrientationEvent) => {
    if (event.alpha !== null) {
      setDirection(360 - event.alpha);
    }
  };

  const qiblaAngle = (qiblaDirection - direction + 360) % 360;

  return (
    <Card className="bg-gradient-to-br from-emerald-50 to-gold-50 border-gold/20">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-emerald-800">
          <Compass className="w-5 h-5" />
          Qibla Direction
        </CardTitle>
        <p className="text-sm text-emerald-600 font-arabic">اتجاه القبلة</p>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          {/* Compass Circle */}
          <div className="absolute inset-0 rounded-full border-4 border-emerald-200 bg-white shadow-inner">
            {/* Cardinal directions */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 text-xs font-bold text-emerald-800">N</div>
            <div className="absolute right-1 top-1/2 -translate-y-1/2 text-xs font-bold text-emerald-800">E</div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs font-bold text-emerald-800">S</div>
            <div className="absolute left-1 top-1/2 -translate-y-1/2 text-xs font-bold text-emerald-800">W</div>
          </div>
          
          {/* Qibla Arrow */}
          <div 
            className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
            style={{ transform: `rotate(${qiblaAngle}deg)` }}
          >
            <Navigation className="w-8 h-8 text-gold fill-gold" />
          </div>
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-emerald-800 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-emerald-600 mb-1">Direction to Mecca</p>
          <p className="text-lg font-semibold text-emerald-800">{qiblaDirection}°</p>
          <p className="text-xs text-emerald-500 mt-2">
            Hold device flat and point arrow toward Kaaba
          </p>
        </div>
      </CardContent>
    </Card>
  );
}