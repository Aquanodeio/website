// import { Hero } from "@/components/Hero";
// import { Features } from "@/components/Features";
// import FeatureRequest from "@/components/FeatureRequest";
// import Footer from "@/components/Footer";
// import Strip from "@/components/Strip";

// export default function Home() {
//   return (
//     <main className="min-h-screen w-full bg-[#0A0118] overflow-x-hidden overflow-y-auto flex flex-col items-center">
//       <Hero />
//       <Strip />
//       <Features />
//       <FeatureRequest />
//       <Footer />
//     </main>
//   );
// }

import HeroNavbar from "@/components/Home/HeroNavbar";
import HeroSection from "@/components/Home/HeroSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import GPUPickerSection from "@/components/Home/GPUPickerSection";
import PricingComparisonSection from "@/components/Home/PricingComparisonSection";
import WhyChooseSection from "@/components/Home/WhyChooseSection";
import FooterCTA from "@/components/Home/FooterCTA";

export default function Home() {
  return (
    <main className="relative w-full" style={{ fontFamily: 'var(--font-geist-sans)' }}>
      {/* Hero Section with dark background */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background elements - full viewport coverage */}
        {/* Base dark background */}
        <div className="absolute inset-0 z-0" style={{ background: "#0F0E11" }} />
        
        {/* Subtle radial blue glow in bottom-right */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 1400px 900px at 88% 70%, #152F70 0%, #0F0E11 40%, transparent 70%)",
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Content */}
        <div className="relative z-10">
          <HeroNavbar />
          <HeroSection />
        </div>
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* GPU Picker Section */}
      <GPUPickerSection />

      {/* Pricing Comparison Section */}
      <PricingComparisonSection />

      {/* Why Choose Aquanode Section */}
      <WhyChooseSection />

      {/* Footer CTA and Footer */}
      <FooterCTA />
    </main>
  );
}
