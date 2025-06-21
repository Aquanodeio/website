import React from "react";
import Image from "next/image";
import HorizontalDivider from "./HorizontalDivider";
// import AquanodeText from "@/assets/aquanode-text-footer.png";

// className="w-full px-4 sm:px-20 lg:px-40 py-6 sm:py-10 relative"

const Footer = () => {
  return (
    <div className="w-full">
      {/* <HorizontalDivider /> */}

      {/* <div className="flex items-center justify-center px-20 overflow-visible relative py-5">
        <Image src={AquanodeText} alt="Aquanode" className=" w-full h-full" />
      </div> */}

      <div className="px-4 sm:px-20 lg:px-40 py-6 sm:py-10">
        <HorizontalDivider />

        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-0 mt-6 sm:mt-10">
          <div className="text-[#9B96B0] text-sm font-normal leading-[24px] tracking-[-0.01em] text-center sm:text-left">
            ©2025 Aquanode. All rights reserved.
          </div>

          <div className="flex gap-6 sm:gap-10">
            {/* <a href="#" className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={16}
                height={16}
              />
            </a>
            <a href="#" className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/icons/youtube.svg"
                alt="YouTube"
                width={18}
                height={12}
              />
            </a>
            <a href="#" className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={14}
                height={14}
              />
            </a> */}
            <a href="#" className="w-6 h-6 flex items-center justify-center">
              <Image src="/icons/x.svg" alt="X" width={20} height={20} />
            </a>
            <a href="#" className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/icons/github.svg"
                alt="Github"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
