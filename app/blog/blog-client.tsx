"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

interface BlogClientProps {
  blogData: BlogPost[];
}

export default function BlogClient({ blogData }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["All Posts", "News", "Announcements"];

  const filteredPosts = useMemo(() => {
    if (!selectedCategory || selectedCategory === "All Posts") {
      return blogData;
    }
    return blogData.filter(
      (post) => post.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [selectedCategory, blogData]);

  return (
    <>
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
              <Link href={`/blog/${post.slug || post.id}`}>
                <div className="group cursor-pointer transition-all duration-300 hover:opacity-80">
                  <div className="flex items-start gap-8">
                    {/* Left Side - Card Image */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-[280px] h-[200px] rounded-xl relative overflow-hidden">
                        <Image
                          src={"/images/blog-images.png"}
                          alt="Blog post"
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
    </>
  );
}