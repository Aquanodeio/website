import Image from "next/image";
import Link from "next/link";
import NvidiaLogo from "@/assets/home/nvidia.png";
import HeroIllustration from "@/assets/home/hero.svg";
import EllipseLight from "@/assets/home/ellipse.png";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ellipse Light Effect - Always anchored to bottom right */}
      <div className="hidden lg:block absolute bottom-0 right-0 z-0 pointer-events-none">
        <Image
          src={EllipseLight}
          alt=""
          width={1089}
          height={421}
          className="w-[580px] md:w-[680px] lg:w-[780px] xl:w-[900px] h-auto"
          style={{ transform: "translateX(20%)" }}
          priority
        />
      </div>

      <div className="relative pt-8 pb-20 md:pt-24 md:pb-44 px-6 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* Nvidia Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] border-t border-l border-white/[0.5] rounded-[8px]" style={{ height: '50px' }}>
            <Image
              src={NvidiaLogo}
              alt="NVIDIA"
              style={{ height: '50px', width: '76px' }}
            />
            <span className="text-white/80 text-sm font-normal">
              Supported by Nvidia Inception
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-normal text-white leading-[130%] tracking-[-0.4px]"
            style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
          >
            Get GPUs across clouds,
            <br />
            Faster, Simpler, Cheaper.
          </h1>

          {/* Description */}
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-full md:max-w-[720px]">
            Aquanode lets you deploy and manage GPUs across multiple cloud
            providers with features like pause and resume vm without needing to
            manage multiple cloud accounts.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/marketplace">
              <button className="group bg-[#3B82F6] transition-all text-white font-normal flex items-center justify-center gap-3 backdrop-blur-sm border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.3)] px-6 cursor-pointer whitespace-nowrap" style={{ width: '200px', height: '50px', borderRadius: '10px', fontFamily: 'var(--font-inter)' }}>
                Start for Free
                <div className="flex items-center gap-0">
                  <div className="h-[2px] w-3 bg-current transition-all duration-200 group-hover:w-6" />
                  <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[7px] transition-all" />
                </div>
              </button>
            </Link>

            <Link href="/pricing">
              <button className="group bg-[#0C0D10]/30 transition-all border border-white/20 text-white font-normal flex items-center justify-center gap-3 backdrop-blur-sm cursor-pointer whitespace-nowrap px-6" style={{ width: '200px', height: '50px', borderRadius: '10px', fontFamily: 'var(--font-inter)' }}>
                Compare Pricing
                <div className="flex items-center gap-0">
                  <div className="h-[2px] w-3 bg-current transition-all duration-200 group-hover:w-6" />
                  <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[7px] transition-all" />
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative hidden lg:flex items-center justify-center lg:justify-end lg:pr-0">
          <div className="relative w-full max-w-2xl lg:max-w-none lg:w-auto">
            {/* Hero Image */}
            <div className="relative z-10">
              <Image
                src={HeroIllustration}
                alt="GPU Servers Illustration"
                style={{ width: '560px', height: 'auto' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
