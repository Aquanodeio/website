"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BigRackIcon from "@/assets/home/features/big-rack.svg";
import CloudsIcon from "@/assets/home/features/clouds-svg.svg";
import ToolsIcon from "@/assets/home/features/garage-wrenches-svg.svg";
import GlobeIcon from "@/assets/home/features/globe-alt.svg";
import AWSLogo from "@/assets/home/features/aws-svg.svg";
import MinioLogo from "@/assets/home/features/mino-svg.svg";
import BackblazeLogo from "@/assets/home/features/backblaze-svg.svg";
import LoadingSVG from "@/assets/home/features/loading-svg.svg";
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  staggerContainerSlow,
  viewport,
  buttonHover,
  tapScale,
  hoverScale,
} from "@/lib/motionConfig";

export default function FeaturesSection() {
  return (
    <section className="relative w-full min-h-screen bg-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-2">
            <span className="text-black">
              Save more on cost. Pause now and restore right
            </span>
            <br />
            <span className="text-gray-500 font-normal">
              where you left off later
            </span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-start">
          {/* Left: Big Globe Image */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeInLeft}
            className="hidden lg:flex items-center justify-center mt-5"
          >
            <Image
              src={BigRackIcon}
              alt="Rack"
              width={500}
              height={500}
              className="w-full max-w-md"
            />
          </motion.div>

          {/* Right: Features List */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainerSlow}
            className="space-y-0"
          >
            {/* Feature 1 */}
            <motion.div
              variants={fadeInUp}
              className="border-t border-b border-gray-200 py-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src={CloudsIcon}
                    alt="Clouds"
                    width={24}
                    height={24}
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-normal text-black mb-2">
                    Find Idle GPUs Across Multiple Clouds
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Switch Providers Anytime Without Needing To Manage Multiple
                    Cloud Accounts. Stay Flexible And Always Get The Best Deal.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={fadeInUp}
              className="border-b border-gray-200 py-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src={ToolsIcon}
                    alt="Tools"
                    width={24}
                    height={24}
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-normal text-black mb-2">
                    Tools Like Data Backups, And More
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Keep Your Data Safe And Systems Healthy With Backups,
                    Monitoring, And Other Essential Cloud Tools.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeInUp} className="py-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src={GlobeIcon}
                    alt="Globe"
                    width={24}
                    height={24}
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-normal text-black mb-2">
                    Storage Adapters
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    Easily Integrate Major Cloud Storage Providers Like AWS,
                    Backblaze B2, And Others Right From Aquanode
                  </p>

                  {/* Storage Provider Logos */}
                  <div className="flex items-center gap-6 mb-8">
                    <motion.div whileHover={hoverScale}>
                      <Image
                        src={AWSLogo}
                        alt="AWS"
                        width={60}
                        height={30}
                        className="h-6 w-auto"
                      />
                    </motion.div>
                    <motion.div whileHover={hoverScale}>
                      <Image
                        src={MinioLogo}
                        alt="MinIO"
                        width={80}
                        height={30}
                        className="h-6 w-auto"
                      />
                    </motion.div>
                    <motion.div whileHover={hoverScale}>
                      <Image
                        src={BackblazeLogo}
                        alt="Backblaze"
                        width={100}
                        height={30}
                        className="h-6 w-auto"
                      />
                    </motion.div>
                  </div>

                  {/* Get Started Button */}
                  <Link href="/marketplace">
                    <motion.button
                      whileHover={buttonHover}
                      whileTap={tapScale}
                      className="group bg-[#3B82F6] transition-all text-white font-normal rounded-lg flex items-center justify-center gap-3 text-sm cursor-pointer whitespace-nowrap px-6"
                      style={{
                        width: "200px",
                        height: "50px",
                        fontFamily: "var(--font-inter)",
                        borderRadius: "10px",
                      }}
                    >
                      Get Started
                      <div className="flex items-center gap-0">
                        <div className="h-[2px] w-3 bg-current transition-all duration-200 group-hover:w-6" />
                        <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[7px] transition-all" />
                      </div>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Loading Frame - Extra Wide */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeInUp}
        className="hidden md:block mt-16 px-6 md:px-8 lg:px-10"
      >
        <Image
          src={LoadingSVG}
          alt="Loading Frame"
          width={1400}
          height={200}
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
