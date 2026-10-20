import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { FeatureGrid } from "@/components/home/feature-grid";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <Footer />
    </main>
  );
}
