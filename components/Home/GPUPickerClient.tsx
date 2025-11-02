"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GPUVector from "@/assets/home/gpu-picker/GPU-Vector.svg";
import {
  fadeInUp,
  staggerContainer,
  cardVariants,
  viewport,
  hoverScale,
} from "@/lib/motionConfig";

interface GPUCard {
  model: string;
  vram: string;
  vcpu: string;
  memory: string;
  storageSpace: string;
  interface: string;
  price: string;
}

interface GPUPickerClientProps {
  gpuCards: GPUCard[];
}

export function GPUPickerClient({ gpuCards }: GPUPickerClientProps) {
  return (
    <section className="relative w-full min-h-screen bg-black py-20 overflow-hidden">
      {/* Dotted background pattern */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            All the power of top cloud providers; unified, simplified,
            <br />
            and optimized for AI.
          </p>
          <h2 className="text-3xl md:text-4xl font-normal text-white">
            Run powerful AI workloads in three simple steps.
          </h2>
        </motion.div>

        {/* Pick a GPU Section */}
        <div className="mb-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeInUp}
            className="flex items-center gap-4 mb-8"
          >
            <h3 className="text-3xl md:text-4xl font-normal text-white">
              Pick a GPU
            </h3>
            <span className="px-4 py-1.5 border border-white/30 rounded text-white text-sm font-medium">
              STEP 01
            </span>
          </motion.div>

          {/* GPU Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {gpuCards.map((gpu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  ...hoverScale,
                  borderColor: "rgba(255, 255, 255, 0.3)",
                }}
                className="bg-[#141414] rounded-md p-6 border border-white/10 transition-colors"
              >
                {/* Card Header */}
                <div className="flex items-center gap-2 mb-6">
                  <h4
                    className="text-3xl font-normal text-white mb-1"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {gpu.model}
                  </h4>
                  <p className="text-gray-400 text-xl">({gpu.vram})</p>
                </div>

                {/* Specs List */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white">vCPU</span>
                    <span className="text-gray-400">{gpu.vcpu}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Memory</span>
                    <span className="text-gray-400">{gpu.memory}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Disk Storage</span>
                    <span className="text-gray-400">{gpu.storageSpace}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Interconnect</span>
                    <span className="text-gray-400">{gpu.interface}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white">Price</span>
                    <span className="text-[#4A90FF] font-semibold text-lg">
                      {gpu.price || "-"}
                    </span>
                  </div>
                </div>

                {/* GPU Image */}
                <div className="flex items-center justify-center mt-8 pt-6 border-t border-white/10">
                  <Image
                    src={GPUVector}
                    alt="GPU"
                    width={200}
                    height={150}
                    className="w-full h-auto max-w-[200px]"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

