import { Smartphone, Wifi, Calendar, MessageCircle, Video, BookOpen, Users, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const digitalServices = [
  {
    icon: Smartphone,
    title: "HUMSJ Mobile App",
    description: "Complete Islamic companion app with prayer times, Quran, and community features",
    features: ["Prayer Times & Qibla", "Quran with Audio", "Event Notifications", "Community Chat"],
    users: "2,000+ downloads",
    status: "Available",
    color: "emerald",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
  },
  {
    icon: Video,
    title: "Virtual Islamic Classes",
    description: "Online Islamic education platform with live and recorded lectures",
    features: ["Live Streaming", "Interactive Q&A", "Course Certificates", "Progress Tracking"],
    users: "500+ students enrolled",
    status: "Live",
    color: "blue",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=300&fit=crop"
  },
  {
    icon: MessageCircle,
    title: "Islamic Counseling Chat",
    description: "24/7 online counseling service with qualified Islamic counselors",
    features: ["Anonymous Chat", "Qualified Counselors", "Crisis Support", "Follow-up Sessions"],
    users: "300+ sessions monthly",
    status: "Active",
    color: "purple",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
  },
  {
    icon: Calendar,
    title: "Smart Event Management",
    description: "Digital platform for Islamic events, registrations, and community engagement",
    features: ["Event Registration", "Digital Tickets", "Live Updates", "Feedback System"],
    users: "100+ events managed",
    status: "Growing",
    color: "amber",
    image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=400&h=300&fit=crop"
  },
  {
    icon: BookOpen,
    title: "Digital Islamic Library",
    description: "Comprehensive online library with Islamic books, research papers, and resources",
    features: ["10,000+ Books", "Search Function", "Bookmarks", "Offline Reading"],
    users: "1,500+ active readers",
    status: "Expanding",
    color: "teal",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
  },
  {
    icon: Users,
    title: "Community Connect Platform",
    description: "Social networking platform connecting Muslims across campus and beyond",
    features: ["Profile Creation", "Study Groups", "Mentorship Matching", "Event Planning"],
    users: "800+ community members",
    status: "Thriving",
    color: "red",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
  }
];

const upcomingFeatures = [
  {
    title: "AI Islamic Assistant",
    description: "AI-powered chatbot for Islamic questions and guidance",
    timeline: "Q2 2024",
    icon: "🤖"
  },
  {
    title: "Virtual Reality Hajj",
    description: "Immersive VR experience of Hajj pilgrimage",
    timeline: "Q3 2024",
    icon: "🕋"
  },
  {
    title: "Blockchain Zakat System",
    description: "Transparent zakat collection and distribution platform",
    timeline: "Q4 2024",
    icon: "⛓️"
  },
  {
    title: "IoT Prayer Reminder",
    description: "Smart devices for prayer time notifications",
    timeline: "Q1 2025",
    icon: "📱"
  }
];

const techStats = [
  { number: "5,000+", label: "App Downloads", description: "Across iOS and Android" },
  { number: "24/7", label: "Service Availability", description: "Round-the-clock support" },
  { number: "99.9%", label: "Uptime", description: "Reliable service guarantee" },
  { number: "15+", label: "Digital Services", description: "Comprehensive platform" }
];

export function ModernIslamicServicesSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Modern Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, #8b5cf6 0%, transparent 50%)`
        }}></div>
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
            Digital Innovation
          </span>
          <h2 className="font-display text-4xl md:text-6xl bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Modern Islamic Services
          </h2>
          <p className="text-slate-300 text-xl leading-relaxed mb-8">
            Embracing technology to enhance Islamic education, community connection, and spiritual growth 
            in the digital age while preserving traditional values.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Tech Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {techStats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.number}</div>
              <div className="font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-slate-300">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Digital Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {digitalServices.map((service, index) => {
            const IconComponent = service.icon;
            const colorClasses = {
              emerald: "from-emerald-500 to-emerald-600 text-emerald-400 bg-emerald-500/20",
              blue: "from-blue-500 to-blue-600 text-blue-400 bg-blue-500/20",
              purple: "from-purple-500 to-purple-600 text-purple-400 bg-purple-500/20",
              amber: "from-amber-500 to-amber-600 text-amber-400 bg-amber-500/20",
              teal: "from-teal-500 to-teal-600 text-teal-400 bg-teal-500/20",
              red: "from-red-500 to-red-600 text-red-400 bg-red-500/20"
            };

            return (
              <Card key={service.title} className="group overflow-hidden border-0 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Icon */}
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-full ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[4]} flex items-center justify-center border border-white/30`}>
                    <IconComponent className={`w-6 h-6 ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[2]}`} />
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={`${colorClasses[service.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[1]} text-white border-0`}>
                      {service.status}
                    </Badge>
                  </div>

                  {/* Users Count */}
                  <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white border border-white/30">
                    {service.users}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <div className={`w-2 h-2 rounded-full ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[1]}`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className={`w-full ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[service.color as keyof typeof colorClasses].split(' ')[1]} hover:opacity-90 text-white border-0`}>
                    <Wifi className="w-4 h-4 mr-2" />
                    Access Service
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Upcoming Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl text-white mb-4">
              Coming Soon
            </h3>
            <p className="text-slate-300 text-lg">
              Innovative features in development to further enhance your Islamic experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingFeatures.map((feature, index) => (
              <Card key={index} className="text-center bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <Badge variant="outline" className="border-emerald-400 text-emerald-400">
                    {feature.timeline}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Innovation Commitment */}
        <div className="bg-gradient-to-br from-emerald-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 text-center border border-white/20">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-full flex items-center justify-center">
                <Bell className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="font-display text-3xl text-white mb-4">
              Innovation Meets Tradition
            </h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              We believe technology should serve to strengthen our faith, not replace it. 
              Our digital services are designed to make Islamic practices more accessible 
              while preserving the essence of our beautiful religion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white">
                Download HUMSJ App
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                Join Beta Testing
              </Button>
            </div>
          </div>
        </div>

        {/* Tech Support */}
        <div className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
            <h3 className="font-display text-2xl text-white mb-4">
              24/7 Technical Support
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Our dedicated tech support team is available around the clock to help you 
              make the most of our digital Islamic services.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-emerald-400/30">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Live Chat</h4>
                <p className="text-sm text-slate-300">Instant support via chat</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-blue-400/30">
                  <Video className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Video Tutorials</h4>
                <p className="text-sm text-slate-300">Step-by-step guides</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-purple-400/30">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Community Forum</h4>
                <p className="text-sm text-slate-300">Peer-to-peer support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}