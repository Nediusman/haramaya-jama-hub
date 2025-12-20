import { useState } from "react";
import { RotateCcw, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const dhikrTypes = [
  {
    id: "tasbih",
    name: "Tasbih",
    nameAr: "تسبيح",
    text: "Subhan Allah",
    textAr: "سبحان الله",
    target: 33,
    meaning: "Glory be to Allah"
  },
  {
    id: "tahmid",
    name: "Tahmid", 
    nameAr: "تحميد",
    text: "Alhamdulillah",
    textAr: "الحمد لله",
    target: 33,
    meaning: "Praise be to Allah"
  },
  {
    id: "takbir",
    name: "Takbir",
    nameAr: "تكبير", 
    text: "Allahu Akbar",
    textAr: "الله أكبر",
    target: 34,
    meaning: "Allah is the Greatest"
  },
  {
    id: "istighfar",
    name: "Istighfar",
    nameAr: "استغفار",
    text: "Astaghfirullah",
    textAr: "أستغفر الله",
    target: 100,
    meaning: "I seek forgiveness from Allah"
  }
];

export function DhikrCounter() {
  const [counts, setCounts] = useState<Record<string, number>>(
    dhikrTypes.reduce((acc, dhikr) => ({ ...acc, [dhikr.id]: 0 }), {})
  );
  const [activeTab, setActiveTab] = useState("tasbih");

  const increment = (dhikrId: string) => {
    setCounts(prev => ({
      ...prev,
      [dhikrId]: prev[dhikrId] + 1
    }));
  };

  const reset = (dhikrId: string) => {
    setCounts(prev => ({
      ...prev,
      [dhikrId]: 0
    }));
  };

  const resetAll = () => {
    setCounts(dhikrTypes.reduce((acc, dhikr) => ({ ...acc, [dhikr.id]: 0 }), {}));
  };

  const activeDhikr = dhikrTypes.find(d => d.id === activeTab)!;
  const progress = (counts[activeTab] / activeDhikr.target) * 100;

  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-emerald-200">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-emerald-800">
          Digital Tasbih
        </CardTitle>
        <p className="text-sm text-emerald-600 font-arabic">المسبحة الرقمية</p>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={resetAll}
          className="mx-auto"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset All
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="tasbih">Tasbih</TabsTrigger>
            <TabsTrigger value="tahmid">Tahmid</TabsTrigger>
          </TabsList>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="takbir">Takbir</TabsTrigger>
            <TabsTrigger value="istighfar">Istighfar</TabsTrigger>
          </TabsList>

          {dhikrTypes.map((dhikr) => (
            <TabsContent key={dhikr.id} value={dhikr.id} className="space-y-4">
              <div className="text-center">
                <p className="font-arabic text-2xl text-emerald-800 mb-2">
                  {dhikr.textAr}
                </p>
                <p className="text-lg font-semibold text-emerald-700 mb-1">
                  {dhikr.text}
                </p>
                <p className="text-sm text-emerald-600 italic">
                  {dhikr.meaning}
                </p>
              </div>

              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  {/* Progress Circle */}
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-emerald-200"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 50}`}
                      strokeDashoffset={`${2 * Math.PI * 50 * (1 - progress / 100)}`}
                      className="text-emerald-600 transition-all duration-300"
                      strokeLinecap="round"
                    />
                  </svg>
                  
                  {/* Count Display */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-emerald-800">
                        {counts[dhikr.id]}
                      </p>
                      <p className="text-xs text-emerald-600">
                        / {dhikr.target}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 justify-center">
                  <Button
                    onClick={() => increment(dhikr.id)}
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Count
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => reset(dhikr.id)}
                    size="lg"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>

                {counts[dhikr.id] >= dhikr.target && (
                  <div className="mt-4 p-3 bg-emerald-100 rounded-lg border border-emerald-200">
                    <p className="text-emerald-800 font-semibold text-center">
                      ✨ Target Completed! ✨
                    </p>
                    <p className="text-emerald-600 text-sm text-center font-arabic">
                      بارك الله فيك
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}