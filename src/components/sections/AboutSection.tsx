import { BookOpen, Users, Heart, GraduationCap, Lightbulb, HandHeart, Star, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import humsjLogo from "@/assets/humsj-logo.png";

const activities = [
  {
    icon: BookOpen,
    title: "Weekly Halaqas",
    description: "Study circles and lectures on Islamic knowledge to deepen faith and understanding.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: GraduationCap,
    title: "Qur'an Programs",
    description: "Qur'an memorization and recitation competitions fostering spiritual excellence.",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: HandHeart,
    title: "Charity & Service",
    description: "Community service projects and charity drives, especially during Ramadan and Eid.",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Users,
    title: "Academic Support",
    description: "Tutoring, mentorship, and motivational seminars for academic excellence.",
    color: "from-orange-500 to-red-600"
  },
  {
    icon: Heart,
    title: "Interfaith Dialogue",
    description: "Peaceful coexistence initiatives promoting harmony on campus and beyond.",
    color: "from-rose-500 to-pink-600"
  },
  {
    icon: Lightbulb,
    title: "Da'wah Programs",
    description: "Outreach activities sharing Islamic values with the wider community.",
    color: "from-yellow-500 to-amber-600"
  },
];

const stats = [
  { number: "2000+", label: "Active Members", icon: Users },
  { number: "35+", label: "Years of Service", icon: Award },
  { number: "50+", label: "Annual Events", icon: Star },
  { number: "100%", label: "Commitment", icon: Target },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-emerald-50"></div>
      <div className="absolute inset-0 islamic-pattern opacity-10"></div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full opacity-30 float-slow"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-br from-gold to-amber-300 rounded-full opacity-40 float-reverse"></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-25 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Logo */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium tracking-wider uppercase mb-8">
            About HUMSJ
          </span>
          
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src={humsjLogo} 
                alt="HUMSJ Logo" 
                className="h-32 w-auto pulse-glow rounded-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl gradient-text mb-8">
            Origins & Mission
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed max-w-4xl mx-auto">
            The Haramaya University Muslim Students' Jema'a (HUMSJ) was established to serve the 
            spiritual, educational, and social needs of Muslim students at Haramaya University in 
            eastern Ethiopia. We emerged as a grassroots initiative by students who sought to create 
            a supportive environment where they could practice their faith, pursue knowledge, and 
            contribute positively to society.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="text-center hover-lift glass-modern border-0">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 p-8 md:p-10 text-white relative">
              <div className="absolute inset-0 islamic-pattern opacity-20"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-3xl mb-6">Our Mission</h3>
                <ul className="space-y-4 text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1 text-lg">✦</span>
                    <span>To cultivate students who are intellectually and spiritually empowered.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1 text-lg">✦</span>
                    <span>To promote excellence in both Islamic and secular education.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold mt-1 text-lg">✦</span>
                    <span>To foster a generation committed to serving Islam and their communities with integrity.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Vision */}
          <Card className="overflow-hidden border-0 shadow-2xl">
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 md:p-10 relative">
              <div className="absolute inset-0 islamic-pattern-dense opacity-5"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-3xl text-slate-900 mb-6">Our Vision</h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1 text-lg">✦</span>
                    <span>To become the leading university-based Muslim student organization in Ethiopia.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 mt-1 text-lg">✦</span>
                    <span>To serve as a beacon of service, leadership, and Islamic values on campus and beyond.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Activities & Impact Section */}
        <div className="text-center mb-16">
          <h3 className="font-display text-4xl md:text-5xl bg-gradient-to-r from-emerald-800 to-blue-800 bg-clip-text text-transparent mb-6">
            Activities & Impact
          </h3>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto">
            HUMSJ is known for its dynamic programs that blend religious devotion with academic and social engagement.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={activity.title}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center bg-gradient-to-br from-white to-slate-50">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-display text-xl text-slate-900 mb-4 font-semibold">
                  {activity.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
