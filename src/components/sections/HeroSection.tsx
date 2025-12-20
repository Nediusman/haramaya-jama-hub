import { Button } from "@/components/ui/button";
import { ChevronDown, Star, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-mosque.jpg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Beautiful Mosque-themed Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-blue-900" />
      
      {/* Mosque Silhouettes and Decorative Elements */}
      <div className="absolute inset-0">
        {/* Large Mosque Silhouette - Left */}
        <div className="absolute top-10 left-10 opacity-20 animate-float">
          <svg width="200" height="120" viewBox="0 0 200 120" className="text-gold">
            <path d="M30 100 L30 70 Q30 65 35 65 L65 65 Q70 65 70 70 L70 100 Z M70 100 L70 50 Q70 45 75 45 L125 45 Q130 45 130 50 L130 100 Z M130 100 L130 70 Q130 65 135 65 L165 65 Q170 65 170 70 L170 100 Z" fill="currentColor"/>
            <ellipse cx="100" cy="45" rx="30" ry="15" fill="currentColor"/>
            <rect x="50" y="20" width="6" height="45" fill="currentColor"/>
            <rect x="144" y="20" width="6" height="45" fill="currentColor"/>
            <ellipse cx="53" cy="20" rx="6" ry="8" fill="currentColor"/>
            <ellipse cx="147" cy="20" rx="6" ry="8" fill="currentColor"/>
            <path d="M53 15 Q50 10 53 5 Q56 12 53 15" fill="#d4a853"/>
            <path d="M147 15 Q144 10 147 5 Q150 12 147 15" fill="#d4a853"/>
          </svg>
        </div>

        {/* Medium Mosque Silhouette - Right */}
        <div className="absolute top-20 right-20 opacity-15 animate-float" style={{ animationDelay: "2s" }}>
          <svg width="150" height="90" viewBox="0 0 150 90" className="text-emerald-300">
            <path d="M20 75 L20 55 Q20 50 25 50 L45 50 Q50 50 50 55 L50 75 Z M50 75 L50 40 Q50 35 55 35 L95 35 Q100 35 100 40 L100 75 Z M100 75 L100 55 Q100 50 105 50 L125 50 Q130 50 130 55 L130 75 Z" fill="currentColor"/>
            <ellipse cx="75" cy="35" rx="22" ry="12" fill="currentColor"/>
            <rect x="37" y="15" width="4" height="35" fill="currentColor"/>
            <rect x="109" y="15" width="4" height="35" fill="currentColor"/>
            <ellipse cx="39" cy="15" rx="4" ry="6" fill="currentColor"/>
            <ellipse cx="111" cy="15" rx="4" ry="6" fill="currentColor"/>
          </svg>
        </div>

        {/* Small Mosque Silhouette - Bottom Left */}
        <div className="absolute bottom-20 left-32 opacity-10 animate-float" style={{ animationDelay: "4s" }}>
          <svg width="100" height="60" viewBox="0 0 100 60" className="text-blue-300">
            <path d="M15 50 L15 35 Q15 30 20 30 L35 30 Q40 30 40 35 L40 50 Z M40 50 L40 25 Q40 20 45 20 L55 20 Q60 20 60 25 L60 50 Z M60 50 L60 35 Q60 30 65 30 L80 30 Q85 30 85 35 L85 50 Z" fill="currentColor"/>
            <ellipse cx="50" cy="20" rx="15" ry="8" fill="currentColor"/>
            <rect x="27" y="8" width="3" height="22" fill="currentColor"/>
            <rect x="70" y="8" width="3" height="22" fill="currentColor"/>
          </svg>
        </div>

        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gold/20 to-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "6s" }}></div>
      </div>

      {/* Mosque Background Image with Enhanced Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Islamic Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, #10b981 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, #d4a853 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, #06b6d4 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, #10b981 0%, transparent 30%)
          `
        }}></div>
      </div>

      {/* Floating Islamic Decorative Elements */}
      <div className="absolute top-16 left-16 animate-float opacity-40" style={{ animationDelay: "0s" }}>
        <div className="text-gold text-4xl">☪️</div>
      </div>
      <div className="absolute top-24 right-24 animate-float opacity-30" style={{ animationDelay: "2s" }}>
        <Star className="w-8 h-8 text-emerald-300" />
      </div>
      <div className="absolute bottom-32 left-16 animate-float opacity-35" style={{ animationDelay: "4s" }}>
        <div className="text-blue-300 text-3xl">🕌</div>
      </div>
      <div className="absolute bottom-40 right-32 animate-float opacity-25" style={{ animationDelay: "6s" }}>
        <Heart className="w-6 h-6 text-teal-300" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Enhanced Bismillah with Decorative Frame */}
        <div className="mb-10 animate-fade-in">
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-gold/30 shadow-2xl max-w-4xl mx-auto">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gold to-amber-500 rounded-full px-6 py-2">
              <span className="text-white text-sm font-semibold">بِسْمِ اللَّهِ</span>
            </div>
            <p className="font-arabic text-4xl md:text-6xl text-gold mb-4 leading-relaxed drop-shadow-lg">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <p className="text-emerald-200 text-base italic">
              In the name of Allah, the Most Gracious, the Most Merciful
            </p>
          </div>
        </div>

        {/* Enhanced Main Heading with Islamic Decorations */}
        <div className="relative mb-8">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white font-bold animate-slide-up drop-shadow-2xl">
            Haramaya University
            <span className="block bg-gradient-to-r from-gold via-amber-400 to-yellow-500 bg-clip-text text-transparent mt-4 text-5xl md:text-7xl lg:text-8xl">
              Muslim Students Jama'a
            </span>
          </h1>
          
          {/* Decorative Islamic Elements around title */}
          <div className="absolute -top-8 left-1/4 text-gold/30 text-2xl animate-pulse">✦</div>
          <div className="absolute -top-8 right-1/4 text-emerald-300/30 text-2xl animate-pulse" style={{ animationDelay: "1s" }}>✦</div>
          <div className="absolute -bottom-8 left-1/3 text-blue-300/30 text-2xl animate-pulse" style={{ animationDelay: "2s" }}>✦</div>
          <div className="absolute -bottom-8 right-1/3 text-teal-300/30 text-2xl animate-pulse" style={{ animationDelay: "3s" }}>✦</div>
        </div>

        {/* Enhanced Tagline */}
        <p className="text-2xl md:text-3xl text-emerald-100 max-w-5xl mx-auto mb-12 animate-slide-up leading-relaxed drop-shadow-lg" style={{ animationDelay: "0.2s" }}>
          35 years of fostering faith, knowledge, and brotherhood within the academic community. 
          <span className="block mt-2 text-xl md:text-2xl text-teal-200">
            Join us in our journey of spiritual growth, Islamic education, and community service.
          </span>
        </p>

        {/* Enhanced Stats with Mosque Icons */}
        <div className="flex flex-wrap justify-center gap-6 mb-14 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-emerald-300/30 shadow-xl min-w-[140px]">
            <div className="text-3xl mb-2">🕌</div>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">600+</p>
            <p className="text-emerald-200 text-sm font-medium">Active Members</p>
          </div>
          <div className="text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-300/30 shadow-xl min-w-[140px]">
            <div className="text-3xl mb-2">📅</div>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">100+</p>
            <p className="text-blue-200 text-sm font-medium">Events Yearly</p>
          </div>
          <div className="text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/30 shadow-xl min-w-[140px]">
            <div className="text-3xl mb-2">⭐</div>
            <p className="text-4xl md:text-5xl font-bold text-gold">35+</p>
            <p className="text-amber-200 text-sm font-medium">Years Serving</p>
          </div>
          <div className="text-center bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/30 shadow-xl min-w-[140px]">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">7</p>
            <p className="text-purple-200 text-sm font-medium">Service Sectors</p>
          </div>
        </div>

        {/* Enhanced Quranic Verse with Islamic Frame */}
        <blockquote className="max-w-4xl mx-auto mb-14 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-3xl p-10 border-2 border-gold/40 shadow-2xl">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full px-8 py-3">
              <span className="text-white text-sm font-semibold">القرآن الكريم</span>
            </div>
            <p className="font-arabic text-3xl md:text-4xl text-gold mb-6 leading-relaxed drop-shadow-lg">
              "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا"
            </p>
            <cite className="text-emerald-100 text-lg block mb-3">
              "And hold firmly to the rope of Allah all together and do not become divided"
            </cite>
            <cite className="text-teal-300 text-base">— Quran 3:103</cite>
          </div>
        </blockquote>

        {/* Enhanced CTA Buttons with Islamic Styling */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center animate-slide-up mb-10" style={{ animationDelay: "0.5s" }}>
          <Button className="group bg-gradient-to-r from-gold via-amber-500 to-yellow-500 hover:from-amber-600 hover:to-gold text-white px-10 py-5 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-gold/50">
            <span className="flex items-center gap-3">
              <span>🕌</span>
              <span>Explore Islamic Tools</span>
            </span>
            <ChevronDown className="w-6 h-6 ml-3 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button className="bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-10 py-5 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-emerald-400/50">
            <span className="flex items-center gap-3">
              <span>🤝</span>
              <span>Join Our Community</span>
            </span>
          </Button>
        </div>

        {/* Enhanced Additional Info with Islamic Icons */}
        <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="flex flex-wrap justify-center gap-8 text-emerald-200">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-3xl">🕌</span>
              <span className="text-base font-medium">Daily Prayers</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-3xl">📚</span>
              <span className="text-base font-medium">Islamic Studies</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-3xl">🤝</span>
              <span className="text-base font-medium">Community Service</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-3xl">🌟</span>
              <span className="text-base font-medium">Spiritual Growth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with Islamic Design */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center text-emerald-300 hover:text-white transition-colors group">
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-300/30 mb-3">
            <span className="text-sm font-medium flex items-center gap-2">
              <span>🕌</span>
              <span>Discover More</span>
            </span>
          </div>
          <ChevronDown className="w-8 h-8 group-hover:translate-y-1 transition-transform text-gold animate-bounce" />
        </a>
      </div>
    </section>
  );
}
