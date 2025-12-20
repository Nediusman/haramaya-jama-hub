import { QiblaCompass } from "@/components/islamic/QiblaCompass";
import { IslamicCalendar } from "@/components/islamic/IslamicCalendar";
import { DhikrCounter } from "@/components/islamic/DhikrCounter";
import { QuranVerse } from "@/components/islamic/QuranVerse";

export function IslamicDashboard() {
  return (
    <section id="islamic-tools" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Beautiful Islamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-emerald-50 to-blue-100"></div>
      <div className="absolute inset-0 islamic-pattern-dense opacity-40"></div>
      
      {/* Floating Mosque Silhouettes */}
      <div className="absolute top-10 left-10 opacity-20 animate-float" style={{ animationDelay: "0s" }}>
        <svg width="80" height="48" viewBox="0 0 80 48" className="text-emerald-600">
          <path d="M15 40 L15 28 Q15 25 18 25 L27 25 Q30 25 30 28 L30 40 Z M30 40 L30 20 Q30 17 33 17 L47 17 Q50 17 50 20 L50 40 Z M50 40 L50 28 Q50 25 53 25 L62 25 Q65 25 65 28 L65 40 Z" fill="currentColor"/>
          <ellipse cx="40" cy="17" rx="12" ry="6" fill="currentColor"/>
          <rect x="20" y="8" width="3" height="17" fill="currentColor"/>
          <rect x="57" y="8" width="3" height="17" fill="currentColor"/>
          <ellipse cx="21.5" cy="8" rx="2.5" ry="3" fill="currentColor"/>
          <ellipse cx="58.5" cy="8" rx="2.5" ry="3" fill="currentColor"/>
          <path d="M21.5 5 Q20.5 3 21.5 1 Q22.5 2.5 21.5 5" fill="#d4a853"/>
          <path d="M58.5 5 Q57.5 3 58.5 1 Q59.5 2.5 58.5 5" fill="#d4a853"/>
        </svg>
      </div>
      
      <div className="absolute top-32 right-16 opacity-15 animate-float" style={{ animationDelay: "2s" }}>
        <svg width="60" height="36" viewBox="0 0 80 48" className="text-gold">
          <path d="M15 40 L15 28 Q15 25 18 25 L27 25 Q30 25 30 28 L30 40 Z M30 40 L30 20 Q30 17 33 17 L47 17 Q50 17 50 20 L50 40 Z M50 40 L50 28 Q50 25 53 25 L62 25 Q65 25 65 28 L65 40 Z" fill="currentColor"/>
          <ellipse cx="40" cy="17" rx="12" ry="6" fill="currentColor"/>
          <rect x="20" y="8" width="3" height="17" fill="currentColor"/>
          <rect x="57" y="8" width="3" height="17" fill="currentColor"/>
          <ellipse cx="21.5" cy="8" rx="2.5" ry="3" fill="currentColor"/>
          <ellipse cx="58.5" cy="8" rx="2.5" ry="3" fill="currentColor"/>
          <path d="M21.5 5 Q20.5 3 21.5 1 Q22.5 2.5 21.5 5" fill="#d4a853"/>
          <path d="M58.5 5 Q57.5 3 58.5 1 Q59.5 2.5 58.5 5" fill="#d4a853"/>
        </svg>
      </div>

      <div className="absolute bottom-20 left-1/4 opacity-10 animate-float" style={{ animationDelay: "4s" }}>
        <svg width="100" height="60" viewBox="0 0 80 48" className="text-emerald-700">
          <path d="M15 40 L15 28 Q15 25 18 25 L27 25 Q30 25 30 28 L30 40 Z M30 40 L30 20 Q30 17 33 17 L47 17 Q50 17 50 20 L50 40 Z M50 40 L50 28 Q50 25 53 25 L62 25 Q65 25 65 28 L65 40 Z" fill="currentColor"/>
          <ellipse cx="40" cy="17" rx="12" ry="6" fill="currentColor"/>
          <rect x="20" y="8" width="3" height="17" fill="currentColor"/>
          <rect x="57" y="8" width="3" height="17" fill="currentColor"/>
          <ellipse cx="21.5" cy="8" rx="2.5" ry="3" fill="currentColor"/>
          <ellipse cx="58.5" cy="8" rx="2.5" ry="3" fill="currentColor"/>
          <path d="M21.5 5 Q20.5 3 21.5 1 Q22.5 2.5 21.5 5" fill="#d4a853"/>
          <path d="M58.5 5 Q57.5 3 58.5 1 Q59.5 2.5 58.5 5" fill="#d4a853"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-medium text-sm tracking-wider uppercase mb-4 block">
            Islamic Tools
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-slate-900 mb-4">
            Digital Islamic Companion
          </h2>
          <p className="text-slate-600 text-lg font-arabic mb-2">
            الأدوات الإسلامية الرقمية
          </p>
          <p className="text-slate-600 text-lg">
            Essential Islamic tools to support your daily worship and spiritual journey
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          <div className="xl:col-span-1">
            <QiblaCompass />
          </div>
          <div className="xl:col-span-1">
            <IslamicCalendar />
          </div>
          <div className="xl:col-span-1">
            <DhikrCounter />
          </div>
          <div className="xl:col-span-1">
            <QuranVerse />
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-200/50 text-center card-hover">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📖</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
              Quran Study
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Access Quranic verses, translations, and study materials
            </p>
            <p className="text-emerald-600 text-sm font-medium">Coming Soon</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-200/50 text-center card-hover">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤲</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
              Dua Collection
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Daily duas and supplications with audio pronunciation
            </p>
            <p className="text-blue-600 text-sm font-medium">Coming Soon</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-200/50 text-center card-hover">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🕌</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
              Mosque Finder
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Find nearby mosques and Islamic centers
            </p>
            <p className="text-purple-600 text-sm font-medium">Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}