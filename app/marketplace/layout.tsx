import ReactQueryProvider from "@/components/ReactQueryProvider";
import React, { PropsWithChildren } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPU Marketplace | Aquanode",
  description:
    "Browse and compare GPU instances from multiple cloud providers. Find the best H100, A100, H200 GPUs for your AI workloads.",
  alternates: {
    canonical: "https://aquanode.io/marketplace",
  },
  openGraph: {
    title: "GPU Marketplace | Aquanode",
    description:
      "Browse and compare GPU instances from multiple cloud providers. Find the best H100, A100, H200 GPUs for your AI workloads.",
    url: "https://aquanode.io/marketplace",
    type: "website",
    images: [
      {
        url: "https://aquanode.io/images/aquanode-banner.png",
        width: 1200,
        height: 630,
        alt: "Aquanode GPU marketplace with filters and pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPU Marketplace | Aquanode",
    description:
      "Browse and compare GPU instances from multiple cloud providers. Find the best H100, A100, H200 GPUs for your AI workloads.",
    images: ["https://aquanode.io/images/aquanode-banner.png"],
  },
};

const MarketplaceLayout = ({ children }: PropsWithChildren) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default MarketplaceLayout;
