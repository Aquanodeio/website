import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Llama from "@/assets/models/llama.svg";
import Deepseek from "@/assets/models/deepseek.svg";
import Gemma from "@/assets/models/gemma.svg";
import Phi from "@/assets/models/phi.svg";
import Qwen from "@/assets/models/qwen.svg";

interface StripItemProps {
  logo: string;
}

const StripItem = React.memo(({ logo }: StripItemProps) => {
  const logoName = logo.toString().split('/').pop()?.replace('.svg', '') || 'AI Model';
  
  return (
    <div className="w-fit h-20 md:h-[100px] flex items-center justify-center border border-[#35353566] md:p-5">
      <Image
        src={logo}
        alt={`${logoName} AI model logo`}
        width={120}
        height={50}
        className="h-2/3 w-2/3 md:h-3/4 md:w-3/4 object-contain"
        loading="lazy"
        quality={85}
      />
    </div>
  );
});

StripItem.displayName = 'StripItem';

const Strip = React.memo(() => {
  const logos = [Llama, Deepseek, Gemma, Phi, Qwen];

  return (
    <div className="w-full justify-center flex px-4 mt-10 md:mt-0">
      <div className="w-full md:w-6/7 h-full md:h-[100px] flex flex-col md:flex-row justify-center items-center border rounded-[24px] overflow-clip border-[#35353566]">
        <div className="w-125 h-full flex items-center py-4 justify-center border-b md:border-b-transparent md:border-r border-[#35353566] px-6">
          <span className="text-white text-xl font-medium">
            Compatible With Leading
            <br className="hidden md:block" />
            AI Models
          </span>
        </div>
        <Marquee
          speed={30}           // Reduced speed for better performance
          gradient={false}
          autoFill={false}     // Control number of items for performance
          pauseOnHover={true}  // Better UX and performance
          className="overflow-hidden"
        >
          {logos.map((logo, index) => (
            <StripItem key={`logo-${index}`} logo={logo} />
          ))}
          {/* Duplicate items manually for autoFill effect with better control */}
          {logos.map((logo, index) => (
            <StripItem key={`logo-duplicate-${index}`} logo={logo} />
          ))}
        </Marquee>
      </div>
    </div>
  );
});

Strip.displayName = 'Strip';

export default Strip;
