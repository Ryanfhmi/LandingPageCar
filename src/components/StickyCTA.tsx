import { useState, useEffect } from "react";
import { Phone, Calendar, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface StickyCtaProps {
  onOpenTestDrive: () => void;
}

export function StickyCTA({ onOpenTestDrive }: StickyCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-neutral-900 via-black to-neutral-900 border-t border-neutral-800 backdrop-blur-lg"
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left side - Message */}
              <div className="text-center md:text-left">
                <h3 className="text-white tracking-wide">
                  Ready to Experience Luxury?
                </h3>
                <p className="text-neutral-400 text-sm">
                  Schedule a private consultation with our specialists
                </p>
              </div>

              {/* Right side - Actions */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenTestDrive}
                  className="bg-white text-black px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2 tracking-wide"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="hidden sm:inline">Book Test Drive</span>
                  <span className="sm:hidden">Book Now</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border border-neutral-700 text-white px-6 py-3 rounded-full hover:bg-neutral-900 transition-colors flex items-center gap-2"
                  onClick={() => window.location.href = 'tel:+15551234567'}
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">Call Now</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border border-neutral-700 text-white px-4 py-3 rounded-full hover:bg-neutral-900 transition-colors md:hidden"
                  aria-label="Open chat"
                >
                  <MessageCircle className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
