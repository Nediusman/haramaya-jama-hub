import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import humsjLogo from "@/assets/humsj-logo.png";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Leadership", href: "/leadership" },
  { name: "Sectors", href: "/sectors" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Alumni", href: "/alumni" },
  { name: "Resources", href: "/resources" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Enhanced HUMSJ Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={humsjLogo} 
                alt="HUMSJ Logo" 
                className="h-16 w-auto"
              />
              <div>
                <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
                  HUMSJ
                </h3>
                <p className="text-primary-foreground/80 text-base font-medium">
                  Muslim Students Jama'a
                </p>
                <p className="text-primary-foreground/60 text-sm">
                  جماعة الطلاب المسلمين
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md mb-6">
              Serving the Muslim student community at Haramaya University with dedication to faith, 
              knowledge, and brotherhood since 1990. 35 years of Islamic excellence and community service.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">Contact Info</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Haramaya University</p>
                  <p className="text-sm">Dire Dawa, Ethiopia</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:humsj@haramaya.edu.et" className="hover:text-gold transition-colors">
                  humsj@haramaya.edu.et
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+251-25-553-0011" className="hover:text-gold transition-colors">
                  +251-25-553-0011
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-primary-foreground/60 text-sm mb-1">
              © {new Date().getFullYear()} Haramaya University Muslim Students Jama'a (HUMSJ). All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-xs">
              Serving the Muslim community since 1990 • 35 years of excellence
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="font-arabic text-gold text-xl mb-1">
              جزاكم الله خيراً
            </p>
            <p className="text-primary-foreground/60 text-xs">
              May Allah reward you with goodness
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
