import Image, { StaticImageData } from "next/image";
import React from "react";
import BG1 from "@/assets/capabilities/bg-1.png";
import BG2 from "@/assets/capabilities/bg-2.png";
import BG3 from "@/assets/capabilities/bg-3.png";
import BG4 from "@/assets/capabilities/bg-4.png";
import BG5 from "@/assets/capabilities/bg-5.png";
import BG6 from "@/assets/capabilities/bg-6.png";
import ServiceWebHostingBg from "@/assets/capabilities/service-web-hosting-bg.png";

const services = [
  {
    title: "Multi-Provider Marketplace",
    description:
      "No vendor lock-in, switch to the best provider anytime.",
    image: BG2,
  },
  {
    title: "Cloud-Native Features",
    description:
      "Snapshots, monitoring, autoscaling, logs - everything AWS has (Slowly adding)",
    image: BG5,
  },
  {
    title: "One-Click Deployments",
    description:
    "Deploy optimized OSS models (Llama, Gemini, DeepSeek) or any HuggingFace model via vLLM/ComfyUI in seconds.",
    image: BG6,
  },
  {
    title: "Pre-Configured VM Templates",
    description:
      "Integrated suite of services for cluster health management and performance monitoring",
    image: BG4,
  },
  {
    title: "Full-Stack App Deployments",
    description:
      "Deploy your backends, APIs, and complete applications from GitHub or containers. Scale alongside your AI models.",
    image: BG1,
  },
  {
    title: "Fine-Tuning & Training",
    description:
      "Fine-tune Llama, DeepSeek, or custom models on your datasets. Run training workloads with automatic resource scaling and checkpointing. (Coming soon)",
    image: BG3,
  },
];

export const Capabilities = React.memo(() => {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-24">
      <div className="space-y-8 sm:space-y-12">


        <div
          className="flex items-center justify-center px-4 py-2 rounded-full border border-white/4 w-fit mx-auto"
          style={{
            background: "rgba(255, 255, 255, 0.04)",
          }}
        >
          <span className="text-white text-[12px] sm:text-[14px] font-medium uppercase tracking-wider">
            INFRASTRUCTURE
          </span>
        </div>

        <div className="flex flex-col items-center">
          <h2
            className="w-full text-[28px] sm:text-[53.48px] font-medium leading-[34px] sm:leading-[64px] text-center"
            style={{
              background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 22.5%, rgba(255, 255, 255, 0.7) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            id="capabilities"
          >
            The cloud features you need,
            {/* Affordable GPU & Automated */}
            <br />
            {/* Infrastructure in One Click */}
            on every GPU you want
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
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
});

Capabilities.displayName = 'Capabilities';

const ServiceCard = React.memo(({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: StaticImageData;
}) => {
  return (
    <div
      className="rounded-2xl p-px relative"
      style={{
        background: `linear-gradient(180deg, rgba(169, 163, 194, 0.2) 0%, rgba(169, 163, 194, 0.05) 100%)`,
      }}
    >
      <div className="bg-[#0A0118] h-full rounded-2xl relative overflow-hidden">
        <div className="h-[150px] sm:h-[196px] relative">
          <Image
            src={ServiceWebHostingBg}
            alt="Service background pattern"
            fill
            className="object-stretch w-full h-full"
            loading="lazy"
            quality={75}
          />

          <Image 
            src={image} 
            alt={`${title} capability illustration`}
            fill 
            className="object-cover" 
            loading="lazy"
            quality={85}
          />
        </div>

        <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
          <h3
            className="text-[16px] sm:text-[18px] font-medium leading-[20px] sm:leading-[24px] tracking-[-2%]"
            style={{
              background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 22.5%, rgba(255, 255, 255, 0.7) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </h3>

          <p className="text-[#9B96B0] text-[14px] sm:text-[16px] font-normal leading-[20px] sm:leading-[24px] tracking-[-1%]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';
