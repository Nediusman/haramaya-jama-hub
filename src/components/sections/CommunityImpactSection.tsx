import { Heart, GraduationCap, Users, Utensils, BookOpen, Stethoscope, Home, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const impactAreas = [
  {
    icon: GraduationCap,
    title: "Educational Support",
    description: "Providing scholarships, tutoring, and academic mentorship to Muslim students",
    stats: "200+ students supported annually",
    programs: ["Merit Scholarships", "Peer Tutoring", "Academic Mentorship", "Study Groups"],
    color: "emerald",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop"
  },
  {
    icon: Utensils,
    title: "Food Security",
    description: "Ensuring no Muslim student goes hungry through community kitchen and meal programs",
    stats: "500+ meals served weekly",
    programs: ["Community Kitchen", "Ramadan Iftar", "Emergency Food Aid", "Nutrition Education"],
    color: "blue",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop"
  },
  {
    icon: Stethoscope,
    title: "Healthcare Access",
    description: "Connecting students with healthcare services and mental health support",
    stats: "150+ students assisted monthly",
    programs: ["Health Clinics", "Mental Health Support", "Medical Referrals", "Health Education"],
    color: "red",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  },
  {
    icon: Home,
    title: "Housing Assistance",
    description: "Helping students find safe, affordable housing and emergency accommodation",
    stats: "100+ housing placements yearly",
    programs: ["Housing Directory", "Emergency Shelter", "Roommate Matching", "Rent Assistance"],
    color: "amber",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
  },
  {
    icon: BookOpen,
    title: "Islamic Education",
    description: "Strengthening Islamic knowledge through classes, workshops, and study circles",
    stats: "300+ participants in programs",
    programs: ["Quran Classes", "Arabic Language", "Islamic History", "Fiqh Studies"],
    color: "purple",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
  },
  {
    icon: Globe,
    title: "Community Outreach",
    description: "Building bridges with the wider community through interfaith dialogue and service",
    stats: "50+ community events annually",
    programs: ["Interfaith Dialogue", "Community Service", "Cultural Exchange", "Public Speaking"],
    color: "teal",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
  }
];

const achievements = [
  {
    number: "35+",
    label: "Years of Service",
    description: "Continuously serving the Muslim community since 1990"
  },
  {
    number: "10,000+",
    label: "Lives Impacted",
    description: "Students and community members helped over the decades"
  },
  {
    number: "₹2M+",
    label: "Aid Distributed",
    description: "Financial assistance provided to students in need"
  },
  {
    number: "500+",
    label: "Graduates Supported",
    description: "Alumni who received support during their studies"
  }
];

const testimonials = [
  {
    name: "Aisha Mohammed",
    role: "Medical Graduate, Class of 2023",
    quote: "HUMSJ's scholarship program made my medical education possible. Without their support, I wouldn't be serving my community as a doctor today.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Omar Hassan",
    role: "Engineering Student",
    quote: "The community kitchen saved me during my toughest financial period. HUMSJ truly embodies the spirit of Islamic brotherhood.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Fatima Ali",
    role: "Alumni, Business Owner",
    quote: "The Islamic education programs at HUMSJ strengthened my faith and gave me the confidence to succeed in both dunya and akhirah.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

export function CommunityImpactSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50"></div>
      <div className="absolute inset-0 islamic-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-gold to-amber-300 rounded-full opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium tracking-wider uppercase mb-6">
            Making a Difference
          </span>
          <h2 className="font-display text-4xl md:text-6xl bg-gradient-to-r from-emerald-800 to-blue-800 bg-clip-text text-transparent mb-6">
            Community Impact
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed mb-8">
            For over three decades, HUMSJ has been a pillar of support for Muslim students and the 
            broader community, embodying the Islamic values of compassion, service, and brotherhood.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-gold mx-auto rounded-full"></div>
        </div>

        {/* Impact Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {impactAreas.map((area, index) => {
            const IconComponent = area.icon;
            const colorClasses = {
              emerald: "from-emerald-500 to-emerald-600 text-emerald-600 bg-emerald-100",
              blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-100",
              red: "from-red-500 to-red-600 text-red-600 bg-red-100",
              amber: "from-amber-500 to-amber-600 text-amber-600 bg-amber-100",
              purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-100",
              teal: "from-teal-500 to-teal-600 text-teal-600 bg-teal-100"
            };

            return (
              <Card key={area.title} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Icon */}
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-full ${colorClasses[area.color as keyof typeof colorClasses].split(' ')[4]} flex items-center justify-center`}>
                    <IconComponent className={`w-6 h-6 ${colorClasses[area.color as keyof typeof colorClasses].split(' ')[2]}`} />
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-slate-800">
                    {area.stats}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {area.description}
                  </p>
                  
                  {/* Programs */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-slate-800 uppercase tracking-wider">Programs:</h4>
                    <div className="flex flex-wrap gap-1">
                      {area.programs.map((program, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements Stats */}
        <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl text-white mb-4">
              Our Impact by Numbers
            </h3>
            <p className="text-emerald-100 text-lg">
              Measurable results of our commitment to serving the community
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gold mb-2">
                  {achievement.number}
                </div>
                <div className="text-white font-semibold mb-2">
                  {achievement.label}
                </div>
                <div className="text-emerald-200 text-sm">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl text-slate-900 mb-4">
              Stories of Impact
            </h3>
            <p className="text-slate-600 text-lg">
              Hear from community members whose lives have been transformed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-slate-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto shadow-lg border border-emerald-200/50">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="font-display text-2xl text-slate-900 mb-4">
              Join Our Mission
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Whether through volunteering, donations, or spreading awareness, you can be part of 
              our mission to serve the Muslim community and create positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                Volunteer With Us
              </Button>
              <Button variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                Make a Donation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}