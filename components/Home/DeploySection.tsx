"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, viewport } from "@/lib/motionConfig";
import DeployImage from "@/assets/home/launching/use.png";

export function DeploySection() {
  return (
    <section className="relative w-full bg-black py-4 overflow-hidden">
      <div
        className="relative z-10 px-6 md:px-12 lg:px-16 xl:px-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeInUp}
          className="flex items-center gap-4 mb-8"
        >
          <h3 className="text-3xl md:text-4xl font-normal text-white">
            Deploy and Start Using
          </h3>
          <span className="px-4 py-1.5 border border-white/30 rounded text-white text-sm font-medium">
            STEP 03
          </span>
        </motion.div>

        {/* Main Content Image */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeInUp}
          className="w-full"
        >
          <Image
            src={DeployImage}
            alt="Deploy and Start Using"
            className="h-[85dvh] mx-auto w-auto rounded-lg border border-white/10"
            placeholder="blur"
          />
        </motion.div>
      </div>
    </section>
  );
}
