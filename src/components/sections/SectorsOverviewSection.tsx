import { BookOpen, Heart, Megaphone, Calculator, Calendar, Users, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sectorsOverview = [
  {
    id: 1,
    name: "Da'wah & Islamic Education",
    icon: BookOpen,
    description: "Spreading Islamic knowledge through education and outreach programs",
    color: "emerald",
    stats: "300+ students"
  },
  {
    id: 2,
    name: "Community Services",
    icon: Heart,
    description: "Providing comprehensive support services to the Muslim community",
    color: "blue",
    stats: "500+ meals weekly"
  },
  {
    id: 3,
    name: "Media & Communications",
    icon: Megaphone,
    description: "Managing digital presence and media relations effectively",
    color: "purple",
    stats: "10K+ followers"
  },
  {
    id: 4,
    name: "Finance & Administration",
    icon: Calculator,
    description: "Managing resources with transparency and Islamic principles",
    color: "amber",
    stats: "₹2M+ managed"
  },
  {
    id: 5,
    name: "Events & Programs",
    icon: Calendar,
    description: "Organizing meaningful Islamic events and celebrations",
    color: "red",
    stats: "100+ events yearly"
  },
  {
    id: 6,
    name: "Women's Affairs",
    icon: Users,
    description: "Empowering Muslim women through education and leadership",
    color: "pink",
    stats: "200+ women served"
  },
  {
    id: 7,
    name: "Security & Coordination",
    icon: Shield,
    description: "Ensuring safety and smooth coordination of all activities",
    color: "slate",
    stats: "Zero incidents"
  }
];

const colorClasses = {
  emerald: "from-emerald-500 to-emerald-600 bg-emerald-500/20 border-emerald-500/30 text-emerald-400",
  blue: "from-blue-500 to-blue-600 bg-blue-500/20 border-blue-500/30 text-blue-400",
  purple: "from-purple-500 to-purple-600 bg-purple-500/20 border-purple-500/30 text-purple-400",
  amber: "from-amber-500 to-amber-600 bg-amber-500/20 border-amber-500/30 text-amber-400",
  red: "from-red-500 to-red-600 bg-red-500/20 border-red-500/30 text-red-400",
  pink: "from-pink-500 to-pink-600 bg-pink-500/20 border-pink-500/30 text-pink-400",
  slate: "from-slate-500 to-slate-600 bg-slate-500/20 border-slate-500/30 text-slate-400"
};

export function SectorsOverviewSection() {
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
            Organizational Structure
          </span>
          <h2 className="font-display text-4xl md:text-6xl bg-gradient-to-r from-emerald-800 to-blue-800 bg-clip-text text-transparent mb-6">
            Seven Sectors of Excellence
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed mb-8">
            Our Jama'a operates through seven specialized sectors, each dedicated to serving 
            the Muslim community with professionalism, dedication, and Islamic values.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-gold mx-auto rounded-full"></div>
        </div>

        {/* Sectors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {sectorsOverview.map((sector) => {
            const IconComponent = sector.icon;
            const colors = colorClasses[sector.color as keyof typeof colorClasses];

            return (
              <Card
                key={sector.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full ${colors.split(' ')[2]} ${colors.split(' ')[3]} border flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${colors.split(' ')[4]}`} />
                    </div>
                    <Badge className={`bg-gradient-to-r ${colors.split(' ')[0]} ${colors.split(' ')[1]} text-white border-0 text-xs`}>
                      Sector {sector.id}
                    </Badge>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                    {sector.name}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {sector.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <span className="text-xs font-semibold text-slate-500">{sector.stats}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto shadow-lg border border-emerald-200/50">
            <h3 className="font-display text-2xl text-slate-900 mb-4">
              Explore Our Sectors in Detail
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Learn more about each sector's mission, activities, achievements, and how you can 
              contribute to our 35-year legacy of Islamic excellence and community service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/sectors">
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                  View All Sectors
                </Button>
              </a>
              <a href="/contact">
                <Button variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                  Join a Sector
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}