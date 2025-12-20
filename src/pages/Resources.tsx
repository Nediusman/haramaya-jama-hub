import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, Headphones, Download, Video, FileText, BookMarked, Star, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const lectures = [
  {
    title: "The Importance of Seeking Knowledge",
    speaker: "Sheikh Ahmed",
    duration: "45 min",
    type: "audio",
    rating: 4.8,
    views: "12.5K",
    featured: true,
  },
  {
    title: "Tafsir of Surah Al-Fatiha",
    speaker: "Ustaz Mohammed",
    duration: "1 hr 20 min",
    type: "video",
    rating: 4.9,
    views: "8.2K",
    featured: false,
  },
  {
    title: "The Life of Prophet Muhammad (SAW)",
    speaker: "Dr. Ibrahim",
    duration: "55 min",
    type: "audio",
    rating: 4.7,
    views: "15.3K",
    featured: true,
  },
  {
    title: "Understanding the Five Pillars",
    speaker: "Sheikh Yusuf",
    duration: "40 min",
    type: "video",
    rating: 4.6,
    views: "6.8K",
    featured: false,
  },
];

const quranRecitations = [
  { 
    surah: "Surah Al-Baqarah", 
    reciter: "Mishary Rashid Alafasy", 
    duration: "2 hr 45 min",
    rating: 4.9,
    featured: true
  },
  { 
    surah: "Surah Yasin", 
    reciter: "Abdul Basit", 
    duration: "15 min",
    rating: 4.8,
    featured: false
  },
  { 
    surah: "Surah Ar-Rahman", 
    reciter: "Abdul Rahman Al-Sudais", 
    duration: "12 min",
    rating: 4.9,
    featured: true
  },
  { 
    surah: "Surah Al-Mulk", 
    reciter: "Saad Al-Ghamdi", 
    duration: "8 min",
    rating: 4.7,
    featured: false
  },
];

const downloadables = [
  { title: "Islamic Prayer Guide", type: "PDF", size: "2.5 MB", downloads: "2.1K", category: "Worship" },
  { title: "Ramadan Timetable 2024", type: "PDF", size: "1.2 MB", downloads: "5.3K", category: "Calendar" },
  { title: "40 Hadith of Imam Nawawi", type: "PDF", size: "3.8 MB", downloads: "8.7K", category: "Hadith" },
  { title: "HUMSJ Constitution", type: "PDF", size: "0.8 MB", downloads: "1.2K", category: "Organization" },
  { title: "Quran Reading Schedule", type: "PDF", size: "1.5 MB", downloads: "3.4K", category: "Quran" },
  { title: "Islamic Calendar 1446 AH", type: "PDF", size: "2.1 MB", downloads: "4.6K", category: "Calendar" },
];

const onlineResources = [
  {
    title: "Quran.com",
    description: "Complete Quran with translations and recitations",
    url: "https://quran.com",
    category: "Quran",
    featured: true
  },
  {
    title: "Sunnah.com",
    description: "Comprehensive hadith collection",
    url: "https://sunnah.com",
    category: "Hadith",
    featured: true
  },
  {
    title: "IslamQA",
    description: "Islamic questions and answers",
    url: "https://islamqa.info",
    category: "Q&A",
    featured: false
  },
  {
    title: "Bayyinah Institute",
    description: "Arabic and Quran studies",
    url: "https://bayyinah.com",
    category: "Education",
    featured: false
  }
];

