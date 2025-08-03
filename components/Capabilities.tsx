import Image, { StaticImageData } from "next/image";
import BG1 from "@/assets/capabilities/bg-1.png";
import BG2 from "@/assets/capabilities/bg-2.png";
import BG3 from "@/assets/capabilities/bg-3.png";
import BG4 from "@/assets/capabilities/bg-4.png";
import BG5 from "@/assets/capabilities/bg-5.png";
import BG6 from "@/assets/capabilities/bg-6.png";
import CapabilitiesBg from "@/assets/capabilities/capabilities-bg.png";
import ServiceWebHostingBg from "@/assets/capabilities/service-web-hosting-bg.png";

const services = [
  {
    title: "Multi-Provider Abstraction",
    description:
      "GPU supply from global Providers and data-centers under a single, unified experience.",
    image: BG2,
  },
  {
    title: "Cloud-Native Features on Any GPU",
    description:
      "Snapshots, logs, scheduling, and backups—cloud features that “just work” across any connected GPU.",
    image: BG5,
  },
  {
    title: "One-Click Deployments (Apps & Models)",
    description:
      "Launch AI models or full-stack apps from GitHub or prebuilt containers in seconds",
    image: BG3,
  },
  {
    title: "Multi-Provider Abstraction",
    description:
      "GPU supply from global Providers and data-centers under a single, unified experience.",
    image: BG2,
  },
  {
    title: "Flexible Virtual Machines",
    description:
      "Rent customizable GPU VMs for AI, fine-tuning, or data workloads  with support for scaling, snapshots, and preinstalled tools.",
    image: BG1,
  },
  {
    title: "Reserved Clusters",
    description:
      "Run LLMs, VLMs, or diffusion models on single-tenant GPUs. Full control, hourly pricing. Ideal for 24/7 inference or 100K+ tokens/min workloads.",
    image: BG6,
  },
];

export function Capabilities() {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-24">
      <div className="space-y-8 sm:space-y-12">
        <Image
          src={CapabilitiesBg}
          alt=""
          width={1440}
          height={800}
          sizes="100vw"
          className="w-full h-auto"
        />

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
          >
            Affordable GPU & Model-Ready 
            <br />
            Infrastructure in One Click
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
}

function ServiceCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: StaticImageData;
}) {
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
            alt=""
            fill
            className="object-stretch w-full h-full"
          />

          <Image src={image} alt="" fill className="object-cover" />
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
}
