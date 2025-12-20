import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Clock, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mosqueImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&h=600&fit=crop",
    title: "Masjid Al-Noor",
    location: "Haramaya Campus",
    description: "Our main prayer hall where the community gathers for daily prayers and Friday Jummah",
    capacity: "500+ worshippers",
    features: ["Air Conditioned", "Separate Women's Section", "Wudu Facilities"],
    category: "Main Mosque"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=600&fit=crop",
    title: "Evening Prayer Gathering",
    location: "Campus Mosque",
    description: "Students gathering for Maghrib prayer, creating a sense of unity and brotherhood",
    capacity: "200+ students",
    features: ["Student Led", "Daily Prayers", "Islamic Lectures"],
    category: "Community"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    title: "Ramadan Night Prayers",
    location: "University Mosque",
    description: "Special Tarawih prayers during the holy month of Ramadan",
    capacity: "800+ participants",
    features: ["Ramadan Special", "Extended Hours", "Community Iftar"],
    category: "Special Events"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&h=600&fit=crop",
    title: "Islamic Architecture Beauty",
    location: "Historic Mosque",
    description: "Beautiful Islamic architectural elements that inspire spiritual reflection",
    capacity: "300+ visitors",
    features: ["Historic Design", "Cultural Heritage", "Photography Spot"],
    category: "Architecture"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop",
    title: "Friday Jummah Prayer",
    location: "Main Campus Mosque",
    description: "Weekly Friday congregational prayer bringing together the entire Muslim community",
    capacity: "600+ attendees",
    features: ["Weekly Khutbah", "Community Gathering", "Networking"],
    category: "Weekly Events"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=600&fit=crop",
    title: "Study Circle",
    location: "Mosque Library",
    description: "Islamic study circles and Quran recitation sessions for students",
    capacity: "50+ students",
    features: ["Quran Study", "Islamic Education", "Peer Learning"],
    category: "Education"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&h=600&fit=crop",
    title: "Eid Celebration",
    location: "University Grounds",
    description: "Joyous Eid celebrations with the entire Muslim community",
    capacity: "1000+ celebrants",
    features: ["Festival Prayers", "Community Feast", "Cultural Programs"],
    category: "Celebrations"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&h=600&fit=crop",
    title: "Peaceful Meditation",
    location: "Quiet Prayer Area",
    description: "Serene spaces for personal prayer and spiritual reflection",
    capacity: "Individual worship",
    features: ["Quiet Zone", "Personal Prayer", "Meditation Space"],
    category: "Personal Worship"
  }
];

const categories = ["All", "Main Mosque", "Community", "Special Events", "Architecture", "Weekly Events", "Education", "Celebrations", "Personal Worship"];

export function MosqueGallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? mosqueImages 
    : mosqueImages.filter(img => img.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const selectedImageData = selectedImage ? mosqueImages.find(img => img.id === selectedImage) : null;

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50"></div>
      <div className="absolute inset-0 islamic-pattern-dense opacity-20"></div>
      
      {/* Floating mosque silhouettes */}
      <div className="absolute top-20 left-10 opacity-10 animate-float">
        <svg width="120" height="72" viewBox="0 0 80 48" className="text-emerald-600">
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
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
            Sacred Spaces
          </span>
          <h2 className="font-display text-4xl md:text-6xl bg-gradient-to-r from-emerald-800 to-blue-800 bg-clip-text text-transparent mb-6">
            Mosque Gallery
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed mb-8">
            Explore the beautiful Islamic spaces where our community comes together for worship, 
            learning, and spiritual growth. Each image tells a story of faith, unity, and devotion.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-gold mx-auto rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "border-emerald-300 text-emerald-700 hover:bg-emerald-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                    <div className="flex items-center gap-1 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{image.location}</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-emerald-600 text-white text-xs">
                      {image.category}
                    </Badge>
                  </div>

                  {/* Heart Icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-200/50">
            <div className="text-3xl font-bold text-emerald-600 mb-2">5</div>
            <div className="text-sm text-slate-600">Prayer Halls</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-200/50">
            <div className="text-3xl font-bold text-emerald-600 mb-2">1000+</div>
            <div className="text-sm text-slate-600">Daily Visitors</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-200/50">
            <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
            <div className="text-sm text-slate-600">Open Access</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-emerald-200/50">
            <div className="text-3xl font-bold text-emerald-600 mb-2">35+</div>
            <div className="text-sm text-slate-600">Years Serving</div>
          </div>
        </div>
      </div>

      {/* Modal for Selected Image */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative">
              <img
                src={selectedImageData.src}
                alt={selectedImageData.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              
              {/* Navigation Buttons */}
              <Button
                variant="secondary"
                size="sm"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 p-0"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 p-0"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>

              {/* Close Button */}
              <Button
                variant="secondary"
                size="sm"
                className="absolute top-4 right-4 rounded-full w-10 h-10 p-0"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </Button>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-display text-slate-900 mb-2">
                    {selectedImageData.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedImageData.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Users className="w-4 h-4" />
                    <span>{selectedImageData.capacity}</span>
                  </div>
                </div>
                <Badge className="bg-emerald-100 text-emerald-700">
                  {selectedImageData.category}
                </Badge>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed">
                {selectedImageData.description}
              </p>

              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedImageData.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}