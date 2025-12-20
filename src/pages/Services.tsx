import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ModernIslamicServicesSection } from "@/components/sections/ModernIslamicServicesSection";
import { PrayerTimesSection } from "@/components/sections/PrayerTimesSection";
import { CommunityImpactSection } from "@/components/sections/CommunityImpactSection";

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-blue-900 relative overflow-hidden">
          {/* Enhanced Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-emerald-900/90 to-blue-900/90"></div>
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gold/10 to-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm text-emerald-300 rounded-full text-sm font-medium tracking-wider uppercase mb-6 border border-emerald-500/30">
                Islamic Services
              </span>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-gold via-emerald-400 to-blue-400 bg-clip-text text-transparent font-bold mb-6">
                Our Services
              </h1>
              <p className="text-emerald-100 text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
                Comprehensive Islamic services combining traditional values with modern technology 
                to serve our community's spiritual, educational, and social needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-white font-medium">
                  💻 Digital Services
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-white font-medium">
                  🕌 Prayer Times
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-white font-medium">
                  🤝 Community Impact
                </div>
              </div>
            </div>
          </div>
        </section>

        <ModernIslamicServicesSection />
        <PrayerTimesSection />
        <CommunityImpactSection />
      </main>
      <Footer />
    </div>
  );
}