"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AssetSVG from "@/assets/home/whatyoucan/asset099.svg";
import {
  fadeInUp,
  fadeInLeft,
  viewport,
  buttonHover,
  tapScale,
} from "@/lib/motionConfig";

export default function WhatYouCanDoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const useCases = [
    {
      label: "Train",
      title: "Train Large Language Models (LLMs)",
      description:
        "Quickly Train Large AI Models Using Powerful GPUs, So You Spend Less Time Waiting And More Time Building.",
    },
    {
      label: "Tune",
      title: "Customize Existing Models",
      description:
        "Easily Adjust Existing Models With Your Own Data To Get Results That Match Your Project's Needs.",
    },
    {
      label: "Deploy",
      title: "Run High-Performance Inference",
      description:
        "Run Your Models Efficiently To Get Accurate Predictions In Real Time, Making Your Applications More Responsive.",
    },
    {
      label: "Experiment",
      title: "AI Research & Experimentation",
      description:
        "Experiment With New AI Ideas And Test Different Approaches Without Worrying About Setting Up Or Managing Infrastructure.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !itemRefs.current.length) return;

      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      // Check each item to see which one is closest to the center of the viewport
      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white py-20 md:py-32"
    >
      <div className="w-full">
        {/* Content Grid */}
        <div className="px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-start max-w-7xl relative ">
            {/* Left: SVG Illustration */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={fadeInLeft}
              className="hidden lg:flex items-start justify-start flex-col sticky top-20"
            >
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-normal text-black mb-16 md:mb-20">
                What you can do with
                <br />
                Aquanode
              </h2>
              <Image
                src={AssetSVG}
                alt="Asset"
                width={800}
                height={800}
                className="w-full"
              />
            </motion.div>

            {/* Right: Use Cases */}
            <div className="space-y-12 mt-40">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`transition-all duration-500 ease-out ${
                    index === activeIndex ? "opacity-100" : "opacity-40"
                  }`}
                >
                  {/* Label Badge */}
                  <div className="mb-8">
                    <span className="inline-block px-4 py-1.5 text-sm font-medium text-gray-700 border border-gray-900 rounded-sm">
                      {useCase.label}
                    </span>
                  </div>

                  {/* Progress Line */}
                  <div className="relative mb-14">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-gray-200">
                      <div
                        className="h-full bg-black transition-all duration-500"
                        style={{
                          width:
                            index === activeIndex
                              ? ["0%", "30%", "70%", "100%"][index]
                              : "0%",
                        }}
                      />
                    </div>
                    <div
                      className={`absolute top-1/2 w-3 h-3 rounded-full transition-all duration-500 ${
                        index === activeIndex ? "bg-black" : "bg-gray-300"
                      }`}
                      style={{
                        left: ["0%", "30%", "70%", "100%"][index],
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl text-black mb-8">{useCase.title}</h3>

                  {/* Description */}
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}

              {/* CTA Button */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                variants={fadeInUp}
                className="pt-8"
              >
                <Link href="/marketplace">
                  <motion.button
                    whileHover={buttonHover}
                    whileTap={tapScale}
                    className="group bg-[#3B82F6] transition-all text-white font-normal flex items-center justify-center gap-3 backdrop-blur-sm border border-white/10 px-6 cursor-pointer whitespace-nowrap"
                    style={{
                      width: "250px",
                      height: "50px",
                      borderRadius: "10px",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    Try Aquanode Now
                    <div className="flex items-center gap-0">
                      <div className="h-[2px] w-3 bg-current transition-all duration-200 group-hover:w-6" />
                      <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[7px] transition-all" />
                    </div>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
