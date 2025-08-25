import Image from "next/image";
import BackgroundImage from "@/assets/star-background.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONSOLE_LINK, CONTACT_SALES_LINK } from "@/config/links";

export default function FeatureRequest() {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-24">
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

        <div className="relative z-1 w-full h-full flex flex-col items-center justify-center space-y-6 sm:space-y-8">
          <h2
            className="text-[28px] sm:text-[54px] font-medium leading-[34px] sm:leading-[64px] text-center"
            style={{
              fontFamily: "var(--font-)",
              background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 22.5%, rgba(255, 255, 255, 0.7) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {/* We make any GPU work for you */}
            What should we add to Aquanode next?
          </h2>

          <p className="text-[#9B96B0] text-[16px] sm:text-[20px] leading-[24px] sm:leading-[28px] text-center -tracking-[0.01em] max-w-[400px] sm:max-w-[600px]">
          {/* Deploy models faster, choose your GPU, scale effortlessly, and save costs without infrastructure headaches. */}
          Missing a provider you love?
          Need a specific cloud feature?
          Want support for a particular model?
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-[400px] sm:max-w-none sm:w-auto">
            <Link href={CONSOLE_LINK}>
              <button
                className="flex items-center justify-center w-[136px] h-[40px] rounded-full border-[0.5px]"
                style={{
                  background: `linear-gradient(135deg, #6C50BE 0%, #322558 100%)`,
                  borderColor: "#C6ACEC",
                }}
              >
                <span className="text-white text-sm font-medium">
                  Get Started
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
                  Let us know
                </span>
                <ArrowRight className="text-white w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