export default function Resources() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Islamic Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900"></div>
          <div className="absolute inset-0 islamic-pattern opacity-20"></div>
          
          {/* Mosque Silhouettes */}
          <div className="absolute top-8 left-8 opacity-15 animate-float">
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
          
          <div className="absolute top-12 right-12 opacity-10 animate-float" style={{ animationDelay: "2s" }}>
            <svg width="100" height="60" viewBox="0 0 80 48" className="text-white">
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
            <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
              Islamic Resources
            </h1>
            <p className="text-white/90 text-lg font-arabic mb-2">
              المصادر الإسلامية
            </p>
            <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
              Access comprehensive Islamic lectures, Quran recitations, and downloadable materials 
              to strengthen your faith and knowledge on your spiritual journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                📚 500+ Resources
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                🎧 Audio Lectures
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                📖 Quran Recitations
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                📄 Free Downloads
              </div>
            </div>
          </div>
        </section>

        {/* Resources Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="lectures" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                <TabsTrigger value="lectures">Lectures</TabsTrigger>
                <TabsTrigger value="quran">Quran</TabsTrigger>
                <TabsTrigger value="downloads">Downloads</TabsTrigger>
                <TabsTrigger value="online">Online</TabsTrigger>
              </TabsList>

              {/* Islamic Lectures */}
              <TabsContent value="lectures" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="font-display text-3xl text-emerald-900 mb-2">
                    Islamic Lectures
                  </h2>
                  <p className="text-emerald-600">
                    Learn from renowned Islamic scholars and speakers
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {lectures.map((lecture, index) => (
                    <Card key={index} className={`card-hover ${lecture.featured ? 'ring-2 ring-gold' : ''}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {lecture.type === "video" ? (
                                <Video className="w-4 h-4 text-gold" />
                              ) : (
                                <Headphones className="w-4 h-4 text-gold" />
                              )}
                              <Badge variant="secondary" className="text-xs capitalize">
                                {lecture.type}
                              </Badge>
                              {lecture.featured && (
                                <Badge className="bg-gold text-white text-xs">Featured</Badge>
                              )}
                            </div>
                            <CardTitle className="text-lg mb-2">{lecture.title}</CardTitle>
                            <p className="text-muted-foreground text-sm mb-2">
                              By {lecture.speaker} • {lecture.duration}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                <span>{lecture.rating}</span>
                              </div>
                              <span>{lecture.views} views</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full">
                          <Play className="w-4 h-4 mr-2" />
                          {lecture.type === "video" ? "Watch Now" : "Listen Now"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Quran Recitations */}
              <TabsContent value="quran" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="font-display text-3xl text-emerald-900 mb-2">
                    Quran Recitations
                  </h2>
                  <p className="text-emerald-600">
                    Beautiful recitations by world-renowned Qaris
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {quranRecitations.map((recitation, index) => (
                    <Card key={index} className={`text-center card-hover ${recitation.featured ? 'ring-2 ring-gold' : ''}`}>
                      <CardHeader>
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
                          <BookMarked className="w-8 h-8 text-emerald-600" />
                        </div>
                        {recitation.featured && (
                          <Badge className="bg-gold text-white mx-auto mb-2">Featured</Badge>
                        )}
                        <CardTitle className="text-lg">{recitation.surah}</CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {recitation.reciter}
                        </p>
                        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span>{recitation.rating}</span>
                          </div>
                          <span>{recitation.duration}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full">
                          <Headphones className="w-4 h-4 mr-2" />
                          Listen
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Downloadable Materials */}
              <TabsContent value="downloads" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="font-display text-3xl text-emerald-900 mb-2">
                    Downloadable Materials
                  </h2>
                  <p className="text-emerald-600">
                    Free Islamic resources for offline study and reference
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {downloadables.map((item, index) => (
                    <Card key={index} className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                              <FileText className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Badge variant="outline" className="text-xs">{item.category}</Badge>
                                <span>•</span>
                                <span>{item.type}</span>
                                <span>•</span>
                                <span>{item.size}</span>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">
                                {item.downloads} downloads
                              </p>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Online Resources */}
              <TabsContent value="online" className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="font-display text-3xl text-emerald-900 mb-2">
                    Online Resources
                  </h2>
                  <p className="text-emerald-600">
                    Trusted Islamic websites and online platforms
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {onlineResources.map((resource, index) => (
                    <Card key={index} className={`card-hover ${resource.featured ? 'ring-2 ring-gold' : ''}`}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <ExternalLink className="w-5 h-5 text-emerald-600" />
                            {resource.title}
                          </CardTitle>
                          {resource.featured && (
                            <Badge className="bg-gold text-white">Featured</Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{resource.description}</p>
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="outline">{resource.category}</Badge>
                        </div>
                        <Button className="w-full" variant="outline">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Website
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-emerald-50 to-blue-100"></div>
          <div className="absolute inset-0 islamic-pattern-dense opacity-30"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="font-display text-3xl text-emerald-900 mb-4">
              Need More Resources?
            </h2>
            <p className="text-emerald-600 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact us to suggest new resources 
              or request specific Islamic materials for our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Suggest Resources
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
