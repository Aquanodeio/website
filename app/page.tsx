import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Capabilities } from "@/components/Capabilities";
import NewsletterSection from "@/components/NewsletterSection";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0A0118] overflow-x-hidden overflow-y-auto flex flex-col items-center">
      <Hero />
      <Features />
      <Capabilities />
      <Services />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
