import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivateDiningPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-grow container mx-auto px-6 py-32 mt-20 text-center">
        <h1 className="font-heading text-4xl font-bold text-primary mb-4">Private Dining</h1>
        <p className="text-muted-foreground">Information about our private VIP dining rooms is coming soon...</p>
      </div>
      <Footer />
    </main>
  );
}
