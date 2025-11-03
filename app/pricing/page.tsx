import React from "react";
import Head from "next/head";
import BlogNavbar from "@/components/NavbarWhite";
import FooterCTA from "@/components/Home/FooterCTA";
import { getMarketplace } from "@/hooks/useMarketplace";
import { CONSOLE_LINK, MAIL_LINK } from "@/config/links";
import { configSupportedByProvider } from "@/lib/provider-configs";
import { ProviderType } from "@/types";

export const dynamic = "force-dynamic"; // Force dynamic rendering to avoid build-time API calls
export const revalidate = 3600; // 1hr

const getUniqueProviders = async () => {
  try {
    const { providers: data } = await getMarketplace();

    // Deduplicate by GPU model name (case-insensitive), keeping only the lowest price for each model
    const gpuMap = new Map<string, (typeof data)[0]>();

    // convert price per gpu to node price for non configurable providers
    data.forEach((provider) => {
      const providerName = provider.provider
        .split(" ")
        .join("")
        .toLowerCase() as ProviderType;

      const config = configSupportedByProvider[providerName];

      if (!config) console.warn("No config found for provider:", providerName);

      if (!config.gpu) {
        provider.price = provider.price * provider.available;
      }
    });

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
  } catch (error) {
    console.error("Failed to fetch marketplace data:", error);
    return []; // Return empty array on error
  }
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
              GPU Pricing
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Compare GPU prices across multiple providers and deploy instantly
            </p>
          </div>
          {/* Filter Controls */}

          {/* Pricing Table */}
          <div className="overflow-x-auto">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm min-w-[700px]">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-2 md:gap-4 px-3 md:px-6 py-3 md:py-4 bg-gray-50 border-b border-gray-200">
                <div className="text-gray-900 font-semibold text-xs md:text-sm">
                  GPU Model
                </div>
                <div className="text-gray-900 font-semibold text-xs md:text-sm text-center">
                  vRAM
                </div>
                <div className="text-gray-900 font-semibold text-xs md:text-sm text-center">
                  Region
                </div>
                <div className="text-gray-900 font-semibold text-xs md:text-sm text-center">
                  Price/hr
                </div>
                <div className="text-gray-900 font-semibold text-xs md:text-sm text-center"></div>
              </div>

              {/* Table Rows */}
              {data.length === 0 ? (
                <div className="px-6 py-12 text-center">
                  <p className="text-gray-500 text-sm">
                    Unable to load pricing data at the moment. Please try again
                    later or{" "}
                    <a
                      href={MAIL_LINK}
                      className="text-blue-600 hover:underline"
                    >
                      contact us
                    </a>{" "}
                    for current pricing.
                  </p>
                </div>
              ) : (
                data.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-5 gap-2 md:gap-4 px-3 md:px-6 py-3 md:py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="text-gray-900 font-semibold text-xs md:text-sm whitespace-nowrap">
                        {item.gpuShortName.toUpperCase()}
                      </div>
                      <div className="bg-gray-100 text-gray-600 px-1.5 md:px-2 py-0.5 md:py-1 rounded text-[10px] md:text-xs font-semibold whitespace-nowrap">
                        {item.interface}
                      </div>
                    </div>
                    <div className="text-gray-700 text-xs md:text-sm text-center flex items-center justify-center font-medium whitespace-nowrap">
                      {item.gpuMemory.toUpperCase()}
                    </div>
                    <div className="text-gray-700 text-xs md:text-sm text-center flex items-center justify-center font-medium whitespace-nowrap">
                      {item.region}
                    </div>
                    <div className="text-gray-700 text-xs md:text-sm text-center flex items-center justify-center font-medium whitespace-nowrap">
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
                          className="group bg-[#2A2A2A] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-[10px] text-xs md:text-sm font-normal transition-all flex items-center gap-2 md:gap-3 backdrop-blur-sm border border-gray-700 whitespace-nowrap"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          Rent Now
                          <div className="flex items-center gap-0">
                            <div className="h-[2px] w-2 md:w-3 bg-current transition-all duration-200 group-hover:w-4 md:group-hover:w-6" />
                            <div className="w-1.5 md:w-2 h-1.5 md:h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[5px] md:-translate-x-[7px] transition-all" />
                          </div>
                        </a>
                      ) : (
                        <button
                          className="bg-gray-300 text-gray-500 px-3 md:px-4 py-1.5 md:py-2 rounded-[10px] text-xs md:text-sm font-normal cursor-not-allowed opacity-50 flex items-center gap-2 whitespace-nowrap"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          Unavailable
                        </button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <FooterCTA />
      </main>
    </>
  );
}
