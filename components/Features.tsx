import Image from "next/image";
import One from "@/assets/features/1.png";
import Two from "@/assets/features/2.png";
import Three from "@/assets/features/3.png";
import Four from "@/assets/features/4.png";
import Five from "@/assets/features/5.png";

export function Features() {
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
            RUNTIME
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
                alt="Cost Efficiency"
                className="object-cover w-full h-auto"
              />

              <Image
                src={Two}
                alt="Orchestration"
                className="object-cover w-full h-auto"
              />
            </div>

            <div className="order-first sm:order-none">
              <Image
                src={Three}
                alt="Lightening Fast"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
              <Image
                src={Four}
                alt="Global Infrastructure"
                className="object-contain w-full h-full"
              />

              <Image
                src={Five}
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
