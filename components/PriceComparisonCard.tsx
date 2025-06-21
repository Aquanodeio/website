import Image from "next/image";
import AwsIcon from "@/assets/aws.png";
import DatabaseIcon from "@/assets/database-icon.svg";
import AquaNodeLogo from "@/assets/aquanode-logo.png";
interface CardData {
  gpuType: string;
  aquanodePrice: string;
  competitorPrice: string;
  position: {
    left: string;
  };
}

interface PriceComparisonCardProps {
  cards: CardData[];
}

export default function PriceComparisonCard({
  cards,
}: PriceComparisonCardProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 px-4 sm:px-0">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-full sm:w-[228px] h-[88px] rounded-[16px] border border-[#2C2539] backdrop-blur-[30.62px] px-4 sm:px-6 py-3 relative"
          style={{
            background: `radial-gradient(circle at 50% 0%, rgba(133, 102, 255, 0.04) 0%, rgba(133, 102, 255, 0) 100%)`,
          }}
        >
          <div className="flex items-center gap-2">
            <Image src={DatabaseIcon} alt="Database" width={18} height={18} />

            <span
              className="text-[12px] font-medium leading-[14.52px] text-center"
              style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 22.5%, rgba(255, 255, 255, 0.7) 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {card.gpuType}
            </span>
          </div>

          {/* Logo and price */}
          <div className="absolute left-4 sm:left-[26.19px] bottom-[18.24px] flex items-center gap-[8px]">
            <Image
              width={20}
              height={20}
              src={AquaNodeLogo}
              alt="AquaNode Logo"
              className="object-fill"
            />
            <span className="text-[#41B66B] text-[10px] font-medium leading-[12.1px]">
              {card.aquanodePrice}
            </span>
          </div>

          {/* GPU icon and comparison price */}
          <div className="absolute right-4 sm:right-[26.19px] bottom-[18px] flex items-center gap-[8px]">
            <div className="w-[24.36px] h-[14.52px] relative">
              <Image src={AwsIcon} alt="AWS" fill className="object-fill" />
            </div>
            <span
              className="text-[10px] font-normal leading-[12.1px]"
              style={{
                background: `linear-gradient(180deg, rgba(255, 255, 255, 1) 22.5%, rgba(255, 255, 255, 0.7) 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {card.competitorPrice}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
