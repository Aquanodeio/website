import Image from "next/image";
import CostEfficiency from "@/assets/cost-efficiency.png";
import GlobalInfrastructure from "@/assets/global-infra.png";
import LighteningFast from "@/assets/lightening-fast.png";
import Orchestration from "@/assets/orchestration.png";
import FlexiblePayments from "@/assets/flexible-payment.png";

export function Features() {
  return (
    <section className="w-full pt-20 sm:pt-40 px-4 sm:px-0">
      <div className="flex flex-col items-center gap-6 sm:gap-[36px]">
        <div
          className="flex items-center justify-center px-[15px] py-[5px] rounded-full border border-white/4"
          style={{
            background: "rgba(255, 255, 255, 0.04)",
          }}
        >
          <span
            className="text-white text-[12px] sm:text-[14px] font-medium leading-[20px] sm:leading-[24px] tracking-[8%] uppercase"
            style={{ fontFamily: "var(--font-roboto)" }}
          >
            aqua usps
          </span>
        </div>

        <div className="w-full flex flex-col items-center">
          <h2
            className="text-[28px] sm:text-[53.59px] font-bold leading-[34px] sm:leading-[64px] text-center px-4 sm:px-0"
            style={{
              fontFamily: "ES Rebond Grotesque, sans-serif",
              background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 22.5%, rgba(255, 255, 255, 0.7) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Magical features to help you <br className="hidden sm:block" />
            deploy faster
          </h2>
        </div>

        <div className="relative container w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto lg:grid-rows-1 gap-4 sm:gap-8 h-full">
            <div className="flex flex-col items-center justify-between gap-4 sm:gap-8">
              <Image
                src={CostEfficiency}
                alt="Cost Efficiency"
                className="object-cover w-full h-auto"
              />

              <Image
                src={Orchestration}
                alt="Orchestration"
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="order-first sm:order-none">
              <Image
                src={LighteningFast}
                alt="Lightening Fast"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex flex-col items-center justify-between gap-4 sm:gap-8">
              <Image
                src={GlobalInfrastructure}
                alt="Global Infrastructure"
                className="object-contain w-full h-full"
              />

              <Image
                src={FlexiblePayments}
                alt="Middle Card"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
