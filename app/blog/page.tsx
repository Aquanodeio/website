"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import OverlayNavbar from "@/components/OverlayNavbar";
import Footer from "@/components/Footer";
import blogData from "@/lib/blog.json";
import PricingBg from "@/assets/pricing/pricing-bg.png";
import Ellipse from "@/assets/pricing/ellipse.png";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["All Posts", "News", "Announcements"];

  const filteredPosts = useMemo(() => {
    if (!selectedCategory || selectedCategory === "All Posts") {
      return blogData;
    }
    return blogData.filter(
      (post) => post.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory]);

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

      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#1E1E2E] border border-[#2F2F2F] rounded-full px-4 py-2 mb-8">
            <span className="text-white text-sm font-medium">BLOGS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Discover our latest news
          </h1>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-6 mb-12 justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category === "All Posts" ? "" : category)
              }
              className={`flex items-center gap-2 text-sm font-medium transition-all ${
                (selectedCategory === "" && category === "All Posts") ||
                selectedCategory === category
                  ? "text-white"
                  : "text-[#6B7280] hover:text-white"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  (selectedCategory === "" && category === "All Posts") ||
                  selectedCategory === category
                    ? "bg-[#6366F1]"
                    : "bg-transparent border border-[#6B7280]"
                }`}
              />
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="space-y-16">
          {filteredPosts.map((post, index) => {
            const isAchievement =
              post.category === "Announcement" ||
              post.tags?.includes("achievement");

            return (
              <div key={post.id}>
                <Link href={`/blog/${post.id}`}>
                  <div className="group cursor-pointer transition-all duration-300 hover:opacity-80">
                    <div className="flex items-start gap-8">
                      {/* Left Side - Card Image */}
                      <div className="flex-shrink-0 relative">
                        <div className="w-[280px] h-[200px] rounded-xl relative overflow-hidden">
                          <Image
                            src={"/images/blog-images.png"}
                            alt="Infrastructure Track - Colosseum"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="flex-1 pt-2">
                        {/* Top Row - Badge and Date */}
                        <div className="flex items-center gap-4 mb-4">
                          {isAchievement && (
                            <div className="bg-[#3B3F7A] px-3 py-1 rounded text-white text-xs font-medium uppercase tracking-wide">
                              ACHIEVEMENTS
                            </div>
                          )}
                          <span className="text-[#8B8FA3] text-sm font-medium uppercase tracking-wide">
                            {post.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#A5B4FC] transition-colors">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-[#8B8FA3] text-base leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Divider line - only show if not the last item */}
                {index < filteredPosts.length - 1 && (
                  <div className="mt-16 border-t border-[#2F2F2F]/50"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Take the Leap to Smarter Compute
          </h2>
          <p className="text-[#9CA3AF] text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            Start building on secure, scalable, and orchestrated
            infrastructure—powered by decentralized networks. The future of
            cloud starts here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#6366F1] hover:bg-[#5B5BF1] text-white px-8 py-3 rounded-lg text-sm font-medium transition-all">
              Get Started
            </button>
            <button className="border border-[#2F2F2F] hover:bg-[#2F2F2F]/20 text-white px-8 py-3 rounded-lg text-sm font-medium transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
