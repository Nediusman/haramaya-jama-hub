import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/sections/FAQSection";

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
          <div className="absolute inset-0 islamic-pattern opacity-10"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-emerald-200 rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="font-display text-4xl md:text-6xl bg-gradient-to-r from-blue-800 to-emerald-800 bg-clip-text text-transparent font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto mb-6">
              Find answers to common questions about HUMSJ, our services, programs, and how to get involved 
              in our vibrant Islamic community at Haramaya University.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50 shadow-lg">
                ❓ Common Questions
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50 shadow-lg">
                💬 Quick Answers
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50 shadow-lg">
                🤝 Get Help
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}