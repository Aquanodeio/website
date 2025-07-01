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
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-full sm:w-[240px] h-[100px] rounded-[16px] border border-[#2C2539] backdrop-blur-[30.62px] p-4 sm:p-5 relative"
          style={{
            background: `radial-gradient(circle at 50% 0%, rgba(133, 102, 255, 0.04) 0%, rgba(133, 102, 255, 0) 100%)`,
          }}
        >
          <div className="flex items-center gap-3">
            <Image src={DatabaseIcon} alt="Database" width={22} height={22} />

            <span
              className="text-[16px] font-medium leading-[18px] text-center"
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

          {/* Popular label for A100 */}
          {card.gpuType === "A100" && (
            <div className="absolute top-3 right-4 sm:right-5 px-2.5 py-1 rounded-full bg-[#B0F5C7] text-[#2A8348] text-[11px] font-medium" >
              Popular
            </div>
          )}

          {/* Logo and price */}
          <div className="absolute left-4 sm:left-[20px] bottom-[16px] flex items-center gap-[10px]">
            <Image
              width={24}
              height={24}
              src={AquaNodeLogo}
              alt="AquaNode Logo"
              className="object-fill"
            />
            <span className="text-[#41B66B] text-[12px] font-medium leading-[14px]">
              {card.aquanodePrice}
            </span>
          </div>

          {/* GPU icon and comparison price */}
          <div className="absolute right-4 sm:right-[20px] bottom-[16px] flex items-center gap-[10px]">
            <div className="w-[28px] h-[17px] relative">
              <Image src={AwsIcon} alt="AWS" fill className="object-fill" />
            </div>
            <span
              className="text-[12px] font-normal leading-[14px]"
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
