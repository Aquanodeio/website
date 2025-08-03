import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Capabilities } from "@/components/Capabilities";
import NewsletterSection from "@/components/NewsletterSection";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Strip from "@/components/Strip";
import CapabilitiesBg from "@/assets/capabilities/capabilities-bg.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0A0118] overflow-x-hidden overflow-y-auto flex flex-col items-center">
      <Hero />
      <Strip />
      <Capabilities />
      <Services />
      <Image
        src={CapabilitiesBg}
        alt=""
        width={1440}
        height={800}
        sizes="100vw"
        className="w-full h-auto"
      />
      <Features />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
