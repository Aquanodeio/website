"use client"
import React, { useState, useMemo } from "react";
import Image from "next/image";
import OverlayNavbar from "@/components/OverlayNavbar";
import Footer from "@/components/Footer";
import pricingData from "@/lib/pricing.json";
import { ArrowRight } from "lucide-react";
import PricingBg from "@/assets/pricing/pricing-bg.png";
import Ellipse from "@/assets/pricing/ellipse.png";

export default function Pricing() {
  const [selectedGpuModel, setSelectedGpuModel] = useState("");
  const [selectedVram, setSelectedVram] = useState("");

  const filteredData = useMemo(() => {
    return pricingData.filter(item => {
      const gpuModelMatch = !selectedGpuModel || item.model === selectedGpuModel;
      const vramMatch = !selectedVram || item.variant === selectedVram;
      return gpuModelMatch && vramMatch;
    });
  }, [selectedGpuModel, selectedVram]);

  const uniqueGpuModels = [...new Set(pricingData.map(item => item.model))];
  const uniqueVramOptions = [...new Set(pricingData.map(item => item.variant))];

  return (
    <main className="min-h-screen w-full bg-[#0A0118] overflow-x-hidden overflow-y-auto flex flex-col items-center relative" style={{ fontFamily: "var(--font-)" }}>
      <OverlayNavbar />
      
      <div className="absolute left-0 top-0 w-full h-[300px] sm:h-[500px]">
        <Image src={PricingBg} alt="" fill className="object-cover object-left" />
      </div>
      
      {/* Centered Ellipse */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] sm:w-[600px] sm:h-[400px]">
        <Image src={Ellipse} alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-20 pt-32 pb-20">
        <div className="text-center mb-12 space-y-6">
          <h1 className="text-white text-4xl md:text-5xl font-medium leading-tight mt-10">
            Pricing plans to suit your needs
          </h1>
          <p className="text-[#9B96B0] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Only pay for the compute you use with no vendor lock-in.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-4 mb-8 justify-end">
          <div className="relative">
            <select 
              className="bg-[#1A0F2E] border border-[#2F2F2F] rounded-lg px-4 py-2 text-white appearance-none pr-8 cursor-pointer"
              value={selectedGpuModel}
              onChange={(e) => setSelectedGpuModel(e.target.value)}
            >
              <option value="">GPU Model</option>
              {uniqueGpuModels.map((model) => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="relative">
            <select 
              className="bg-[#1A0F2E] border border-[#2F2F2F] rounded-lg px-4 py-2 text-white appearance-none pr-8 cursor-pointer"
              value={selectedVram}
              onChange={(e) => setSelectedVram(e.target.value)}
            >
              <option value="">vRAM</option>
              {uniqueVramOptions.map((vram) => (
                <option key={vram} value={vram}>{vram}</option>
              ))}
            </select>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="bg-[#1A0F2E]/80 backdrop-blur-xl rounded-2xl border border-[#2F2F2F]/64 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-[#0F0520] border-b border-[#2F2F2F]/64">
            <div className="text-white font-semibold text-sm">
              GPU Model
            </div>
            <div className="text-white font-semibold text-sm text-center">
              vCPUs
            </div>
            <div className="text-white font-semibold text-sm text-center">
              RAM
            </div>
            <div className="text-white font-semibold text-sm text-center">
              Price/hr
            </div>
            <div className="text-white font-semibold text-sm text-center">
              
            </div>
          </div>

          {/* Table Rows */}
          {filteredData.map((item, index) => (
            <div key={index} className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-[#2F2F2F]/32 last:border-b-0 hover:bg-[#2F2F2F]/20 transition-colors">
              <div className="flex items-center gap-3">
                <div className="text-white font-semibold text-sm">
                  {item.model}
                </div>
                <div className="bg-[#353535] text-white opacity-50 px-2 py-1 rounded text-xs font-semibold">
                  {item.variant}
                </div>
              </div>
              <div className="text-white text-sm text-center flex items-center justify-center font-medium">
                {item.cores}
              </div>
              <div className="text-white text-sm text-center flex items-center justify-center font-medium">
                {item.ram}
              </div>
              <div className="text-white text-sm text-center flex items-center justify-center font-medium">
                {item.price}
              </div>
              <div className="flex items-center justify-center">
                {item.available ? (
                  <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Rent Now
                    <ArrowRight className="text-black w-4 h-4" />
                  </button>
                ) : (
                  <span className="text-[#9B96B0] text-sm font-medium">Unavailable</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Plans CTA */}
        <div className="flex items-center justify-center gap-4 mt-12 sm:mt-16">
          <p className="text-white text-[24px] font-semibold">
            Need custom storage or commitment plans?
          </p>
          <button className="bg-gradient-to-r from-[#382A63] to-[#7255C9] hover:from-[#2F2250] hover:to-[#5E46A5] text-white px-6 py-3 rounded-lg text-sm font-normal transition-all">
            Let&apos;s Chat
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}   