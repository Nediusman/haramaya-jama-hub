import { useState } from "react";
import { X } from "lucide-react";
import lecture1 from "@/assets/gallery/lecture-1.png";

const galleryImages = [
  {
    src: lecture1,
    alt: "Islamic Lecture Session",
    title: "Weekly Halaqa",
    category: "Lectures",
  },
  {
    src: lecture1,
    alt: "Community Gathering",
    title: "Community Gathering",
    category: "Events",
  },
  {
    src: lecture1,
    alt: "Quran Study Circle",
    title: "Quran Study Circle",
    category: "Education",
  },
  {
    src: lecture1,
    alt: "Ramadan Iftar",
    title: "Ramadan Iftar",
    category: "Ramadan",
  },
  {
    src: lecture1,
    alt: "Eid Celebration",
    title: "Eid Celebration",
    category: "Events",
  },
  {
    src: lecture1,
    alt: "Da'wah Program",
    title: "Da'wah Program",
    category: "Outreach",
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm tracking-wider uppercase mb-4 block">
            Our Memories
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Photo Gallery
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Capturing moments of faith, learning, and brotherhood at HUMSJ events and activities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer card-hover"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-gold text-sm font-medium">{image.category}</span>
                  <h3 className="text-primary-foreground font-display text-xl">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-center">
                <span className="text-gold text-sm font-medium">{selectedImage.category}</span>
                <h3 className="text-primary-foreground font-display text-2xl">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
