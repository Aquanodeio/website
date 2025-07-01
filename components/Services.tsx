import React from "react";
import FlexibilityImage from "@/assets/services/flexibility.png";
import AggregationImage from "@/assets/services/aggregation.png";
import OrchestrationImage from "@/assets/services/orchestration.png";
import PaymentsImage from "@/assets/services/payments.png";

import Image, { StaticImageData } from "next/image";
import CardAltText from "@/assets/card-alt-text.png";
import CardImage from "@/assets/card-image.png";

interface UnifiedComponentCardProps {
  title: string;
  description: string;
  icon: StaticImageData;
}

const unifiedCards = [
  {
    title: "Inference API",
    description:
      "Query models via one API—abstracted from provider-specific quirks",
    icon: AggregationImage,
  },
  {
    title: "Deployments",
    description:
      "Deploy and auto-scale your models with built-in monitoring tools",
    icon: OrchestrationImage,
  },
  {
    title: "Container VMs",
    description:
      "Spin up GPU-powered containers in seconds, ready for inference",
    icon: PaymentsImage,
  },
  {
    title: "Model Gallery",
    description:
      "Explore, test, and deploy from a growing list of public models",
    icon: FlexibilityImage,
  },
  {
    title: "One-Click Apps",
    description: "Launch ready-made AI apps instantly—no setup needed",
    icon: FlexibilityImage,
  },
  {
    title: "Pre-Built Templates",
    description:
      "Start with curated templates for inference, training, or fine-tuning",
    icon: FlexibilityImage,
  },
];

export default function Services() {
  return (
    <section id="Services" className="relative w-full px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-24">
      <div className="relative">
        <div className="flex flex-col items-center space-y-8 sm:space-y-12">
          <div className="flex flex-col items-center space-y-6 sm:space-y-8 max-w-[800px]">
            <div className="bg-white/[0.04] border border-white/[0.04] rounded-full px-4 py-2">
              <span className="text-white font-medium text-[12px] sm:text-[14px] uppercase tracking-wider">
                Services
              </span>
            </div>

            <h2
              className="text-[28px] sm:text-[53.8px] font-medium leading-[34px] sm:leading-[64px] text-center"
              style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 22.5%, rgba(255, 255, 255, 0.7) 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Your Stack, Prebuilt and Production-Ready
            </h2>
          </div>

          <div
            className="w-full overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex flex-row gap-4 sm:gap-6 min-w-max px-4 sm:px-0">
              {unifiedCards.map((card) => (
                <UnifiedComponentCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full max-w-[1440px] h-[1px] mt-16 sm:mt-20 lg:mt-24 mx-auto"
        style={{
          background: `linear-gradient(270deg, rgba(61, 53, 78, 0) 28.87%, rgba(61, 53, 78, 1) 45.39%, rgba(61, 53, 78, 1) 53.54%, rgba(61, 53, 78, 0) 70.06%)`,
        }}
      />
    </section>
  );
}

function UnifiedComponentCard({
  title = "",
  description = "",
  icon,
}: UnifiedComponentCardProps) {
  return (
    <div className="w-[384px] h-[254px] bg-gradient-to-b from-[#A9A3C2]/20 to-[#A9A3C2]/5 rounded-[16px] p-px shrink-0">
      <div className="relative w-full h-full rounded-[16px] overflow-hidden">
        <div className="absolute inset-0 bg-[#DCD8FF]/16 rounded-[16px]"></div>

        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(67.49% 100% at 50% 0%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%), #0A0118`,
          }}
        />

        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(54.43% 33.21% at 50% 100%, rgba(133, 102, 255, 0.05) 0%, rgba(133, 102, 255, 0) 100%), radial-gradient(39.01% 30.53% at 50% 100%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(67.49% 100% at 50% 0%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%), #0A0118`,
          }}
        />

        <div className="absolute inset-0 rounded-2xl flex flex-col gap-6 p-8">
          <div className="h-14 w-14">
            <Image src={icon} alt="" className="object-stretch w-full h-full" />
          </div>

          <h3 className="text-white font-medium text-[18px] leading-[24px] -tracking-[0.02em]">
            {title}
          </h3>

          <p className="text-[#9B96B0] text-[16px] leading-[24px] -tracking-[0.01em]">
            {description}
          </p>
        </div>

        <div className="absolute left-[17px] top-[237px] w-[350px] h-[2px] bg-white/8 rounded-full"></div>

        <div className="absolute left-[54px] top-[8px] w-[322px] h-[139px]">
          <Image src={CardAltText} alt="" fill className="object-stretch" />
        </div>
        <div className="absolute left-[11px] top-[13px] w-[250px] h-[82px]">
          <Image src={CardImage} alt="" fill className="object-stretch" />
        </div>
      </div>
    </div>
  );
}
