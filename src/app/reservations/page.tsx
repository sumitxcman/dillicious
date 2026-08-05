"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiUsers, FiUser, FiPhone, FiMessageSquare } from "react-icons/fi";

export default function ReservationsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 flex-grow relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50 z-10" />
          <img 
            src="/about-us-1.jpg" 
            alt="Restaurant Ambience"
            className="w-full h-full object-cover opacity-50 absolute inset-0 z-0"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>

        <div className="container mx-auto px-6 h-full flex items-center relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            
            {/* Left side text */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
              >
                Reserve Your Table
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-8"
              >
                Experience Fine Dining
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground text-lg leading-relaxed mb-8"
              >
                Book your table at DILLICIOUS and immerse yourself in the luxurious ambiance of authentic 100% pure vegetarian cuisine from Dilli 06. 
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm inline-block"
              >
                <h3 className="font-heading font-semibold text-xl mb-2">Opening Hours</h3>
                <p className="text-muted-foreground">Monday – Sunday</p>
                <p className="text-primary font-medium">11:00 AM – 11:00 PM</p>
              </motion.div>
            </div>

            {/* Right side form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-black/40 backdrop-blur-xl border border-secondary/20 rounded-2xl p-8 md:p-12 shadow-2xl relative"
            >
              <form className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                      <FiUser className="text-primary" /> Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                      <FiPhone className="text-primary" /> Phone Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Date */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                      <FiCalendar className="text-primary" /> Date
                    </label>
                    <input 
                      type="date" 
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all [color-scheme:dark]"
                    />
                  </div>

                  {/* Time */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                      <FiClock className="text-primary" /> Time
                    </label>
                    <select className="bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all">
                      <option value="">Select time</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="19:00">07:00 PM</option>
                      <option value="20:00">08:00 PM</option>
                      <option value="21:00">09:00 PM</option>
                      <option value="22:00">10:00 PM</option>
                    </select>
                  </div>

                  {/* Guests */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                      <FiUsers className="text-primary" /> Guests
                    </label>
                    <select className="bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all">
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6">6+ People</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                    <FiMessageSquare className="text-primary" /> Special Requests
                  </label>
                  <textarea 
                    rows={3}
                    placeholder="Anniversary, birthday, dietary requirements..." 
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="button" 
                  className="mt-4 w-full bg-primary text-primary-foreground font-semibold uppercase tracking-widest py-4 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Confirm Reservation
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
