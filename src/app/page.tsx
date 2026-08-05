import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/AboutUs";
import SignatureDishes from "@/components/home/SignatureDishes";
import Reviews from "@/components/home/Reviews";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AboutUs />
      <SignatureDishes />
      <Reviews />
      <Footer />
    </main>
  );
}
