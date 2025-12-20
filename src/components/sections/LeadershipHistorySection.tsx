import { Calendar, Crown, Users, Award, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const leadershipEras = [
  {
    period: "1990-1995",
    title: "Foundation Era",
    amiri: "Sheikh Abdullah Hassan",
    description: "The founding years of HUMSJ, establishing the first Islamic student organization at Haramaya University.",
    achievements: [
      "Established the first Muslim prayer room on campus",
      "Organized the inaugural Islamic awareness week",
      "Created the foundation constitution",
      "Built relationships with local Islamic scholars"
    ],
    memberCount: "50+",
    keyEvents: ["First Eid celebration", "Quran study circles", "Friday prayers establishment"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },
  {
    period: "1995-2000",
    title: "Growth & Expansion",
    amiri: "Ustaz Mohammed Ibrahim",
    description: "Period of significant growth in membership and activities, expanding Islamic education programs.",
    achievements: [
      "Doubled membership to over 100 students",
      "Launched Islamic lecture series",
      "Established scholarship fund for needy students",
      "Created women's Islamic education program"
    ],
    memberCount: "100+",
    keyEvents: ["First Islamic conference", "Interfaith dialogue", "Community outreach programs"],
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop"
  },
  {
    period: "2000-2005",
    title: "Academic Integration",
    amiri: "Dr. Ahmed Yusuf",
    description: "Focus on integrating Islamic values with academic excellence and research.",
    achievements: [
      "Established Islamic research center",
      "Created academic mentorship programs",
      "Launched Islamic ethics in science initiative",
      "Built partnerships with international Islamic universities"
    ],
    memberCount: "200+",
    keyEvents: ["First research symposium", "International exchange program", "Islamic library establishment"],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
  },
  {
    period: "2005-2010",
    title: "Community Building",
    amiri: "Sheikh Omar Abdullahi",
    description: "Strengthening community bonds and expanding social welfare programs.",
    achievements: [
      "Launched community kitchen for students",
      "Established emergency support fund",
      "Created marriage counseling services",
      "Built stronger alumni network"
    ],
    memberCount: "300+",
    keyEvents: ["Community center opening", "Alumni reunion", "Charity drive success"],
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
  },
  {
    period: "2010-2015",
    title: "Digital Transformation",
    amiri: "Ustaz Hassan Mohammed",
    description: "Embracing technology to enhance Islamic education and community engagement.",
    achievements: [
      "Launched HUMSJ website and social media",
      "Created online Islamic courses",
      "Developed mobile app for prayer times",
      "Established digital library"
    ],
    memberCount: "400+",
    keyEvents: ["Website launch", "Online Quran competition", "Digital outreach success"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
  },
  {
    period: "2015-2020",
    title: "Global Connections",
    amiri: "Dr. Ibrahim Suleiman",
    description: "Building international partnerships and expanding global Islamic education networks.",
    achievements: [
      "Partnered with 10+ international Islamic organizations",
      "Hosted international Islamic youth conference",
      "Launched student exchange programs",
      "Created global alumni network"
    ],
    memberCount: "500+",
    keyEvents: ["International conference", "Global partnerships", "Youth leadership summit"],
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop"
  },
  {
    period: "2020-2024",
    title: "Modern Innovation",
    amiri: "Musa'ab Abdurhaman",
    description: "Era focusing on innovation, sustainability, and comprehensive Islamic education.",
    achievements: [
      "Launched comprehensive Islamic dashboard",
      "Created sustainable community programs",
      "Developed modern Islamic education curriculum",
      "Established mental health support services"
    ],
    memberCount: "600+",
    keyEvents: ["Digital transformation", "Sustainability initiatives", "Mental health programs"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
  },
  {
    period: "2024-2025",
    title: "Digital Excellence",
    amiri: "Omar Abdullahi",
    description: "Current era embracing cutting-edge technology and digital innovation for Islamic education and community engagement.",
    achievements: [
      "Advanced AI-powered Islamic learning platform",
      "Smart mosque management system",
      "Digital Quran memorization tools",
      "Virtual reality Hajj simulation program"
    ],
    memberCount: "650+",
    keyEvents: ["AI integration", "Smart technology adoption", "Virtual reality programs"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    current: true
  }
];

const milestones = [
  { year: "1990", event: "HUMSJ Founded", icon: "🏛️" },
  { year: "1995", event: "First Islamic Conference", icon: "🎯" },
  { year: "2000", event: "Research Center Established", icon: "📚" },
  { year: "2005", event: "Community Center Built", icon: "🏢" },
  { year: "2010", event: "Digital Platform Launch", icon: "💻" },
  { year: "2015", event: "International Partnerships", icon: "🌍" },
  { year: "2020", event: "Modern Innovation Era", icon: "🚀" },
  { year: "2024", event: "Digital Excellence Era", icon: "🤖" },
  { year: "2025", event: "650+ Active Members", icon: "👥" }
];

export function LeadershipHistorySection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-blue-50 to-amber-50"></div>
      <div className="absolute inset-0 islamic-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
            Our Journey Since 1990
          </span>
          <h2 className="font-display text-4xl md:text-6xl bg-gradient-to-r from-emerald-800 to-blue-800 bg-clip-text text-transparent mb-6">
            Leadership Through the Decades
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed mb-8">
            From humble beginnings in 1990 to becoming one of the most influential Islamic student 
            organizations in Ethiopia, discover the remarkable journey of HUMSJ leadership through 37 years.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-gold mx-auto rounded-full"></div>
        </div>

        {/* Timeline Milestones */}
        <div className="mb-20">
          <h3 className="text-2xl font-display text-center text-slate-800 mb-12">Key Milestones</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200/50 min-w-[120px]"
              >
                <div className="text-2xl mb-2">{milestone.icon}</div>
                <div className="text-lg font-bold text-emerald-700">{milestone.year}</div>
                <div className="text-xs text-center text-slate-600">{milestone.event}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Eras */}
        <div className="space-y-12">
          {leadershipEras.map((era, index) => (
            <Card
              key={era.period}
              className={`overflow-hidden border-0 shadow-xl ${
                era.current ? 'ring-2 ring-gold bg-gradient-to-br from-gold/5 to-amber/5' : 'bg-white/80 backdrop-blur-sm'
              }`}
            >
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={era.image}
                      alt={era.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Period Badge */}
                    <div className="absolute top-6 left-6">
                      <Badge className={`${era.current ? 'bg-gold text-white' : 'bg-emerald-600 text-white'} px-4 py-2 text-sm font-semibold`}>
                        {era.period}
                      </Badge>
                    </div>

                    {/* Current Era Badge */}
                    {era.current && (
                      <div className="absolute top-6 right-6">
                        <Badge className="bg-white text-emerald-700 px-3 py-1 text-xs font-semibold">
                          ✨ Current Era
                        </Badge>
                      </div>
                    )}

                    {/* Member Count */}
                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-semibold text-slate-800">{era.memberCount}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <Crown className={`w-6 h-6 ${era.current ? 'text-gold' : 'text-emerald-600'}`} />
                      <h3 className="font-display text-2xl lg:text-3xl text-slate-900">
                        {era.title}
                      </h3>
                    </div>

                    <div className="mb-4">
                      <p className="text-lg font-semibold text-emerald-700 mb-2">
                        Amiri: {era.amiri}
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        {era.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-gold" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {era.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Events */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        Notable Events
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {era.keyEvents.map((event, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {event}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legacy Statement */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="font-display text-3xl mb-6">
              37+ Years of Islamic Leadership
            </h3>
            <p className="text-xl leading-relaxed mb-8 text-emerald-100">
              From 50 founding members to over 650 active participants, HUMSJ has grown into 
              a beacon of Islamic education, community service, and spiritual development at 
              Haramaya University and beyond.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-gold mb-2">37+</div>
                <div className="text-sm text-emerald-200">Years of Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2">8</div>
                <div className="text-sm text-emerald-200">Leadership Eras</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2">650+</div>
                <div className="text-sm text-emerald-200">Current Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold mb-2">1200+</div>
                <div className="text-sm text-emerald-200">Alumni Network</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}