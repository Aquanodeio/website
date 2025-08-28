"use client";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import OverlayNavbar from "@/components/OverlayNavbar";
import Footer from "@/components/Footer";
import PricingBg from "@/assets/pricing/pricing-bg.png";
import Ellipse from "@/assets/pricing/ellipse.png";
import { Provider } from "@/components/ui/MarketplaceCard";
import { useMarketplace } from "@/hooks/useMarketplace";
import MarketplaceWithFiltersSuspense from "@/components/MarketplaceWithFiltersSuspense";
import { CONTACT_SALES_LINK } from "@/config/links";

export default function MarketplacePage() {
  const {
    data: marketplaceData,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useMarketplace();

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
          <div className="flex flex-wrap gap-4 mb-8 justify-start"></div>

          <MarketplaceWithFiltersSuspense
            isLoading={isLoading || isFetching}
            providers={marketplaceData?.providers || []}
            onSelect={function (provider: Provider): void {
              throw new Error("Function not implemented.");
            }}
          />

          {/* Custom Plans CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 sm:mt-16">
            <p className="text-white text-xl sm:text-2xl font-semibold text-center sm:text-left">
              Need custom storage or commitment plans?
            </p>
            <a href={CONTACT_SALES_LINK}>
              <button className="bg-[#3F3D70] cursor-pointer hover:bg-[#514EA3] text-white px-6 py-3 rounded-lg text-sm font-medium transition-all">
                Let&apos;s Chat
              </button>
            </a>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
