import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 islamic-pattern opacity-20"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-full opacity-30 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-gold/20 to-amber-300/20 rounded-full opacity-40 animate-float" style={{ animationDelay: "2s" }}></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="font-display text-4xl md:text-6xl text-white font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-emerald-100 text-xl max-w-3xl mx-auto mb-6">
              Get in touch with HUMSJ. We're here to help with any questions, support your Islamic journey, 
              and welcome you to our community at Haramaya University.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                📧 Email Us
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                📞 Call Us
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                📍 Visit Us
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}