import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import humsjLogo from "@/assets/humsj-logo.png";
const navLinks = [
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

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50);
    });
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-slate-900/95 backdrop-blur-md border-b border-emerald-500/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Enhanced HUMSJ Logo */}
          <a href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <img 
                src={humsjLogo} 
                alt="HUMSJ Logo" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              {/* Decorative Islamic elements around logo */}
              <div className="absolute -top-1 -right-1 text-gold text-xs opacity-70 animate-pulse">✦</div>
              <div className="absolute -bottom-1 -left-1 text-emerald-400 text-xs opacity-60 animate-pulse" style={{ animationDelay: "1s" }}>✦</div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-bold leading-tight bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
                HUMSJ
              </h1>
              <p className="text-sm font-medium text-emerald-200">
                Muslim Students Jema'a
              </p>
              <p className="text-xs text-emerald-300/80">
                Since 1990 • جماعة الطلاب المسلمين
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:bg-emerald-600/20 hover:text-emerald-200 transition-all duration-300 border border-transparent hover:border-emerald-500/30"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-to-r from-gold to-amber-500 hover:from-amber-600 hover:to-gold text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gold/30">
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-emerald-600/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 animate-slide-up">
            <div className="bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl p-4 space-y-2 border border-emerald-500/20">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-white hover:bg-emerald-600/20 hover:text-emerald-200 transition-colors border border-transparent hover:border-emerald-500/30"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-4 bg-gradient-to-r from-gold to-amber-500 hover:from-amber-600 hover:to-gold text-white font-semibold">
                Join Us
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
