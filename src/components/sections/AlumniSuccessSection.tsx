import { Trophy, Briefcase, Heart, Globe, Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const successStories = [
  {
    name: "Dr. Amina Yusuf",
    graduationYear: "2015",
    currentRole: "Chief Medical Officer",
    organization: "Addis Ababa Medical Center",
    field: "Healthcare Leadership",
    story: "From struggling to pay tuition fees to leading one of Ethiopia's premier medical facilities, Dr. Amina's journey exemplifies the transformative power of community support and Islamic values.",
    achievements: [
      "Led COVID-19 response team",
      "Established free clinic for underprivileged",
      "Published 15+ medical research papers",
      "Mentored 50+ medical students"
    ],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    quote: "HUMSJ taught me that success is not just about personal achievement, but about lifting others as you climb.",
    impact: "Treated 10,000+ patients",
    category: "Healthcare"
  },
  {
    name: "Engineer Yusuf Mohammed",
    graduationYear: "2018",
    currentRole: "Senior Software Architect",
    organization: "Microsoft Ethiopia",
    field: "Technology Innovation",
    story: "Starting from a small village with limited access to technology, Yusuf's passion for coding and the support from HUMSJ helped him reach the pinnacle of tech industry.",
    achievements: [
      "Developed AI solutions for agriculture",
      "Founded tech startup employing 25+ people",
      "Speaker at international conferences",
      "Established coding bootcamp for youth"
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    quote: "The Islamic principles of knowledge-seeking and community service guide every line of code I write.",
    impact: "Trained 200+ developers",
    category: "Technology"
  },
  {
    name: "Prof. Fatima Hassan",
    graduationYear: "2012",
    currentRole: "Professor of Islamic Studies",
    organization: "Al-Azhar University",
    field: "Islamic Education",
    story: "A brilliant scholar who combined traditional Islamic knowledge with modern pedagogical methods, now inspiring thousands of students across the globe.",
    achievements: [
      "Authored 8 books on Islamic jurisprudence",
      "Delivered lectures in 15+ countries",
      "Established women's Islamic education center",
      "Translated classical texts to Amharic"
    ],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    quote: "HUMSJ nurtured my love for Islamic scholarship and showed me how to serve Allah through education.",
    impact: "Educated 5,000+ students",
    category: "Education"
  },
  {
    name: "Entrepreneur Ahmed Ali",
    graduationYear: "2016",
    currentRole: "CEO & Founder",
    organization: "Halal Foods Ethiopia",
    field: "Social Entrepreneurship",
    story: "Transforming Ethiopia's food industry with halal-certified products while creating employment opportunities for hundreds of Muslim families.",
    achievements: [
      "Built $10M+ halal food empire",
      "Created 500+ jobs",
      "Exported to 8 African countries",
      "Established farmer cooperative network"
    ],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    quote: "HUMSJ's emphasis on ethical business practices shaped my approach to entrepreneurship.",
    impact: "Supported 1,000+ farmers",
    category: "Business"
  },
  {
    name: "Dr. Khadija Ibrahim",
    graduationYear: "2014",
    currentRole: "Human Rights Advocate",
    organization: "UN Women Ethiopia",
    field: "Social Justice",
    story: "Fighting for women's rights and social justice across Africa, combining Islamic values with international human rights advocacy.",
    achievements: [
      "Led policy reform initiatives",
      "Advocated for 1M+ women",
      "Received UN Human Rights Award",
      "Established legal aid clinic"
    ],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    quote: "Islam taught me that justice is a fundamental right, and HUMSJ gave me the platform to fight for it.",
    impact: "Legal aid to 2,000+ women",
    category: "Social Justice"
  },
  {
    name: "Imam Omar Suleiman",
    graduationYear: "2013",
    currentRole: "Community Leader",
    organization: "Islamic Center of Addis Ababa",
    field: "Religious Leadership",
    story: "Bridging traditional Islamic scholarship with contemporary challenges, serving as a spiritual guide for thousands of Muslims.",
    achievements: [
      "Established 5 new mosques",
      "Trained 100+ Islamic teachers",
      "Led interfaith peace initiatives",
      "Authored Islamic guidance books"
    ],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    quote: "HUMSJ taught me that true leadership is about serving others with humility and wisdom.",
    impact: "Guided 10,000+ community members",
    category: "Religious Leadership"
  }
];

const categories = ["All", "Healthcare", "Technology", "Education", "Business", "Social Justice", "Religious Leadership"];

const alumniStats = [
  { number: "1,000+", label: "Successful Alumni", description: "Graduates making impact worldwide" },
  { number: "50+", label: "Countries", description: "Where our alumni are serving" },
  { number: "₹100M+", label: "Economic Impact", description: "Generated by alumni businesses" },
  { number: "95%", label: "Employment Rate", description: "Within 6 months of graduation" }
];

export function AlumniSuccessSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-emerald-50 to-blue-50"></div>
      <div className="absolute inset-0 islamic-pattern-dense opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gold to-amber-300 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gold/20 text-amber-800 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
            Success Stories
          </span>
          <h2 className="font-display text-4xl md:text-6xl bg-gradient-to-r from-amber-800 to-emerald-800 bg-clip-text text-transparent mb-6">
            Alumni Excellence
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed mb-8">
            Meet the remarkable graduates who are making a difference in their communities and beyond, 
            carrying forward the values and knowledge gained during their time at HUMSJ.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Alumni Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {alumniStats.map((stat, index) => (
            <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gold/20">
              <div className="text-3xl font-bold text-amber-600 mb-2">{stat.number}</div>
              <div className="font-semibold text-slate-800 mb-1">{stat.label}</div>
              <div className="text-sm text-slate-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Success Stories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {successStories.map((story, index) => (
            <Card key={story.name} className="overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image */}
                <div className="md:col-span-2 relative">
                  <div className="aspect-square md:h-full">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gold text-white">
                        {story.category}
                      </Badge>
                    </div>

                    {/* Graduation Year */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-slate-800">
                      Class of {story.graduationYear}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="md:col-span-3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                          {story.name}
                        </h3>
                        <p className="text-emerald-600 font-semibold text-sm mb-1">
                          {story.currentRole}
                        </p>
                        <p className="text-slate-500 text-sm mb-2">
                          {story.organization}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <Trophy className="w-3 h-3 text-gold" />
                          <span>{story.impact}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {story.story}
                    </p>

                    {/* Quote */}
                    <div className="bg-emerald-50 rounded-lg p-4 mb-4 border-l-4 border-emerald-500">
                      <Quote className="w-4 h-4 text-emerald-600 mb-2" />
                      <p className="text-emerald-800 text-sm italic leading-relaxed">
                        {story.quote}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                        Key Achievements:
                      </h4>
                      <div className="grid grid-cols-1 gap-1">
                        {story.achievements.slice(0, 3).map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                            <Star className="w-3 h-3 text-gold flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-slate-400" />
                      <span className="text-xs text-slate-500">{story.field}</span>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">
                      Read Full Story
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Alumni Network CTA */}
        <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="font-display text-3xl text-white mb-4">
              Join Our Global Alumni Network
            </h3>
            <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
              Connect with fellow HUMSJ graduates worldwide, share opportunities, 
              and continue the legacy of excellence and service that defines our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gold hover:bg-amber-600 text-white">
                Join Alumni Network
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
                Share Your Story
              </Button>
            </div>
          </div>
        </div>

        {/* Mentorship Program */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-emerald-200/50">
            <h3 className="font-display text-2xl text-slate-900 mb-4">
              Alumni Mentorship Program
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Our successful alumni are committed to giving back by mentoring current students, 
              providing career guidance, and opening doors to new opportunities.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Career Guidance</h4>
                <p className="text-sm text-slate-600">One-on-one mentoring for career development</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Job Opportunities</h4>
                <p className="text-sm text-slate-600">Access to exclusive job openings and internships</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">Global Network</h4>
                <p className="text-sm text-slate-600">Connect with alumni in 50+ countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}