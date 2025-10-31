import { Inter, Figtree, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import WebVitals from "@/components/WebVitals";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600"], // Removed unused weights
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title:
    "Aquanode - AI Cloud Platform | Deploy on H100, A100, H200 GPUs | Save 80% Costs",
  description:
    "Deploy AI models on H100, A100, H200 GPUs with up to 80% cost savings. One platform for cloud features on every GPU. Pick, deploy, and scale effortlessly.",
  keywords:
    "AI cloud, GPU hosting, H100, A100, H200, machine learning, AI inference, cost-effective AI, GPU computing, cloud deployment, Cheap GPU, Rent GPU, On-Demand GPU",
  authors: [{ name: "Aquanode" }],
  creator: "Aquanode",
  publisher: "Aquanode",

  openGraph: {
    title: "Aquanode - AI Cloud Platform | Save 80% on GPU Costs",
    description:
      "Deploy AI models with up to 80% cost savings on H100, A100, H200 GPUs. Lightning-fast deployment on global infrastructure.",
    url: "https://aquanode.io",
    siteName: "Aquanode",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://aquanode.io/images/aquanode-banner.png",
        width: 1200,
        height: 630,
        alt: "Aquanode AI Cloud Platform Dashboard showing GPU pricing comparison",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aquanode - AI Cloud Platform | Save 80% on GPU Costs",
    description:
      "Deploy AI models with up to 80% cost savings on H100, A100, H200 GPUs",
    creator: "@aquanode",
    images: ["https://aquanode.io/images/aquanode-banner.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "google-site-verification-token", // Add your actual token
  },

  alternates: {
    canonical: "https://aquanode.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aquanode",
              url: "https://aquanode.io",
              logo: "https://aquanode.io/images/aquanode-banner.png",
              description:
                "AI Cloud platform offering 80% cost savings on H100, A100, H200 GPU computing with effortless deployment",
              foundingDate: "2024",
              industry: "Cloud Computing",
              services: [
                "H100 GPU Hosting",
                "A100 GPU Hosting",
                "H200 GPU Hosting",
                "AI Model Deployment",
                "GPU Cloud Computing",
                "GPU Cloud Hosting",
                "Serverless GPU Computing",
                "Comfy UI",
                "n8n",
                "vllm",
                "Containerized GPU Computing",
                "Deploy Docker Containers",
                "rtx4090 GPU Hosting",
              ],
              keywords:
                "AI Cloud, GPU Hosting, H100 pricing, A100 cloud, H200 deployment, machine learning inference, cost-effective AI",
              sameAs: [
                "https://twitter.com/aquanode",
                "https://github.com/aquanode",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${figtree.variable} ${jetbrainsMono.variable} ${GeistSans.variable} ${inter.className} min-h-screen bg-background coal-texture text-[97%]`}
        style={{ fontFamily: "var(--font-geist-sans)" }}
      >
        <WebVitals />

        {/* Hidden SEO content for search engines */}
        <div className="sr-only" aria-hidden="true">
          <h2>H100 A100 H200 GPU Cloud Hosting</h2>
          <p>
            Deploy AI models on H100, A100, and H200 GPUs with up to 80% cost
            savings. Lightning-fast machine learning inference on enterprise GPU
            infrastructure.
          </p>
          <span>
            AI Cloud Platform, GPU Hosting Service, H100 GPU Pricing, A100 Cloud
            Computing, H200 Deployment, Machine Learning Infrastructure
          </span>
        </div>

        <div className="mx-auto">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
