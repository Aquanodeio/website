"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CONSOLE_LINK } from "@/config/links";
import {
  fadeInUp,
  staggerContainer,
  cardVariants,
  viewport,
  buttonHover,
  tapScale,
  hoverScale,
} from "@/lib/motionConfig";

export default function WhyChooseSection() {
  const features = [
    {
      title: (
        <>
          One Account for
          <br />
          Multi-Cloud
        </>
      ),
      description:
        "No need to juggle multiple cloud accounts. Deploy everything from one place.",
    },
    {
      title: (
        <>
          Centralized Billing
          <br />
          Across Cloud
        </>
      ),
      description:
        "Track and manage all your cloud costs from a single dashboard.",
    },
    {
      title: (
        <>
          Multiple Ways to
          <br />
          Pay
        </>
      ),
      description:
        "Whether it’s crypto or traditional methods, we’ve got you covered.",
    },
    {
      title: (
        <>
          Built-in Tools For
          <br />
          Every Cloud
        </>
      ),
      description:
        "Deploy Seamlessly with integrated connectors, and cross-cloud tools.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white py-20">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal text-black mb-4">
            Why Choose Aquanode?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            See how teams are shipping faster, scaling smarter
            <br />
            with Aquanode.
          </p>

          <Link href={CONSOLE_LINK}>
            <motion.button
              whileHover={buttonHover}
              whileTap={tapScale}
              className="group bg-[#3B82F6] transition-all text-white font-normal rounded-lg flex items-center justify-center gap-3 mx-auto cursor-pointer whitespace-nowrap px-6"
              style={{
                width: "250px",
                height: "50px",
                fontFamily: "var(--font-inter)",
                borderRadius: "10px",
              }}
            >
              Start Deploying
              <div className="flex items-center gap-0">
                <div className="h-[2px] w-3 bg-current transition-all duration-200 group-hover:w-6" />
                <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[7px] transition-all" />
              </div>
            </motion.button>
          </Link>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-10 mt-30"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={hoverScale}
              className="relative group border border-gray-300 rounded-md"
            >
              {/* Decorative Corner Borders */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#4A90FF]" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#4A90FF]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#4A90FF]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#4A90FF]" />

              {/* Card Content */}
              <div className="py-8 px-8 h-full flex flex-col">
                <h3 className=" text-xl font-normal text-black mb-4 text-center">
                  {feature.title}
                </h3>
                <div className="-mx-8 px-2 mb-6">
                  <div className="w-full h-px bg-gray-700" />
                </div>
                <p className="text-gray-600 text-left leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

