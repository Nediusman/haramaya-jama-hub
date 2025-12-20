import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, Heart, Megaphone, Calculator, Calendar, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const sectors = [
  {
    id: 1,
    name: "Da'wah & Islamic Education",
    icon: BookOpen,
    description: "Spreading Islamic knowledge and fostering spiritual growth through comprehensive education and outreach programs",
    mission: "To provide authentic Islamic education and strengthen the faith of Muslim students through knowledge and understanding of Islam.",
    responsibilities: [
      "Organizing Quran recitation and memorization classes",
      "Conducting Islamic lectures and seminars",
      "Facilitating study circles and discussion groups",
      "Coordinating interfaith dialogue programs",
      "Developing Islamic curriculum and materials",
      "Training Islamic teachers and mentors"
    ],
    activities: [
      "Weekly Quran study circles",
      "Monthly Islamic lectures",
      "Ramadan intensive programs",
      "Islamic knowledge competitions",
      "Tafsir and Hadith classes",
      "Arabic language courses"
    ],
    achievements: [
      "300+ students in Quran classes",
      "50+ Islamic lectures annually",
      "10+ interfaith dialogue events",
      "5 Islamic teachers trained"
    ],
    contact: "dawah@humsj.edu.et",
    color: "emerald",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    name: "Community Services",
    icon: Heart,
    description: "Providing comprehensive support services to Muslim students and the broader community with compassion and dedication",
    mission: "To serve the Muslim community by addressing their social, emotional, and material needs through various support programs.",
    responsibilities: [
      "Managing community kitchen and meal programs",
      "Providing emergency financial assistance",
      "Offering counseling and mental health support",
      "Coordinating healthcare access programs",
      "Organizing charity drives and fundraising",
      "Supporting students in crisis situations"
    ],
    activities: [
      "Daily community kitchen operations",
      "Weekly food distribution programs",
      "Monthly health checkups",
      "Counseling sessions",
      "Emergency support hotline",
      "Charity collection drives"
    ],
    achievements: [
      "500+ meals served weekly",
      "200+ students supported annually",
      "50+ emergency cases handled",
      "₹500K+ in aid distributed"
    ],
    contact: "community@humsj.edu.et",
    color: "blue",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    name: "Media & Communications",
    icon: Megaphone,
    description: "Managing all communications, digital presence, and media relations to effectively share our message and connect with the community",
    mission: "To effectively communicate HUMSJ's activities, values, and achievements through modern media channels and traditional methods.",
    responsibilities: [
      "Managing social media platforms and website",
      "Creating and distributing newsletters",
      "Designing promotional materials and posters",
      "Coordinating with external media outlets",
      "Documenting events through photography and videography",
      "Maintaining digital archives and databases"
    ],
    activities: [
      "Daily social media updates",
      "Weekly newsletter publication",
      "Monthly video productions",
      "Event photography and coverage",
      "Website content management",
      "Public relations campaigns"
    ],
    achievements: [
      "10K+ social media followers",
      "100+ events documented",
      "50+ videos produced",
      "Weekly newsletter reach: 2,000+"
    ],
    contact: "media@humsj.edu.et",
    color: "purple",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    name: "Finance & Administration",
    icon: Calculator,
    description: "Managing financial resources, budgets, and administrative operations with transparency and Islamic principles",
    mission: "To ensure financial sustainability and administrative efficiency while maintaining Islamic ethical standards in all transactions.",
    responsibilities: [
      "Managing organizational budget and finances",
      "Collecting and distributing Zakat and Sadaqah",
      "Maintaining financial records and reports",
      "Coordinating scholarship programs",
      "Managing organizational assets and resources",
      "Ensuring financial transparency and accountability"
    ],
    activities: [
      "Monthly budget reviews",
      "Quarterly financial reports",
      "Zakat collection campaigns",
      "Scholarship application processing",
      "Financial aid distribution",
      "Asset inventory management"
    ],
    achievements: [
      "₹2M+ annual budget managed",
      "100+ scholarships awarded",
      "₹500K+ Zakat distributed",
      "100% financial transparency"
    ],
    contact: "finance@humsj.edu.et",
    color: "amber",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    name: "Events & Programs",
    icon: Calendar,
    description: "Organizing meaningful Islamic events, celebrations, and community programs throughout the year",
    mission: "To create memorable Islamic experiences that strengthen community bonds and celebrate our faith through well-organized events.",
    responsibilities: [
      "Planning and executing Eid celebrations",
      "Organizing Ramadan programs and Iftar",
      "Coordinating Islamic conferences and seminars",
      "Managing cultural and social events",
      "Arranging guest speaker visits",
      "Organizing sports and recreational activities"
    ],
    activities: [
      "Annual Eid celebrations",
      "Daily Ramadan Iftar programs",
      "Monthly community gatherings",
      "Quarterly Islamic conferences",
      "Sports tournaments",
      "Cultural nights and exhibitions"
    ],
    achievements: [
      "100+ events organized annually",
      "1,000+ participants in Eid celebrations",
      "30+ Ramadan Iftar programs",
      "10+ major conferences hosted"
    ],
    contact: "events@humsj.edu.et",
    color: "red",
    image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    name: "Women's Affairs",
    icon: Users,
    description: "Dedicated sector focusing on women's Islamic education, empowerment, and community engagement",
    mission: "To empower Muslim women through Islamic education, leadership development, and creating a supportive sisterhood environment.",
    responsibilities: [
      "Organizing women-specific Islamic classes",
      "Facilitating sister circles and support groups",
      "Coordinating women's health and wellness programs",
      "Developing women's leadership initiatives",
      "Managing women's prayer and study spaces",
      "Addressing women-specific community needs"
    ],
    activities: [
      "Weekly sister circles",
      "Monthly women's Islamic lectures",
      "Quarterly health workshops",
      "Leadership training programs",
      "Women's Quran study groups",
      "Mother and child programs"
    ],
    achievements: [
      "200+ women in programs",
      "50+ sister circles conducted",
      "20+ health workshops",
      "15+ women leaders trained"
    ],
    contact: "women@humsj.edu.et",
    color: "pink",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
  },
  {
    id: 7,
    name: "Security & Coordination",
    icon: Shield,
    description: "Ensuring safety, security, and smooth coordination of all Jama'a activities and events",
    mission: "To provide a safe and secure environment for all community members and ensure seamless coordination of organizational activities.",
    responsibilities: [
      "Managing event security and crowd control",
      "Coordinating between different sectors",
      "Ensuring safety protocols are followed",
      "Managing emergency response procedures",
      "Coordinating with university security",
      "Maintaining order during large gatherings"
    ],
    activities: [
      "Event security planning",
      "Regular safety drills",
      "Coordination meetings",
      "Emergency response training",
      "Security assessments",
      "Volunteer coordination"
    ],
    achievements: [
      "100+ events secured",
      "Zero security incidents",
      "50+ volunteers trained",
      "24/7 emergency response"
    ],
    contact: "security@humsj.edu.et",
    color: "slate",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
  }
];

