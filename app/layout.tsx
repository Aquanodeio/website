import { Inter, Figtree } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aquanode",
  description: "AI Cloud that's Effortless & Affordable",
  openGraph: {
    title: "Aquanode - AI Cloud that's Effortless & Affordable",
    description: "AI Cloud that's Effortless & Affordable",
    url: "https://aquanode.io",
    siteName: "Aquanode",
    images: [
      {
        url: "https://aquanode.io/images/aquanode-banner.png",
        width: 1200,
        height: 630,
        alt: "Aquanode Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://aquanode.io/images/aquanode-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${figtree.variable} ${inter.className} min-h-screen bg-background coal-texture text-[97%]`}
        style={{ fontFamily: "var(--font-figtree)" }}
      >
        <div className="mx-auto">{children}</div>
      </body>
    </html>
  );
}
