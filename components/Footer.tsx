import React from "react";
import Image from "next/image";
import AquaNodeLogo from "@/assets/aquanode-logo.png";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="px-4 sm:px-6 lg:px-20 py-12 sm:py-16">
        <div
          className="h-px w-full mb-8 sm:mb-12"
          style={{
            background:
              "radial-gradient(circle at 50% 100%, rgba(169, 163, 194, 0.24) 0%, rgba(169, 163, 194, 0) 100%)",
          }}
        />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0 mb-8 sm:mb-12">
          <div className="flex items-center gap-3">
            <Image
              src={AquaNodeLogo}
              alt="Aquanode Logo"
              width={32}
              height={32}
            />
            <span className="text-white text-xl font-semibold">Aquanode</span>
          </div>

          <div className="flex gap-8">
            <a
              href="/pricing"
              className="text-[#9B96B0] hover:text-white transition-colors text-sm font-medium"
            >
              Pricing
            </a>
            <a
              href="https://calendly.com/anshss/call"
              className="text-[#9B96B0] hover:text-white transition-colors text-sm font-medium"
            >
              Contact Sales
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-0">
          <div className="text-[#9B96B0] text-sm font-normal leading-[24px] tracking-[-0.01em] text-center sm:text-left">
            ©2025 Aquanode. All rights reserved.
          </div>

          <div className="flex gap-6 sm:gap-8">
            <a
              href="https://x.com/aquanodeio"
              target="_blank"
              className="w-6 h-6 flex items-center justify-center"
            >
              <Image src="/icons/x.svg" alt="X" width={20} height={20} />
            </a>
            <a
              href="https://github.com/Aquanodeio"
              target="_blank"
              className="w-6 h-6 flex items-center justify-center"
            >
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
