import Image, { StaticImageData } from "next/image";
import BG1 from "@/assets/aqua-services/bg-1.png";
import BG2 from "@/assets/aqua-services/bg-2.png";
import BG3 from "@/assets/aqua-services/bg-3.png";
import BG4 from "@/assets/aqua-services/bg-4.png";
import BG5 from "@/assets/aqua-services/bg-5.png";
import BG6 from "@/assets/aqua-services/bg-6.png";
import AquaServicesBg from "@/assets/aqua-services-bg.png";
import ServiceWebHostingBg from "@/assets/service-web-hosting-bg.png";

const services = [
  {
    title: "Seamless Web Hosting",
    description:
      "Deploy websites easily. Public hosting with monetization or private custom frontends.",
    image: BG3,
  },
  {
    title: "Interactive Jupyter Notebooks",
    description:
      "Run data science/ML in hosted Jupyter Notebooks. Public, zero-setup access.",
    image: BG5,
  },
  {
    title: "Scalable ML Models",
    description:
      "Deploy ML models with scalable inference. Public or private setups.",
    image: BG4,
  },
  {
    title: "Flexible Virtual Machines",
    description:
      " Launch GPU/CPU VMs. Public access or private dedicated resources.",
    image: BG2,
  },
  {
    title: "Dedicated GPU Resources",
    description:
      "Buy GPU credits for private workloads. Full control for AI tasks.",
    image: BG1,
  },
  {
    title: "Enterprise-Grade Solutions",
    description:
      "Private tools with security, support, and custom SLAs for teams.",
    image: BG6,
  },
];

export function AquaServices() {
  return (
    <section className="relative items-center pb-2 w-full px-4 sm:px-20 pt-10 sm:pt-20">
      <div className="space-y-6 sm:space-y-10">
        <Image
          src={AquaServicesBg}
          alt=""
          width={1440} // <- This is the original image file size
          height={800} // <- This is the original image file size
          sizes="100vw"
          className="w-full h-auto" // <- This makes it responsive
        />

        <div
          className="flex items-center justify-center px-[15px] py-[5px] rounded-full border border-white/4 w-fit mx-auto"
          style={{
            background: "rgba(255, 255, 255, 0.04)",
          }}
        >
          <span
            className="text-white text-[12px] sm:text-[14px] font-medium leading-[20px] sm:leading-[24px] tracking-[8%] uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Aqua Services
          </span>
        </div>

        {/* Heading Section */}
        <div className="flex flex-col items-center gap-4 sm:gap-[24px]">
          <h2
            className="w-full max-w-[664px] text-[28px] sm:text-[53.48px] font-bold leading-[34px] sm:leading-[64px] text-center px-4 sm:px-0"
            style={{
              fontFamily: "ES Rebond Grotesque, sans-serif",
              background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 22.5%, rgba(255, 255, 255, 0.7) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Modular Aqua Services
          </h2>

          <div className="w-full max-w-[874px] flex flex-col items-center px-4 sm:px-0">
            <p
              className="text-[#D2D0DD] text-[16px] sm:text-[26px] font-normal leading-[24px] sm:leading-[36px] tracking-[-1%] text-center"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Applications and workloads built on top of the Aqua Layer,
              benefiting from orchestration and decentralized compute sourcing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto lg:grid-rows-2 gap-3 sm:gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>

      <div
        className="w-full max-w-[1440px] h-[1px] mt-10 sm:mt-20 mx-auto"
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
      <div className="bg-[#0A0118] h-full p-3 sm:p-4 rounded-2xl relative">
        <div className="h-[150px] sm:h-[196px] relative">
          <Image
            src={ServiceWebHostingBg}
            alt=""
            fill
            className="object-stretch w-full h-full"
          />

          <Image src={image} alt="" fill className="object-cover" />
        </div>

        <div className="p-3 sm:p-4">
          <h3
            className="text-[16px] sm:text-[18px] font-medium leading-[20px] sm:leading-[24px] tracking-[-2%]"
            style={{
              fontFamily: "var(--font-inter)",
              background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 22.5%, rgba(255, 255, 255, 0.7) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </h3>

          <p
            className="text-[#9B96B0] text-[14px] sm:text-[16px] font-normal leading-[20px] sm:leading-[24px] tracking-[-1%]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
