import Image from "next/image";
import React from "react";
import One from "@/assets/features/1.png";
import Two from "@/assets/features/2.png";
import Three from "@/assets/features/3.png";
import Four from "@/assets/features/4.png";
import Five from "@/assets/features/5.png";

export const Features = React.memo(() => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-24">
      <div className="flex flex-col items-center space-y-8 sm:space-y-12">
        <div
          className="flex items-center justify-center px-4 py-2 rounded-full border border-white/4"
          style={{
            background: "rgba(255, 255, 255, 0.04)",
          }}
        >
          <span className="text-white text-[12px] sm:text-[14px] font-medium uppercase tracking-wider">
            FEATURES
          </span>
        </div>

        <div className="w-full flex flex-col items-center">
          <h2
            className="text-[28px] sm:text-[53.59px] font-medium leading-[34px] sm:leading-[64px] text-center"
            style={{
              background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 22.5%, rgba(255, 255, 255, 0.7) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            id="features"
          >
            Magical features to help you <br className="hidden sm:block" />
            Inference faster
          </h2>
        </div>

        <div className="relative container w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 h-full">
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
              <Image
                src={One}
                alt="Cost efficiency dashboard showing 80% savings on H100 GPU pricing compared to competitors"
                className="object-cover w-full h-auto"
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <Image
                src={Two}
                alt="AI model orchestration interface with automated deployment pipeline"
                className="object-cover w-full h-auto"
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <div className="order-first sm:order-none">
              <Image
                src={Three}
                alt="Lightning-fast AI model deployment interface with one-click deployment on GPU clusters"
                className="object-cover w-full h-full"
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
              <Image
                src={Four}
                alt="Global GPU infrastructure network with worldwide data centers"
                className="object-contain w-full h-full"
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <Image
                src={Five}
                alt="Advanced AI model monitoring and analytics dashboard with real-time metrics"
                className="object-cover w-full h-full"
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Features.displayName = 'Features';
