"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function AboutUs() {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="relative z-10 order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Our Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-8"
          >
            The Pure Vegetarian Culinary Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed mb-6"
          >
            Experience perfectly grilled, smoky, and flavorful dishes at DILLICIOUS – Taste of Dilli 06. Made with fresh ingredients, aromatic spices, and served hot, it's the perfect destination for every vegetarian food lover.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg leading-relaxed mb-12"
          >
            Whether you're planning a family dinner, a casual lunch, or a weekend outing, we offer a warm, luxurious ambience, delicious pure vegetarian cuisine, and exceptional hospitality.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/#about"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium tracking-wider uppercase text-sm transition-colors group"
            >
              Discover More 
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Image Composition */}
        <div className="relative h-[350px] lg:h-[600px] w-full order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-full bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl group"
          >
            <img 
              src="/paneer-tikka.jpg" 
              alt="Signature Mocktail"
              className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" 
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <span className="absolute text-muted-foreground/50 text-sm z-[-1]">Image: /paneer-tikka.jpg</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
