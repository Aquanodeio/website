import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import FeatureRequest from "@/components/FeatureRequest";
import Footer from "@/components/Footer";
import Strip from "@/components/Strip";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0A0118] overflow-x-hidden overflow-y-auto flex flex-col items-center">
      <Hero />
      <Strip />
      <Features />
      <FeatureRequest />
      <Footer />
    </main>
  );
}
