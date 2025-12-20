import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { LeadershipHistorySection } from "@/components/sections/LeadershipHistorySection";

export default function Leadership() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-blue-900 relative overflow-hidden">
          {/* Enhanced Background with better contrast */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-emerald-900/90 to-blue-900/90"></div>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%),
                                 radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%),
                                 radial-gradient(circle at 50% 50%, #d4a853 0%, transparent 50%)`
              }}></div>
            </div>
            {/* Islamic pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10">
                <svg width="150" height="90" viewBox="0 0 150 90" className="text-gold">
                  <path d="M20 75 L20 55 Q20 50 25 50 L45 50 Q50 50 50 55 L50 75 Z M50 75 L50 40 Q50 35 55 35 L95 35 Q100 35 100 40 L100 75 Z M100 75 L100 55 Q100 50 105 50 L125 50 Q130 50 130 55 L130 75 Z" fill="currentColor"/>
                  <ellipse cx="75" cy="35" rx="22" ry="12" fill="currentColor"/>
                  <rect x="37" y="15" width="4" height="35" fill="currentColor"/>
                  <rect x="109" y="15" width="4" height="35" fill="currentColor"/>
                </svg>
              </div>
              <div className="absolute top-20 right-20">
                <svg width="120" height="72" viewBox="0 0 120 72" className="text-emerald-400">
                  <path d="M15 60 L15 45 Q15 40 20 40 L35 40 Q40 40 40 45 L40 60 Z M40 60 L40 30 Q40 25 45 25 L75 25 Q80 25 80 30 L80 60 Z M80 60 L80 45 Q80 40 85 40 L100 40 Q105 40 105 45 L105 60 Z" fill="currentColor"/>
                  <ellipse cx="60" cy="25" rx="18" ry="10" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm text-emerald-300 rounded-full text-sm font-medium tracking-wider uppercase mb-6 border border-emerald-500/30">
                Leadership Excellence
              </span>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-gold via-emerald-400 to-blue-400 bg-clip-text text-transparent font-bold mb-6">
                Leadership
              </h1>
              <p className="text-emerald-100 text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
                Meet our dedicated leaders who have guided HUMSJ through 37 years of service, 
                from 1990 to 2025.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-white font-medium">
                  👑 37 Leaders
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-white font-medium">
                  📅 8 Leadership Eras
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-white font-medium">
                  ⭐ 37 Years of Service
                </div>
              </div>
            </div>
          </div>
        </section>

        <LeadershipSection />
        <LeadershipHistorySection />
      </main>
      <Footer />
    </div>
  );
}