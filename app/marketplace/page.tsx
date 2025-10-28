"use client";
import React from "react";
import Head from "next/head";
import BlogNavbar from "@/components/Blogs/BlogNavbar";
import FooterCTA from "@/components/Home/FooterCTA";
import { useMarketplace } from "@/hooks/useMarketplace";
import MarketplaceWithFiltersSuspense from "@/components/MarketplaceWithFiltersSuspense";

export default function MarketplacePage() {
  const { data: marketplaceData, isLoading, isFetching } = useMarketplace();

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
                  name: "Marketplace",
                  item: "https://aquanode.io/marketplace",
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
              GPU Marketplace
            </h1>
            <p className="text-lg text-gray-600">
              Browse and compare GPU instances from multiple cloud providers
            </p>
          </div>

          <MarketplaceWithFiltersSuspense
            isLoading={isLoading || isFetching}
            providers={marketplaceData?.providers || []}
            onSelect={() => {}}
          />
        </div>

        {/* Footer */}
        <FooterCTA />
      </main>
    </>
  );
}
