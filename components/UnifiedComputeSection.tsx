import Image from "next/image";
import UnifiedComponentCard from "./UnifiedComponentCard";
import FlexibilityImage from "@/assets/unified-carousel/flexibility.png";
import AggregationImage from "@/assets/unified-carousel/aggregation.png";
import OrchestrationImage from "@/assets/unified-carousel/orchestration.png";
import PaymentsImage from "@/assets/unified-carousel/payments.png";
import UnifiedBgImage from "@/assets/unified-bg-image.png";
import HorizontalDivider from "./HorizontalDivider";
const unifiedCards = [
  {
    title: "Aggregation",
    description: "Multiple providers combined into a single, consistent API",
    icon: AggregationImage,
  },
  {
    title: "Orchestration",
    description: "Deployment, scaling, and monitoring made simple",
    icon: OrchestrationImage,
  },
  {
    title: "Payments",
    description: "Support for both crypto and fiat, converted to GPU credits",
    icon: PaymentsImage,
  },
  {
    title: "Flexibility",
    description: "Use GPU credits across any service deployed on Aqua",
    icon: FlexibilityImage,
  },
];

export default function UnifiedComputeSection() {
  return (
    <section className="relative w-full pb-4">

      <div className="relative">
        <div className="max-w-[600px] sm:max-w-[1040px] mx-auto px-4 sm:px-0">
          <Image
            src={UnifiedBgImage}
            alt=""
            width={1440} // <- This is the original image file size
            height={800} // <- This is the original image file size
            sizes="100vw"
            className="w-full h-auto" // <- This makes it responsive
          />
        </div>

        {/* Content Container */}
        <div className="relative flex flex-col items-center gap-4 sm:gap-[24px] -top-[80px] sm:-top-[175px] px-4 sm:px-0">
          <div className="flex flex-col items-center gap-4 sm:gap-[24px] max-w-[800px]">
            <div className="bg-white/[0.04] border border-white/[0.04] rounded-full px-[15px] py-[5px]">
              <span className="text-white font-roboto font-medium text-[12px] sm:text-[14px] leading-[20px] sm:leading-[24px] tracking-[0.08em] uppercase">
                aqua features
              </span>
            </div>

            <h2 className="font-esrebond font-bold text-[28px] sm:text-[53.8px] leading-[34px] sm:leading-[64px] text-center bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent px-4 sm:px-0">
              Unified Compute from Decentralized Providers
            </h2>

            <p className="text-[#9B96B0] font-inter text-[16px] sm:text-[20px] leading-[24px] sm:leading-[28px] text-center -tracking-[0.01em] px-4 sm:px-0">
              Our orchestration layer aggregates decentralized compute providers
              including Spheron, Akash, and others into a unified, powerful
              backend.
            </p>
          </div>

          <div className="w-full overflow-x-auto mt-4 sm:mt-8 px-4 sm:px-20" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex flex-row gap-3 sm:gap-[24px] min-w-max">
              {unifiedCards.map((card) => (
                <UnifiedComponentCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <HorizontalDivider />
    </section>
  );
}
