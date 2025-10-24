import React from "react";
import Image from "next/image";
import OverlayNavbar from "@/components/OverlayNavbar";
import Footer from "@/components/Footer";
import { getAllBlogPosts } from "@/lib/blog-server";
import BlogClient from "./blog-client";
import PricingBg from "@/assets/pricing/pricing-bg.png";
import Ellipse from "@/assets/pricing/ellipse.png";

export default async function Blog() {
  const blogData = getAllBlogPosts();

  return (
    <main
      className="min-h-screen w-full bg-[#0A0118] overflow-x-hidden overflow-y-auto flex flex-col items-center relative"
      style={{ fontFamily: "var(--font-)" }}
    >
      <OverlayNavbar />

      {/* Background Images */}
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

      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8 pt-40 pb-50">
        {/* Header */}
        {/* <div className="text-center mb-16">
          <div className="inline-block bg-[#1E1E2E] border border-[#2F2F2F] rounded-full px-4 py-2 mb-8">
            <span className="text-white text-sm font-medium">BLOGS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Discover our latest news
          </h1>
        </div> */}

        {/* Client-side interactive components */}
        <BlogClient blogData={blogData} />
      </div>

      <Footer />
    </main>
  );
}
