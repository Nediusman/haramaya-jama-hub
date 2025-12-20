import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MosqueGallerySection } from "@/components/sections/MosqueGallerySection";
import { GallerySection } from "@/components/sections/GallerySection";

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-emerald-800 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%),
                               radial-gradient(circle at 50% 50%, #d4a853 0%, transparent 50%)`
            }}></div>
          </div>
          
          {/* Floating mosque silhouettes */}
          <div className="absolute top-10 left-10 opacity-15 animate-float">
            <svg width="120" height="72" viewBox="0 0 80 48" className="text-gold">
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
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="font-display text-4xl md:text-6xl text-white font-bold mb-4">
              Gallery
            </h1>
            <p className="text-emerald-100 text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore our beautiful mosque spaces, community events, and memorable moments 
              from 37 years of Islamic excellence at Haramaya University.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                🕌 Mosque Photos
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                📸 Event Memories
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                🎉 Community Life
              </div>
            </div>
          </div>
        </section>

        <MosqueGallerySection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}