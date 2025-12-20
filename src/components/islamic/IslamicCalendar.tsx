import { useState, useEffect } from "react";
import { Calendar, Moon, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IslamicDate {
  day: number;
  month: string;
  monthAr: string;
  year: number;
  weekday: string;
  weekdayAr: string;
}

const islamicMonths = [
  { en: "Muharram", ar: "محرم" },
  { en: "Safar", ar: "صفر" },
  { en: "Rabi' al-Awwal", ar: "ربيع الأول" },
  { en: "Rabi' al-Thani", ar: "ربيع الثاني" },
  { en: "Jumada al-Awwal", ar: "جمادى الأولى" },
  { en: "Jumada al-Thani", ar: "جمادى الثانية" },
  { en: "Rajab", ar: "رجب" },
  { en: "Sha'ban", ar: "شعبان" },
  { en: "Ramadan", ar: "رمضان" },
  { en: "Shawwal", ar: "شوال" },
  { en: "Dhu al-Qi'dah", ar: "ذو القعدة" },
  { en: "Dhu al-Hijjah", ar: "ذو الحجة" }
];

const islamicWeekdays = [
  { en: "Sunday", ar: "الأحد" },
  { en: "Monday", ar: "الإثنين" },
  { en: "Tuesday", ar: "الثلاثاء" },
  { en: "Wednesday", ar: "الأربعاء" },
  { en: "Thursday", ar: "الخميس" },
  { en: "Friday", ar: "الجمعة" },
  { en: "Saturday", ar: "السبت" }
];

export function IslamicCalendar() {
  const [islamicDate, setIslamicDate] = useState<IslamicDate | null>(null);
  const [upcomingEvents, setUpcomingEvents] = useState([
    { name: "Jumu'ah Prayer", nameAr: "صلاة الجمعة", date: "Every Friday", type: "weekly" },
    { name: "Ramadan", nameAr: "رمضان", date: "March 2025", type: "annual" },
    { name: "Eid al-Fitr", nameAr: "عيد الفطر", date: "March 2025", type: "annual" }
  ]);

  useEffect(() => {
    // Simplified Islamic date calculation (in production, use proper Islamic calendar library)
    const today = new Date();
    const gregorianYear = today.getFullYear();
    const islamicYear = Math.floor((gregorianYear - 622) * 1.030684) + 1;
    
    // Approximate calculation - would need proper Islamic calendar API
    const dayOfYear = Math.floor((today.getTime() - new Date(gregorianYear, 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const islamicMonth = Math.floor(dayOfYear / 29.5) % 12;
    const islamicDay = Math.floor(dayOfYear % 29.5) + 1;
    
    setIslamicDate({
      day: islamicDay,
      month: islamicMonths[islamicMonth].en,
      monthAr: islamicMonths[islamicMonth].ar,
      year: islamicYear,
      weekday: islamicWeekdays[today.getDay()].en,
      weekdayAr: islamicWeekdays[today.getDay()].ar
    });
  }, []);

  if (!islamicDate) return null;

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-purple-800">
          <Calendar className="w-5 h-5" />
          Islamic Calendar
        </CardTitle>
        <p className="text-sm text-purple-600 font-arabic">التقويم الهجري</p>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Moon className="w-4 h-4 text-purple-600" />
            <p className="font-arabic text-lg text-purple-800">{islamicDate.weekdayAr}</p>
          </div>
          <p className="text-2xl font-bold text-purple-900 mb-1">
            {islamicDate.day} {islamicDate.month}
          </p>
          <p className="font-arabic text-xl text-purple-700 mb-1">
            {islamicDate.day} {islamicDate.monthAr}
          </p>
          <p className="text-lg text-purple-600">{islamicDate.year} AH</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-purple-800 flex items-center gap-2">
            <Star className="w-4 h-4" />
            Upcoming Events
          </h4>
          {upcomingEvents.map((event, index) => (
            <div key={index} className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
              <div>
                <p className="font-medium text-purple-800">{event.name}</p>
                <p className="text-xs font-arabic text-purple-600">{event.nameAr}</p>
              </div>
              <p className="text-sm text-purple-600">{event.date}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}