const colorClasses = {
  emerald: {
    gradient: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-500/20",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    hover: "hover:bg-emerald-500/30"
  },
  blue: {
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-500/20",
    border: "border-blue-500/30",
    text: "text-blue-400",
    hover: "hover:bg-blue-500/30"
  },
  purple: {
    gradient: "from-purple-500 to-purple-600",
    bg: "bg-purple-500/20",
    border: "border-purple-500/30",
    text: "text-purple-400",
    hover: "hover:bg-purple-500/30"
  },
  amber: {
    gradient: "from-amber-500 to-amber-600",
    bg: "bg-amber-500/20",
    border: "border-amber-500/30",
    text: "text-amber-400",
    hover: "hover:bg-amber-500/30"
  },
  red: {
    gradient: "from-red-500 to-red-600",
    bg: "bg-red-500/20",
    border: "border-red-500/30",
    text: "text-red-400",
    hover: "hover:bg-red-500/30"
  },
  pink: {
    gradient: "from-pink-500 to-pink-600",
    bg: "bg-pink-500/20",
    border: "border-pink-500/30",
    text: "text-pink-400",
    hover: "hover:bg-pink-500/30"
  },
  slate: {
    gradient: "from-slate-500 to-slate-600",
    bg: "bg-slate-500/20",
    border: "border-slate-500/30",
    text: "text-slate-400",
    hover: "hover:bg-slate-500/30"
  }
};

