import Link from "next/link";
import { FiMapPin, FiPhone, FiClock, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-background border-t-2 border-secondary/40 pt-20 pb-10 relative overflow-hidden">
      {/* Subtle Burgundy Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-secondary/10 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        
        {/* Brand */}
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center gap-4 mb-6 group">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-background shrink-0">
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
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Experience an unparalleled culinary journey with our world-class fine dining, featuring the authentic 100% pure vegetarian flavors of Dilli 06 elevated to a 5-star premium experience.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <FiInstagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <FiFacebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <FiTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-xl font-semibold mb-6 text-foreground tracking-wide">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/#about" className="text-muted-foreground hover:text-primary text-sm transition-colors">Our Story</Link></li>
            <li><Link href="/menu" className="text-muted-foreground hover:text-primary text-sm transition-colors">Luxury Menu</Link></li>
            <li><Link href="/reservations" className="text-muted-foreground hover:text-primary text-sm transition-colors">Book a Table</Link></li>
            <li><Link href="/private-dining" className="text-muted-foreground hover:text-primary text-sm transition-colors">Private Dining</Link></li>
            <li><Link href="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">Events & Catering</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading text-xl font-semibold mb-6 text-foreground tracking-wide">Contact Us</h4>
          <ul className="flex flex-col gap-6">
            <li className="flex gap-4 items-start">
              <FiMapPin className="text-primary mt-1 shrink-0" size={18} />
              <span className="text-muted-foreground text-sm leading-relaxed">
                Metro Walk Mall, GA-14, Swarn Jayanti Park, Sector 10, Rohini, Delhi, 110085
              </span>
            </li>
            <li className="flex gap-4 items-center">
              <FaWhatsapp className="text-[#25D366] shrink-0" size={18} />
              <a 
                href="https://wa.me/918700087329" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2"
              >
                087000 87329
                <span className="text-[0.6rem] uppercase tracking-wider text-[#25D366] font-medium border border-[#25D366]/30 px-2 py-0.5 rounded-full bg-[#25D366]/10">
                  Chat Now
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="font-heading text-xl font-semibold mb-6 text-foreground tracking-wide">Opening Hours</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4 items-start">
              <FiClock className="text-primary mt-1 shrink-0" size={18} />
              <div className="flex flex-col gap-2">
                <div className="flex justify-between w-48 text-sm">
                  <span className="text-muted-foreground">Mon - Sun:</span>
                  <span className="text-foreground">11:00 AM - 11:00 PM</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div className="container mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} DILLICIOUS - Taste of Dilli 06. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/" className="text-muted-foreground hover:text-primary text-xs transition-colors">Privacy Policy</Link>
          <Link href="/" className="text-muted-foreground hover:text-primary text-xs transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
