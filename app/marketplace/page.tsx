"use client";
import React from "react";
import BlogNavbar from "@/components/NavbarWhite";
import FooterCTA from "@/components/Home/FooterCTA";
import { useMarketplace } from "@/hooks/useMarketplace";
import MarketplaceWithFiltersSuspense from "@/components/Marketplace/MarketplaceWithFiltersSuspense";

export default function MarketplacePage() {
  const { data: marketplaceData, isLoading, isFetching } = useMarketplace();

  const breadcrumbSchema = {
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
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "GPU Rental Service",
    description:
      "Rent high-performance GPUs including H100, A100, H200, and AMD MI300X for AI and ML workloads",
    brand: {
      "@type": "Brand",
      name: "Aquanode",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0.29",
      highPrice: "5.00",
      offerCount: marketplaceData?.providers?.length || 100,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <main
        className="min-h-screen w-full bg-white overflow-x-hidden overflow-y-auto flex flex-col"
        style={{ fontFamily: "var(--font-)" }}
      >
        <BlogNavbar />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 xl:px-20 pt-12 pb-20">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4">
              GPU Marketplace
            </h1>
            <p className="text-base md:text-lg text-gray-600">
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
