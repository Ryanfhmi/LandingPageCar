import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-neutral-800" 
          : "bg-black/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-white tracking-[0.3em] text-sm hover:text-neutral-300 transition-colors cursor-pointer">
            ROLLS‑ROYCE
          </div>
        </div>
        
        {/* Center Menu - Desktop */}
        <div className="hidden md:flex items-center gap-12">
          <a 
            href="#about" 
            className="text-white/90 hover:text-white transition-colors text-sm tracking-wide"
          >
            Our Story
          </a>
          <a 
            href="#collection" 
            className="text-white/90 hover:text-white transition-colors text-sm tracking-wide"
          >
            Collection
          </a>
          <a 
            href="#" 
            className="text-white/90 hover:text-white transition-colors text-sm tracking-wide"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Models
          </a>
          <a 
            href="#" 
            className="text-white/90 hover:text-white transition-colors text-sm tracking-wide"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-neutral-300 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-neutral-800">
          <div className="px-6 py-6 space-y-4">
            <a 
              href="#about" 
              className="block text-white/90 hover:text-white transition-colors text-sm tracking-wide py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Story
            </a>
            <a 
              href="#collection" 
              className="block text-white/90 hover:text-white transition-colors text-sm tracking-wide py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collection
            </a>
            <a 
              href="#" 
              className="block text-white/90 hover:text-white transition-colors text-sm tracking-wide py-2"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Models
            </a>
            <a 
              href="#" 
              className="block text-white/90 hover:text-white transition-colors text-sm tracking-wide py-2"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}