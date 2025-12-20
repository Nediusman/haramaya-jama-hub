import { useState, useEffect } from "react";
import { Sunrise, Sun, CloudSun, Sunset, Moon, Clock, Bell, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Prayer times for Haramaya area (approximate - would need actual API in production)
const prayerSchedule = [
  { name: "Fajr", nameAr: "الفجر", time: "5:30 AM", timeValue: 330, icon: Sunrise, color: "from-indigo-500 to-purple-600" },
  { name: "Dhuhr", nameAr: "الظهر", time: "12:15 PM", timeValue: 735, icon: Sun, color: "from-yellow-400 to-orange-500" },
  { name: "Asr", nameAr: "العصر", time: "3:45 PM", timeValue: 945, icon: CloudSun, color: "from-orange-400 to-red-500" },
  { name: "Maghrib", nameAr: "المغرب", time: "6:20 PM", timeValue: 1100, icon: Sunset, color: "from-red-500 to-pink-600" },
  { name: "Isha", nameAr: "العشاء", time: "7:45 PM", timeValue: 1185, icon: Moon, color: "from-purple-600 to-indigo-800" },
];

export function PrayerTimesSection() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextPrayer, setNextPrayer] = useState("Dhuhr");
  const [timeToNext, setTimeToNext] = useState("");
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      // Calculate next prayer and time remaining
      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      let nextPrayerInfo = prayerSchedule.find(prayer => prayer.timeValue > currentMinutes);
      
      if (!nextPrayerInfo) {
        // Next prayer is Fajr tomorrow
        nextPrayerInfo = prayerSchedule[0];
        const minutesToMidnight = (24 * 60) - currentMinutes;
        const minutesToFajr = minutesToMidnight + nextPrayerInfo.timeValue;
        const hours = Math.floor(minutesToFajr / 60);
        const minutes = minutesToFajr % 60;
        setTimeToNext(`${hours}h ${minutes}m`);
      } else {
        const minutesRemaining = nextPrayerInfo.timeValue - currentMinutes;
        const hours = Math.floor(minutesRemaining / 60);
        const minutes = minutesRemaining % 60;
        setTimeToNext(`${hours}h ${minutes}m`);
      }
      
      setNextPrayer(nextPrayerInfo.name);
    }, 60000);
    
    // Initial calculation
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    let nextPrayerInfo = prayerSchedule.find(prayer => prayer.timeValue > currentMinutes);
    if (nextPrayerInfo) {
      setNextPrayer(nextPrayerInfo.name);
    }
    
    return () => clearInterval(timer);
  }, []);

  // Format current date
  const formatDate = () => {
    return currentTime.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = () => {
    return currentTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  };

  const enableNotifications = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission();
      setNotificationsEnabled(permission === "granted");
    }
  };

  return (
    <section id="prayer-times" className="py-20 lg:py-32 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            Prayer Times
          </span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Haramaya, Ethiopia
          </h2>
          <p className="text-white/80 text-lg font-arabic mb-2">
            مواقيت الصلاة - هرماية، إثيوبيا
          </p>
          <div className="flex items-center justify-center gap-4 text-white/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{formatDate()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-mono">{formatTime()}</span>
            </div>
          </div>
        </div>

        {/* Next Prayer Countdown */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-12 max-w-md mx-auto">
          <CardContent className="p-6 text-center">
            <h3 className="text-gold font-semibold mb-2">Next Prayer</h3>
            <p className="text-2xl font-bold mb-1">{nextPrayer}</p>
            <p className="text-white/80 mb-3">in {timeToNext}</p>
            {!notificationsEnabled && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={enableNotifications}
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Bell className="w-4 h-4 mr-2" />
                Enable Notifications
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Prayer Times Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {prayerSchedule.map((prayer) => (
            <Card
              key={prayer.name}
              className={`bg-gradient-to-br ${prayer.color} border-0 text-white transition-all duration-300 ${
                nextPrayer === prayer.name
                  ? "ring-2 ring-gold ring-offset-2 ring-offset-transparent scale-105 shadow-2xl"
                  : "hover:scale-105 shadow-lg"
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <prayer.icon className="w-6 h-6" />
                </div>
                <p className="font-arabic text-lg text-white/90 mb-2">{prayer.nameAr}</p>
                <h3 className="font-display text-xl font-semibold mb-2">{prayer.name}</h3>
                <p className="text-2xl font-bold">{prayer.time}</p>
                {nextPrayer === prayer.name && (
                  <div className="mt-3 px-3 py-1 bg-white/20 rounded-full">
                    <span className="text-sm font-medium">Next</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold text-gold mb-2">Calculation Method</h4>
              <p className="text-sm text-white/80">Islamic Society of North America (ISNA)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold text-gold mb-2">Juristic Method</h4>
              <p className="text-sm text-white/80">Shafi'i, Maliki, Hanbali</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold text-gold mb-2">High Latitude</h4>
              <p className="text-sm text-white/80">Angle Based Method</p>
            </div>
          </div>
          <p className="text-white/60 text-sm mt-6 max-w-2xl mx-auto">
            Prayer times are calculated for Haramaya University location (9.41°N, 42.03°E). 
            Times may vary slightly based on local sighting. Please verify with mosque announcements.
          </p>
        </div>
      </div>
    </section>
  );
}
