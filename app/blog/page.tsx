import React from "react";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/blog-server";
import BlogGrid from "./blog-grid";
import FooterCTA from "@/components/Home/FooterCTA";
import BlogNavbar from "@/components/NavbarWhite";
import EllipseLeft from "@/assets/blogs/ellipse-left.svg";
import EllipseRight from "@/assets/blogs/ellipse-right.svg";
import ArrowDown from "@/assets/blogs/arrow-down-vector.svg";

export default async function Blog() {
  const blogData = getAllBlogPosts();

  return (
    <main
      className="min-h-screen w-full bg-white overflow-x-hidden overflow-y-auto flex flex-col"
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >
      <BlogNavbar />

      {/* Container with consistent padding */}
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20 py-8">
        {/* Hero Section with gradient - rounded container */}
        <div className="relative w-full bg-[#0F0E11] py-12 px-6 md:py-24 md:px-12 lg:py-32 lg:px-20 overflow-hidden rounded-[10px]">
          {/* Subtle blue gradient overlay - bottom right */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 1000px 800px at 85% 80%, rgba(21, 47, 112, 0.3), transparent 60%)",
            }}
          />

          {/* Left Ellipse Light - very subtle */}
          <div className="hidden md:block absolute left-0 -bottom-65 w-[600px] h-[650px] opacity-100 pointer-events-none rotate-[-6deg]">
            <Image
              src={EllipseLeft}
              alt=""
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>

          {/* Right Ellipse Light - more prominent on bottom right */}
          <div className="hidden md:block absolute right-0 -bottom-80 w-[900px] h-[900px] opacity-20 pointer-events-none">
            <Image
              src={EllipseRight}
              alt=""
              fill
              className="object-contain"
              loading="lazy"
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4 md:mb-6 leading-tight"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Latest from Aquanode
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-6 md:mb-8 max-w-3xl mx-auto">
              Aquanode lets you deploy and manage GPUs across multiple cloud
              providers with features like pause and resume vm without needing
              to manage multiple cloud accounts.
            </p>

            {/* Scroll Down indicator */}
            <div className="hidden md:flex flex-row items-center justify-center gap-3 mt-16 lg:mt-24">
              <Image
                src={ArrowDown}
                alt="Scroll Down"
                width={24}
                height={24}
                className="text-gray-400"
                loading="lazy"
              />
              <span className="text-gray-400 text-xl lg:text-2xl">
                Scroll Down
              </span>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="relative z-10 w-full bg-white py-12">
          <BlogGrid blogData={blogData} />
        </div>
      </div>

      <FooterCTA />
    </main>
  );
}
