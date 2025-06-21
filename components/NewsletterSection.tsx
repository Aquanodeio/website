import Image from "next/image";
import BackgroundImage from "@/assets/star-background.png";
import { GradientText } from "./GradientText";
import Link from "next/link";

export default function PricingCalloutSection() {
  return (
    <section className="relative w-full flex flex-col items-center px-4 sm:px-20 lg:px-40 py-10 sm:py-20">
      <div className="relative w-full h-[400px] sm:h-[591px]">
        <div className="absolute inset-0">
          <Image
            src={BackgroundImage}
            alt="Pricing Background"
            fill
            className="object-stretch"
            priority
          />
        </div>

        <div className="relative z-1 w-full h-full flex flex-col items-center justify-center gap-3 sm:gap-5 px-4 sm:px-0">
          <h2 className="font-esrebond font-bold text-[28px] sm:text-[54px] leading-[34px] sm:leading-[64px] text-center bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            Ready to Scale Your Compute?
          </h2>

          <p className="text-[#9B96B0] font-inter text-[16px] sm:text-[20px] leading-[24px] sm:leading-[28px] text-center -tracking-[0.01em] max-w-[400px] sm:max-w-[600px]">
            Choose the perfect plan for your needs. From startup to enterprise,
            we have compute solutions that scale with your growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[24px] w-full max-w-[400px] sm:max-w-none sm:w-auto mt-4">
            <Link href="/app">
              <button
                className="flex items-center justify-center px-6 py-2 rounded-full border border-white/10 w-full sm:w-auto"
                style={{
                  background: `radial-gradient(circle at 50% 215%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)`,
                }}
              >
                <GradientText className="text-sm font-medium">
                  View Pricing Plans
                </GradientText>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
