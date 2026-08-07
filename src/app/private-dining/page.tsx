import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const features = [
  { icon: "🎂", text: "Birthday Parties" },
  { icon: "💍", text: "Anniversary Celebration" },
  { icon: "💼", text: "Business Meetings" },
  { icon: "👨‍👩‍👧‍👦", text: "Family Gatherings" },
  { icon: "💖", text: "Romantic Dinner" },
  { icon: "👰‍♀️", text: "Pre-Wedding Dinner" },
  { icon: "🎉", text: "Small Private Events" },
  { icon: "🥂", text: "VIP Guest Dining" }
];

export default function PrivateDiningPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-40 pb-20 px-6 relative">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0"></div>
        
        <div className="container mx-auto relative z-10 max-w-4xl text-center">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">Exclusive Experience</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-8">Private Dining</h1>
          <p className="text-xl text-foreground/90 leading-relaxed font-light">
            Private Dining ka matlab hota hai restaurant ke andar ek alag, private room ya area, jahan sirf aap ya aapka group baithkar bina kisi disturbance ke khana enjoy kar sake.
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000&auto=format&fit=crop" 
                alt="Long Table Private Dining" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1000&auto=format&fit=crop" 
                alt="Round Table Private Dining" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop" 
                alt="Cozy Private Dining" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center md:text-left">
            Private Dining kis liye hota hai?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 bg-card/30 p-4 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                <span className="text-3xl">{feature.icon}</span>
                <span className="text-lg font-medium tracking-wide text-foreground/90">{feature.text}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] rounded-sm"
            >
              Book Your Private Room
              <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
