"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden py-24 md:py-0">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[150px] z-10" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[150px] z-10" />
          <img 
            src="/hero-bg.jpg" 
            alt="Luxury Indian Cuisine"
            className="w-full h-full object-cover opacity-40 absolute inset-0 z-0"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
        <span className="absolute text-muted-foreground/50 text-sm z-[-1]">Image: /hero-bg.jpg</span>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-28 md:pt-0 relative z-20 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-4"
        >
          Welcome to
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70"
        >
          Where Delhi <br /> Meets Luxury
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl text-muted-foreground text-lg md:text-xl mb-12"
        >
          Experience an unparalleled culinary journey with our world-class fine dining, featuring the authentic flavors of Dilli 06 elevated to a 5-star premium experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link
            href="/reservations"
            className="group flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] rounded-sm"
          >
            Book a Table
            <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/menu"
            className="flex items-center justify-center px-8 py-4 text-sm font-medium border border-primary/50 text-foreground hover:bg-primary/10 transition-all duration-300 rounded-sm"
          >
            Explore Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
