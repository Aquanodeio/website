import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import Strip from "@/components/Strip";
// import { Features } from "@/components/Features";
// import Services from "@/components/Services";
// import CapabilitiesBg from "@/assets/capabilities/capabilities-bg.png";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0A0118] overflow-x-hidden overflow-y-auto flex flex-col items-center">
      <Hero />
      <Strip />
      <Capabilities />
      {/* <Services />
      <Image
        src={CapabilitiesBg}
        alt="Decorative background pattern with gradient overlay for features section"
        width={1440}
        height={800}
        sizes="100vw"
        className="w-full h-auto"
        loading="lazy"
        quality={75}
      />
      <Features /> */}
      <NewsletterSection />
      <Footer />
    </main>
  );
}
