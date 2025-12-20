import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Weekly Jumu'ah Prayer",
    date: "Every Friday",
    time: "1:00 PM",
    location: "Campus Mosque",
    category: "Prayer",
    featured: true,
  },
  {
    title: "Quran Study Circle",
    date: "Every Sunday",
    time: "4:00 PM",
    location: "Islamic Center",
    category: "Education",
    featured: false,
  },
  {
    title: "Youth Islamic Conference",
    date: "January 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    category: "Conference",
    featured: true,
  },
  {
    title: "Sisters' Halaqah",
    date: "Every Wednesday",
    time: "3:30 PM",
    location: "Sisters' Hall",
    category: "Education",
    featured: false,
  },
];

export function EventsSection() {
  return (
    <section id="events" className="py-20 lg:py-32 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
              Upcoming Events
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground">
              Join Our Community
            </h2>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 w-fit">
            View All Events
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`group bg-card rounded-xl border border-border overflow-hidden card-hover ${
                event.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {event.category}
                  </span>
                  {event.featured && (
                    <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-muted-foreground text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
