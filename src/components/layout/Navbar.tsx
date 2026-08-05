"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Private Dining", href: "/private-dining" },
  { name: "Reservations", href: "/reservations" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-secondary/30 shadow-[0_4px_30px_rgba(122,0,25,0.1)]"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 relative z-10 group">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-background">
            <img src="/logo.jpg" alt="Dillicious Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-heading text-2xl font-bold tracking-widest text-primary uppercase leading-none">
              DILLICIOUS
            </span>
            <span className="text-[0.55rem] tracking-[0.25em] text-foreground/80 uppercase mt-1">
              Taste of Dilli 06
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">


          <Link
            href="/reservations"
            className="px-6 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)] rounded-sm"
          >
            Book a Table
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-white/5"
        >
          <div className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium tracking-widest text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-6 mt-4">


            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
