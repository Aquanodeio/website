import Image from "next/image";
import PriceComparisonCard from "./PriceComparisonCard";
import Spline from "@splinetool/react-spline/next";
import HeroBg from "@/assets/hero-bg-texture.png";
import Link from "next/link";
import OverlayNavbar from "./OverlayNavbar";
import { ArrowRight } from "lucide-react";
import { CONSOLE_LINK, CONTACT_SALES_LINK } from "@/config/links";

const cardData = [
  {
    gpuType: "H100",
    aquanodePrice: "$1.28/hr",
    competitorPrice: "$14.29/hr",
    position: { left: "87px" },
  },
  {
    gpuType: "A100",
    aquanodePrice: "$0.85/hr",
    competitorPrice: "$8.10/hr",
    position: { left: "335px" },
  },
  {
    gpuType: "B200",
    aquanodePrice: "$4.08/hr",
    competitorPrice: "$113.93/hr",
    position: { left: "583px" },
  },
];

export const Hero = () => {
  return (
    <section
      id="Home"
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-20 h-screen"
      style={{ fontFamily: "var(--font-)" }}
    >
      <div>
        <div className="absolute -left-[50px] -top-[20px] w-[300px] h-[200px] sm:-left-[211px] sm:-top-[81px] sm:w-[1062px] sm:h-[501px]">
          <Image src={HeroBg} alt="" fill className="object-stretch" />
        </div>

        <div className="inset-0 w-full h-auto relative z-10 pt-20 sm:pt-24">
          <OverlayNavbar />

          <div className="mt-34 sm:mt-34 lg:mt-36">
            <div className="space-y-1 sm:space-y-8">
              <h1
                className="text-[32px] sm:text-[48px] font-medium leading-[40px] sm:leading-[64px] tracking-[-0.8px] sm:tracking-[-1.44px] text-left"
                style={{
                  background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 22.5%, rgba(255, 255, 255, 0.7) 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI Cloud that&apos;s
                <br />
                Effortless & Affordable
              </h1>

              <p className="text-[#D2D0DD] text-[16px] sm:text-[20px] font-light leading-[24px] sm:leading-[28px] tracking-[-0.1px] sm:tracking-[-0.2px] text-left">
              One platform for cloud features on any GPU. 
              <br className="hidden sm:block" />
              Pick, deploy, and save upto 80% costs.
              </p>
            </div>

            <div className="flex flex-row gap-4 sm:gap-6 items-center mt-8 sm:mt-10">
              <Link href={CONSOLE_LINK}>
                <button
                  className="flex items-center justify-center w-[136px] h-[40px] rounded-full border-[0.5px]"
                  style={{
                    background: `linear-gradient(135deg, #6C50BE 0%, #322558 100%)`,
                    borderColor: "#C6ACEC",
                  }}
                >
                  <span className="text-white text-sm font-medium">
                    Deploy Now
                  </span>
                </button>
              </Link>

              <Link href={CONTACT_SALES_LINK} target="_blank">
                <button
                  className="flex items-center justify-center gap-2 w-[136px] h-[40px] rounded-full border-[0.5px] border-[#C6ACEC]"
                  style={{
                    background: `rgba(0, 0, 0, 0.8)`,
                    borderColor: "#C6ACEC",
                  }}
                >
                  <span className="text-white text-sm font-medium">
                    Book Demo
                  </span>
                  <ArrowRight className="text-white w-4 h-4" />
                </button>
              </Link>
            </div>

            <div className="mt-12 sm:mt-16">
              <PriceComparisonCard cards={cardData} />
            </div>
          </div>

          <div className="hidden lg:block absolute -right-[200px] top-10">
            <div className="w-[800px] h-[800px] scale-[0.60]">
              <Spline scene="https://prod.spline.design/eYkZIzF7c86zjgUK/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