export default function Sectors() {
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

          {/* Islamic Pattern */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%),
                               radial-gradient(circle at 50% 50%, #d4a853 0%, transparent 50%)`
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm text-emerald-300 rounded-full text-sm font-medium tracking-wider uppercase mb-6 border border-emerald-500/30">
                Organizational Structure
              </span>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-gold via-emerald-400 to-blue-400 bg-clip-text text-transparent font-bold mb-6">
                Seven Sectors of Service
              </h1>
              <p className="text-emerald-100 text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed">
                Since 1990, HUMSJ has been organized into seven specialized sectors, each dedicated to serving 
                the Muslim community with excellence, professionalism, and Islamic values. Every sector plays 
                a vital role in our mission to foster faith, knowledge, and brotherhood.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-white font-medium">
                  🎯 7 Specialized Sectors
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-white font-medium">
                  👥 100+ Active Members
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-white font-medium">
                  ⭐ 37 Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors Overview */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl text-slate-900 mb-4">
                Our Seven Sectors
              </h2>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                Each sector operates with dedicated teams, clear objectives, and measurable outcomes 
                to ensure comprehensive service to our community.
              </p>
            </div>

            {/* Sectors Grid */}
            <div className="space-y-16">
              {sectors.map((sector, index) => {
                const IconComponent = sector.icon;
                const colors = colorClasses[sector.color as keyof typeof colorClasses];

                return (
                  <Card key={sector.id} className={`overflow-hidden border-0 shadow-2xl ${index % 2 === 0 ? '' : 'bg-white/80'}`}>
                    <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Image */}
                      <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <img
                          src={sector.image}
                          alt={sector.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        
                        {/* Sector Number & Icon */}
                        <div className="absolute top-6 left-6 flex items-center gap-4">
                          <div className={`w-16 h-16 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center backdrop-blur-sm`}>
                            <IconComponent className={`w-8 h-8 ${colors.text}`} />
                          </div>
                          <Badge className={`bg-gradient-to-r ${colors.gradient} text-white text-lg px-4 py-2`}>
                            Sector {sector.id}
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                        <h3 className="font-display text-2xl lg:text-3xl text-slate-900 mb-4">
                          {sector.name}
                        </h3>
                        
                        <p className="text-slate-600 leading-relaxed mb-6">
                          {sector.description}
                        </p>

                        {/* Mission */}
                        <div className={`${colors.bg} ${colors.border} border-l-4 rounded-lg p-4 mb-6`}>
                          <h4 className="font-semibold text-slate-800 mb-2">Mission:</h4>
                          <p className="text-slate-700 text-sm leading-relaxed">
                            {sector.mission}
                          </p>
                        </div>

                        {/* Key Responsibilities */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient}`}></span>
                            Key Responsibilities
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {sector.responsibilities.slice(0, 4).map((resp, i) => (
                              <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                                <span className={colors.text}>•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-800 mb-3">Achievements:</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {sector.achievements.map((achievement, i) => (
                              <div key={i} className={`${colors.bg} rounded-lg p-3 text-center`}>
                                <p className="text-slate-800 font-bold text-sm">{achievement}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Contact */}
                        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                          <a href={`mailto:${sector.contact}`} className="text-slate-600 text-sm hover:text-emerald-600 transition-colors">
                            📧 {sector.contact}
                          </a>
                          <Button className={`bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white`}>
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Join a Sector CTA */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%),
                               radial-gradient(circle at 50% 50%, #d4a853 0%, transparent 50%)`
            }}></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
                Join a Sector Today
              </h2>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Be part of our mission to serve the Muslim community. Choose a sector that aligns 
                with your skills and passion, and contribute to 35 years of Islamic excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-gold to-amber-500 hover:from-amber-600 hover:to-gold text-white px-8 py-4 text-lg">
                  Apply to Join
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}