import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AquaServices } from "@/components/AquaServices";
import NewsletterSection from "@/components/NewsletterSection";
import UnifiedComputeSection from "@/components/UnifiedComputeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0A0118] overflow-x-hidden overflow-y-auto flex flex-col items-center">
      <Hero />
      <Features />
      <AquaServices />
      <UnifiedComputeSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
