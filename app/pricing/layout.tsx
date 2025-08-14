import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPU Pricing | Aquanode",
  description:
    "Compare H100, A100, B200 GPU prices across regions. Filter by vRAM and form factor. Deploy instantly and save up to 80%.",
  alternates: {
    canonical: "https://aquanode.io/pricing",
  },
  openGraph: {
    title: "GPU Pricing | Aquanode",
    description:
      "Compare H100, A100, B200 GPU prices across regions. Filter by vRAM and form factor. Deploy instantly and save up to 80%.",
    url: "https://aquanode.io/pricing",
    type: "website",
    images: [
      {
        url: "https://aquanode.io/images/aquanode-banner.png",
        width: 1200,
        height: 630,
        alt: "Aquanode GPU pricing table and deployment CTA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPU Pricing | Aquanode",
    description:
      "Compare H100, A100, B200 GPU prices across regions. Filter by vRAM and form factor. Deploy instantly and save up to 80%.",
    images: ["https://aquanode.io/images/aquanode-banner.png"],
  },
};

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
