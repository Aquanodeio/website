import React from "react";
import Image, { StaticImageData } from "next/image";
import CardAltText from "@/assets/card-alt-text.png";
import CardImage from "@/assets/card-image.png";

interface UnifiedComponentCardProps {
  title: string;
  description: string;
  icon: StaticImageData;
}

export default function UnifiedComponentCard({
  title = "Aggregation",
  description = "Multiple providers combined into a single, consistent API",
  icon
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
          {/* <div className="absolute left-[33px] top-[33px] w-[56px] h-[56px] rounded-[28px] bg-gradient-to-br from-[#BAB3FF]/0 via-[#BAB3FF]/32 to-[#BAB3FF]/0 bg-gradient-radial from-[#8566FF]/32 to-transparent"></div> */}

          <div className="h-14 w-14">
            <Image
              src={icon}
              alt=""
              className="object-stretch w-full h-full"
            />
          </div>

          <h3 className="text-white font-inter font-medium text-[18px] leading-[24px] -tracking-[0.02em]">
            {title}
          </h3>

          <p className="text-[#9B96B0] font-inter text-[16px] leading-[24px] -tracking-[0.01em]">
            {description}
          </p>
        </div>

        <div className="absolute left-[17px] top-[237px] w-[350px] h-[2px] bg-white/8 rounded-full"></div>

        <div className="absolute left-[54px] top-[8px] w-[322px] h-[139px]">
          <Image
            src={CardAltText}
            alt=""
            fill
            className="object-stretch"
          />
        </div>
        <div className="absolute left-[11px] top-[13px] w-[250px] h-[82px]">
          <Image
            src={CardImage}
            alt=""
            fill
            className="object-stretch"
          />
        </div>
      </div>
    </div>
  );
}
