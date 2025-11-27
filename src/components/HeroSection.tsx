import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";
import { TestDriveModal } from "./TestDriveModal";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black via-neutral-900 to-black">
      {/* Background Video Overlay (simulated with image) */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1728416837405-1ac976badb23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xscyUyMHJveWNlJTIwYmxhY2slMjBsdXh1cnklMjBjYXIlMjBzaWRlfGVufDF8fHx8MTc2NDIwOTkyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Rolls-Royce Black Luxury Car"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6">
        <motion.div
          className="text-center max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block mb-6 px-6 py-2 border border-neutral-700 rounded-full backdrop-blur-sm bg-black/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-neutral-400 text-sm tracking-[0.3em]">LUXURY REDEFINED</span>
          </motion.div>
          
          <motion.h1
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="block text-white text-6xl md:text-7xl lg:text-8xl tracking-wider" 
                  style={{ 
                    fontFamily: 'serif',
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)'
                  }}>
              UNRIVALED LUXURY
            </span>
            <span className="block text-white text-6xl md:text-7xl lg:text-8xl tracking-wider mt-4" 
                  style={{ 
                    fontFamily: 'serif',
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)'
                  }}>
              ENDURES TIME
            </span>
          </motion.h1>

          <motion.p
            className="text-neutral-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Discover our exclusive collection of the world's most prestigious motor cars. 
            Each vehicle handcrafted to your exact specifications.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-10 py-4 rounded-full hover:bg-neutral-200 transition-colors tracking-wider"
              onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
            >
              EXPLORE COLLECTION
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-colors tracking-wider"
              onClick={() => setIsModalOpen(true)}
            >
              BOOK TEST DRIVE
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      <TestDriveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}