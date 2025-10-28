import React from "react";
import Head from "next/head";
import BlogNavbar from "@/components/NavbarWhite";
import FooterCTA from "@/components/Home/FooterCTA";
import { getMarketplace } from "@/hooks/useMarketplace";
import { CONSOLE_LINK, MAIL_LINK } from "@/config/links";

export const revalidate = 3600; // 1hr

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

  const uniqueData = Array.from(gpuMap.values());

  uniqueData.forEach((item) => {
    item.region = item.region.replace(/[0-9]/g, "").trim();
  });

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
        className="min-h-screen w-full bg-white overflow-x-hidden overflow-y-auto flex flex-col"
        style={{ fontFamily: "var(--font-)" }}
      >
        <BlogNavbar />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 xl:px-20 pt-12 pb-20">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4">
              GPU Pricing
            </h1>
            <p className="text-lg text-gray-600">
              Compare GPU prices across multiple providers and deploy instantly
            </p>
          </div>
          {/* Filter Controls */}

          {/* Pricing Table */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200">
              <div className="text-gray-900 font-semibold text-sm">GPU Model</div>
              <div className="text-gray-900 font-semibold text-sm text-center">
                vRAM
              </div>
              <div className="text-gray-900 font-semibold text-sm text-center">
                Region
              </div>
              <div className="text-gray-900 font-semibold text-sm text-center">
                Price/hr
              </div>
              <div className="text-gray-900 font-semibold text-sm text-center"></div>
            </div>

            {/* Table Rows */}
            {data.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="text-gray-900 font-semibold text-sm">
                    {item.gpuShortName.toUpperCase()}
                  </div>
                  <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-semibold">
                    {item.interface}
                  </div>
                </div>
                <div className="text-gray-700 text-sm text-center flex items-center justify-center font-medium">
                  {item.gpuMemory.toUpperCase()}
                </div>
                <div className="text-gray-700 text-sm text-center flex items-center justify-center font-medium">
                  {item.region}
                </div>
                <div className="text-gray-700 text-sm text-center flex items-center justify-center font-medium">
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
                      className="group bg-[#2A2A2A] text-white px-4 py-2 rounded-[10px] text-sm font-normal transition-all flex items-center gap-3 backdrop-blur-sm border border-gray-700"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Rent Now
                      <div className="flex items-center gap-0">
                        <div className="h-[2px] w-3 bg-current transition-all duration-200 group-hover:w-6" />
                        <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[7px] transition-all" />
                      </div>
                    </a>
                  ) : (
                    <button className="bg-gray-300 text-gray-500 px-4 py-2 rounded-[10px] text-sm font-normal cursor-not-allowed opacity-50 flex items-center gap-2" style={{ fontFamily: 'var(--font-inter)' }}>
                      Unavailable
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <FooterCTA />
      </main>
    </>
  );
}
