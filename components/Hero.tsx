import Image from "next/image";
import PriceComparisonCard from "./PriceComparisonCard";
import { GradientText } from "./GradientText";
import Spline from "@splinetool/react-spline/next";
import HeroBg from "@/assets/hero-bg-texture.png";
import Link from "next/link";
import Header from "./Header";

const cardData = [
  {
    gpuType: "H100",
    aquanodePrice: "$1.13/hr",
    competitorPrice: "$14.29/hr",
    position: { left: "87px" },
  },
  {
    gpuType: "A100",
    aquanodePrice: "$0.76/hr",
    competitorPrice: "$8.10/hr",
    position: { left: "335px" },
  },
  {
    gpuType: "V100",
    aquanodePrice: "$0.20/hr",
    competitorPrice: "$7.97/hr",
    position: { left: "583px" },
  },
];

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-20">
      <div>
        <div className="absolute -left-[50px] -top-[20px] w-[300px] h-[200px] sm:-left-[211px] sm:-top-[81px] sm:w-[1062px] sm:h-[501px]">
          <Image src={HeroBg} alt="" fill className="object-stretch" />
        </div>

        <div className="inset-0 w-full h-auto sm:h-[591px] relative z-10">
          <Header />

          <div className="mt-10 sm:mt-40">
            <h1
              className="text-[32px] sm:text-[64px] font-bold leading-[36px] sm:leading-[68px] tracking-[-0.8px] sm:tracking-[-1.44px] text-left"
              style={{
                fontFamily: "ES Rebond Grotesque, sans-serif",
                background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 22.5%, rgba(255, 255, 255, 0.7) 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              The World&apos;s Largest
              <br />
              Compute Ecosystem
            </h1>

            <p
              className="text-[#D2D0DD] text-[16px] sm:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[-0.1px] sm:tracking-[-0.2px] text-left mt-4 sm:mt-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Affordable, decentralized compute infrastructure for developers
              and <br className="hidden sm:block" />
              businesses. Deploy customizable Aqua services through our unified
              layer.
            </p>
          </div>

          <div className="flex flex-row gap-6 sm:gap-10 mt-8 sm:mt-10 items-center">
            <Link href="/app">
              <button
                className="flex items-center justify-center px-6 py-2 rounded-full border border-white/10 w-full sm:w-auto"
                style={{
                  background: `radial-gradient(circle at 50% 215%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)`,
                }}
              >
                <GradientText className="text-sm font-medium">
                Launch App
                </GradientText>
              </button>
            </Link>

            {/* <Link href="/app">
              <GradientText className="text-sm font-medium">
                Launch App
              </GradientText>
            </Link> */}
          </div>

          <div className="hidden lg:block absolute -right-[200px] top-10">
            <div className="w-[800px] h-[800px] scale-[0.60]">
              <Spline scene="https://prod.spline.design/eYkZIzF7c86zjgUK/scene.splinecode" />
              {/* <Spline scene="https://prod.spline.design/15txp4eWHSnORrNb/scene.splinecode" /> */}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-0">
          <PriceComparisonCard cards={cardData} />
        </div>
      </div>
    </section>
  );
};
