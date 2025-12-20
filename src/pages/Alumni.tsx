import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AlumniSuccessSection } from "@/components/sections/AlumniSuccessSection";

export default function Alumni() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-br from-amber-50 via-emerald-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0 islamic-pattern-dense opacity-20"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gold to-amber-300 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="font-display text-4xl md:text-6xl bg-gradient-to-r from-amber-800 to-emerald-800 bg-clip-text text-transparent font-bold mb-4">
              Alumni Success Stories
            </h1>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto mb-6">
              Celebrating the remarkable achievements of our graduates who are making a difference 
              in their communities and beyond, carrying forward the values learned at HUMSJ.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/20 shadow-lg">
                🎓 1,000+ Alumni
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/20 shadow-lg">
                🌍 50+ Countries
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/20 shadow-lg">
                💼 Success Stories
              </div>
            </div>
          </div>
        </section>

        <AlumniSuccessSection />
      </main>
      <Footer />
    </div>
  );
}