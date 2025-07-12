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

const StripItem = ({ logo }: StripItemProps) => {
  return (
    <div className="w-fit h-20 md:h-[100px] flex items-center justify-center border border-[#35353566] md:p-5">
      <Image
        src={logo}
        alt="Logo"
        width={120}
        height={50}
        className="h-2/3 w-2/3 md:h-3/4 md:w-3/4 object-contain"
      />
    </div>
  );
};

const Strip = () => {
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
          speed={50}
          gradient={false}
          autoFill
          className="overflow-hidden"
        >
          {logos.map((logo, index) => (
            <StripItem key={index} logo={logo} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Strip;
