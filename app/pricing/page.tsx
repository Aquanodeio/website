import React from "react";
import Image from "next/image";
import Head from "next/head";
import OverlayNavbar from "@/components/OverlayNavbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import PricingBg from "@/assets/pricing/pricing-bg.png";
import Ellipse from "@/assets/pricing/ellipse.png";
import { CONSOLE_LINK } from "@/config/links";
import { getMarketplace } from "@/hooks/useMarketplace";

export const revalidate = 3600 * 24;

const getUniqueProviders = async () => {
  const { providers: data } = await getMarketplace();

  // Deduplicate by GPU model name (case-insensitive), keeping only the lowest price for each model
  const gpuMap = new Map<string, (typeof data)[0]>();

  data.forEach((provider) => {
    const gpuKey = provider.gpuShortName.toLowerCase();
    const existingProvider = gpuMap.get(gpuKey);

    if (!existingProvider || provider.price < existingProvider.price) {
      gpuMap.set(gpuKey, provider);
    }
  });

  // Convert map back to array
  const uniqueData = Array.from(gpuMap.values());

  return uniqueData;
};

export default async function Pricing() {
  const data = await getUniqueProviders();

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://aquanode.io/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Pricing",
                  item: "https://aquanode.io/pricing",
                },
              ],
            }),
          }}
        />
      </Head>
      <main
        className="min-h-screen w-full bg-[#0A0118] overflow-x-hidden overflow-y-auto flex flex-col items-center relative"
        style={{ fontFamily: "var(--font-)" }}
      >
        <OverlayNavbar />

        <div className="absolute left-0 top-0 w-full h-[300px] sm:h-[500px]">
          <Image
            src={PricingBg}
            alt=""
            fill
            className="object-cover object-left"
          />
        </div>

        {/* Centered Ellipse */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] sm:w-[600px] sm:h-[400px]">
          <Image src={Ellipse} alt="" fill className="object-contain" />
        </div>

        <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-20 pt-32 pb-20">
          {/* Filter Controls */}

          {/* Pricing Table */}
          <div className="bg-[#1A0F2E]/80 backdrop-blur-xl rounded-2xl border border-[#2F2F2F]/64 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-[#0F0520] border-b border-[#2F2F2F]/64">
              <div className="text-white font-semibold text-sm">GPU Model</div>
              <div className="text-white font-semibold text-sm text-center">
                vRAM
              </div>
              <div className="text-white font-semibold text-sm text-center">
                Region
              </div>
              <div className="text-white font-semibold text-sm text-center">
                Price/hr
              </div>
              <div className="text-white font-semibold text-sm text-center"></div>
            </div>

            {/* Table Rows */}
            {data.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-[#2F2F2F]/32 last:border-b-0 hover:bg-[#2F2F2F]/20 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="text-white font-semibold text-sm">
                    {item.gpuShortName.toUpperCase()}
                  </div>
                  <div className="bg-[#353535] text-white opacity-50 px-2 py-1 rounded text-xs font-semibold">
                    {item.interface}
                  </div>
                </div>
                <div className="text-white text-sm text-center flex items-center justify-center font-medium">
                  {item.gpuMemory}
                </div>
                <div className="text-white text-sm text-center flex items-center justify-center font-medium">
                  {item.region}
                </div>
                <div className="text-white text-sm text-center flex items-center justify-center font-medium">
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(item.price)}
                </div>
                <div className="flex items-center justify-center">
                  {item.available > 0 ? (
                    <a
                      target="_blank"
                      href={
                        CONSOLE_LINK +
                        "/marketplace?gpuName=" +
                        item.gpuShortName
                      }
                      className="bg-white hover:bg-gray-200 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      Rent Now
                      <ArrowRight className="text-black w-4 h-4" />
                    </a>
                  ) : (
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed opacity-50 flex items-center gap-2">
                      Rent Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Custom Plans CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 sm:mt-16">
            <p className="text-white text-xl sm:text-2xl font-semibold text-center sm:text-left">
              Need custom storage or commitment plans?
            </p>
            <button className="bg-[#3F3D70] hover:bg-[#514EA3] text-white px-6 py-3 rounded-lg text-sm font-medium transition-all">
              Let&apos;s Chat
            </button>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
