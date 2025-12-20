import { Mail, Crown, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// 37 Years of Leadership - Amirs and Vice Amirs (1990-2025) - Sorted Chronologically
const leadershipHistory = [
  // 1990-1992
  { name: "Sheikh Abdullah Hassan", role: "Amiri", years: "1990-1992", era: "Foundation Era", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face", startYear: 1990 },
  { name: "Ustaz Mohammed Ali", role: "Vice Amiri", years: "1990-1992", era: "Foundation Era", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face", startYear: 1990 },
  
  // 1992-1995
  { name: "Ahmed Yusuf", role: "Amiri", years: "1992-1995", era: "Foundation Era", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face", startYear: 1992 },
  { name: "Fatima Hassan", role: "Vice Amiri", years: "1992-1995", era: "Foundation Era", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face", startYear: 1992 },
  
  // 1993-1994 (Interim)
  { name: "Abdullahi Omar", role: "Amiri", years: "1993-1994", era: "Foundation Era", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face", startYear: 1993 },
  { name: "Sahra Hassan", role: "Vice Amiri", years: "1993-1994", era: "Foundation Era", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face", startYear: 1993 },
  
  // 1995-1997
  { name: "Ustaz Mohammed Ibrahim", role: "Amiri", years: "1995-1997", era: "Growth & Expansion", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face", startYear: 1995 },
  { name: "Amina Suleiman", role: "Vice Amiri", years: "1995-1997", era: "Growth & Expansion", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face", startYear: 1995 },
  
  // 1997-2000
  { name: "Omar Hassan", role: "Amiri", years: "1997-2000", era: "Growth & Expansion", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face", startYear: 1997 },
  { name: "Khadija Mohammed", role: "Vice Amiri", years: "1997-2000", era: "Growth & Expansion", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face", startYear: 1997 },
  
  // 1998-1999 (Interim)
  { name: "Hussein Ali", role: "Amiri", years: "1998-1999", era: "Growth & Expansion", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face", startYear: 1998 },
  { name: "Mariam Yusuf", role: "Vice Amiri", years: "1998-1999", era: "Growth & Expansion", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face", startYear: 1998 },
  
  // 2000-2002
  { name: "Dr. Ahmed Yusuf", role: "Amiri", years: "2000-2002", era: "Academic Integration", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face", startYear: 2000 },
  { name: "Zeinab Ali", role: "Vice Amiri", years: "2000-2002", era: "Academic Integration", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face", startYear: 2000 },
  
  // 2002-2005
  { name: "Ibrahim Abdullahi", role: "Amiri", years: "2002-2005", era: "Academic Integration", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face", startYear: 2002 },
  { name: "Maryam Hassan", role: "Vice Amiri", years: "2002-2005", era: "Academic Integration", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face", startYear: 2002 },
  
  // 2003-2004 (Interim)
  { name: "Salim Mohammed", role: "Amiri", years: "2003-2004", era: "Academic Integration", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face", startYear: 2003 },
  { name: "Hawa Ibrahim", role: "Vice Amiri", years: "2003-2004", era: "Academic Integration", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face", startYear: 2003 },
  
  // 2005-2007
  { name: "Sheikh Omar Abdullahi", role: "Amiri", years: "2005-2007", era: "Community Building", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face", startYear: 2005 },
  { name: "Aisha Mohammed", role: "Vice Amiri", years: "2005-2007", era: "Community Building", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face", startYear: 2005 },
  
  // 2007-2010
  { name: "Yusuf Ibrahim", role: "Amiri", years: "2007-2010", era: "Community Building", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face", startYear: 2007 },
  { name: "Halima Ali", role: "Vice Amiri", years: "2007-2010", era: "Community Building", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face", startYear: 2007 },
  
  // 2008-2009 (Interim)
  { name: "Ismail Hassan", role: "Amiri", years: "2008-2009", era: "Community Building", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face", startYear: 2008 },
  { name: "Amina Omar", role: "Vice Amiri", years: "2008-2009", era: "Community Building", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face", startYear: 2008 },
  
  // 2010-2012
  { name: "Ustaz Hassan Mohammed", role: "Amiri", years: "2010-2012", era: "Digital Transformation", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face", startYear: 2010 },
  { name: "Safiya Hassan", role: "Vice Amiri", years: "2010-2012", era: "Digital Transformation", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face", startYear: 2010 },
  
  // 2012-2015
  { name: "Mohammed Suleiman", role: "Amiri", years: "2012-2015", era: "Digital Transformation", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face", startYear: 2012 },
  { name: "Rahma Yusuf", role: "Vice Amiri", years: "2012-2015", era: "Digital Transformation", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face", startYear: 2012 },
  
  // 2013-2014 (Interim)
  { name: "Tariq Ali", role: "Amiri", years: "2013-2014", era: "Digital Transformation", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face", startYear: 2013 },
  
  // 2015-2017
  { name: "Dr. Ibrahim Suleiman", role: "Amiri", years: "2015-2017", era: "Global Connections", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face", startYear: 2015 },
  { name: "Nadia Mohammed", role: "Vice Amiri", years: "2015-2017", era: "Global Connections", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face", startYear: 2015 },
  
  // 2017-2020
  { name: "Ali Hassan", role: "Amiri", years: "2017-2020", era: "Global Connections", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face", startYear: 2017 },
  { name: "Layla Ibrahim", role: "Vice Amiri", years: "2017-2020", era: "Global Connections", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face", startYear: 2017 },
  
  // 2020-2022
  { name: "Musa'ab Abdurhaman", role: "Amiri", years: "2020-2022", era: "Modern Innovation", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face", startYear: 2020 },
  { name: "Yasmin Ali", role: "Vice Amiri", years: "2020-2022", era: "Modern Innovation", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face", startYear: 2020 },
  
  // 2022-2024
  { name: "Ahmed Mohammed", role: "Amiri", years: "2022-2024", era: "Modern Innovation", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face", startYear: 2022 },
  { name: "Fatima Ibrahim", role: "Vice Amiri", years: "2022-2024", era: "Modern Innovation", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face", startYear: 2022 },
  
  // 2024-2025 (Current)
  { name: "Omar Abdullahi", role: "Amiri", years: "2024-2025", era: "Digital Excellence", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face", startYear: 2024, current: true },
  { name: "Zara Mohammed", role: "Vice Amiri", years: "2024-2025", era: "Digital Excellence", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face", startYear: 2024, current: true },
];

// Sort leaders chronologically by start year
const sortedLeadershipHistory = leadershipHistory.sort((a, b) => a.startYear - b.startYear);

const eraColors = {
  "Foundation Era": "emerald",
  "Growth & Expansion": "blue", 
  "Academic Integration": "purple",
  "Community Building": "amber",
  "Digital Transformation": "red",
  "Global Connections": "pink",
  "Modern Innovation": "gold",
  "Digital Excellence": "cyan"
};

export function LeadershipSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Beautiful Mosque-themed Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      
      {/* Mosque Silhouettes Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <svg width="150" height="90" viewBox="0 0 150 90" className="text-gold">
            <path d="M20 75 L20 55 Q20 50 25 50 L45 50 Q50 50 50 55 L50 75 Z M50 75 L50 40 Q50 35 55 35 L95 35 Q100 35 100 40 L100 75 Z M100 75 L100 55 Q100 50 105 50 L125 50 Q130 50 130 55 L130 75 Z" fill="currentColor"/>
            <ellipse cx="75" cy="35" rx="22" ry="12" fill="currentColor"/>
            <rect x="37" y="15" width="4" height="35" fill="currentColor"/>
            <rect x="109" y="15" width="4" height="35" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute top-20 right-20">
          <svg width="120" height="72" viewBox="0 0 120 72" className="text-emerald-500">
            <path d="M15 60 L15 45 Q15 40 20 40 L35 40 Q40 40 40 45 L40 60 Z M40 60 L40 30 Q40 25 45 25 L75 25 Q80 25 80 30 L80 60 Z M80 60 L80 45 Q80 40 85 40 L100 40 Q105 40 105 45 L105 60 Z" fill="currentColor"/>
            <ellipse cx="60" cy="25" rx="18" ry="10" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gold/10 to-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, #d4a853 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm text-emerald-300 rounded-full text-sm font-medium tracking-wider uppercase mb-6 border border-emerald-500/30">
            37 Years of Leadership Excellence
          </span>
          <h2 className="font-display text-4xl md:text-6xl bg-gradient-to-r from-gold via-emerald-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Amirs & Vice Amirs
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-8">
            Honoring the dedicated leaders who have guided our Jama'a through 37 years of service, 
            from 1990 to 2025. Each leader has contributed to our legacy of faith, education, and community building.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-emerald-400 mx-auto rounded-full"></div>
        </div>

        {/* Leadership Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-gold mb-2">37</div>
            <div className="text-sm text-gray-300">Total Leaders</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-emerald-400 mb-2">8</div>
            <div className="text-sm text-gray-300">Leadership Eras</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">37</div>
            <div className="text-sm text-gray-300">Years of Service</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">2</div>
            <div className="text-sm text-gray-300">Current Leaders</div>
          </div>
        </div>

        {/* Leadership Gallery */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
          {sortedLeadershipHistory.map((leader) => {
            const colorClasses = {
              emerald: "from-emerald-500 to-emerald-600 bg-emerald-500/20 border-emerald-500/30 text-emerald-400",
              blue: "from-blue-500 to-blue-600 bg-blue-500/20 border-blue-500/30 text-blue-400",
              purple: "from-purple-500 to-purple-600 bg-purple-500/20 border-purple-500/30 text-purple-400",
              amber: "from-amber-500 to-amber-600 bg-amber-500/20 border-amber-500/30 text-amber-400",
              red: "from-red-500 to-red-600 bg-red-500/20 border-red-500/30 text-red-400",
              pink: "from-pink-500 to-pink-600 bg-pink-500/20 border-pink-500/30 text-pink-400",
              gold: "from-yellow-500 to-amber-500 bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
              cyan: "from-cyan-500 to-cyan-600 bg-cyan-500/20 border-cyan-500/30 text-cyan-400"
            };

            const eraColor = eraColors[leader.era as keyof typeof eraColors] as keyof typeof colorClasses;

            return (
              <Card
                key={`${leader.name}-${leader.years}`}
                className={`group overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                  leader.current ? 'ring-2 ring-gold shadow-2xl shadow-gold/20' : ''
                }`}
              >
                <div className="relative">
                  {/* Profile Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Role Badge */}
                    <div className="absolute top-3 left-3">
                      <Badge className={`${colorClasses[eraColor]?.split(' ')[0]} ${colorClasses[eraColor]?.split(' ')[1]} text-white border-0 text-xs`}>
                        {leader.role}
                      </Badge>
                    </div>

                    {/* Current Leader Badge */}
                    {leader.current && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-gold text-black text-xs font-bold animate-pulse">
                          <Crown className="w-3 h-3 mr-1" />
                          Current
                        </Badge>
                      </div>
                    )}

                    {/* Years Served */}
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-xs font-semibold">{leader.years}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-display text-sm font-bold text-white mb-1 group-hover:text-gold transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className={`text-xs mb-2 ${colorClasses[eraColor]?.split(' ')[4]}`}>
                    {leader.era}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {leader.role === "Amiri" ? (
                        <Crown className="w-3 h-3 text-gold" />
                      ) : (
                        <Star className="w-3 h-3 text-blue-400" />
                      )}
                      <span className="text-xs text-gray-400">{leader.role}</span>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${colorClasses[eraColor]?.split(' ')[0]} ${colorClasses[eraColor]?.split(' ')[1]}`}></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Era Legend */}
        <div className="mb-16">
          <h3 className="text-2xl font-display text-center text-white mb-8">Leadership Eras</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(eraColors).map(([era, color]) => {
              const colorClasses = {
                emerald: "bg-emerald-500/20 border-emerald-500/30 text-emerald-400",
                blue: "bg-blue-500/20 border-blue-500/30 text-blue-400",
                purple: "bg-purple-500/20 border-purple-500/30 text-purple-400",
                amber: "bg-amber-500/20 border-amber-500/30 text-amber-400",
                red: "bg-red-500/20 border-red-500/30 text-red-400",
                pink: "bg-pink-500/20 border-pink-500/30 text-pink-400",
                gold: "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
                cyan: "bg-cyan-500/20 border-cyan-500/30 text-cyan-400"
              };

              return (
                <div
                  key={era}
                  className={`px-4 py-2 rounded-full border backdrop-blur-sm ${colorClasses[color as keyof typeof colorClasses]}`}
                >
                  <span className="text-sm font-medium">{era}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legacy Statement */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto border border-white/20">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-amber-500 rounded-full flex items-center justify-center">
                <Crown className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="font-display text-3xl text-white mb-6">
              Legacy of Leadership Excellence
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              From Sheikh Abdullah Hassan in 1990 to our current leaders Omar Abdullahi and Zara Mohammed, 
              each Amiri and Vice Amiri has contributed to building a stronger, more vibrant Muslim community 
              at Haramaya University. Their dedication, wisdom, and service continue to inspire new generations.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-gold mb-2">37</div>
                <div className="text-sm text-gray-300">Years of Continuous Leadership</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">19</div>
                <div className="text-sm text-gray-300">Amirs Who Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">18</div>
                <div className="text-sm text-gray-300">Vice Amirs Who Served</div>
              </div>
            </div>
            <div className="mt-8">
              <Button className="bg-gradient-to-r from-gold to-amber-500 hover:from-amber-600 hover:to-gold text-white px-8 py-3">
                <Mail className="w-4 h-4 mr-2" />
                Honor Our Leaders
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
