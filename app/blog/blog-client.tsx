"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

interface BlogClientProps {
  blogData: BlogPost[];
}

export default function BlogClient({ blogData }: BlogClientProps) {
  return (
    <div className="max-w-7xl">
      {/* Section Header */}
      <h2 className="text-2xl font-normal text-gray-600 mb-8">Get Started With Our Recent Posts</h2>

      {/* Blog Grid - 3 columns */}
      {blogData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => {
            return (
              <Link key={post.id} href={`/blog/${post.slug || post.id}`}>
                <div className="group cursor-pointer transition-all duration-300 bg-black rounded-2xl overflow-hidden hover:scale-[1.02]">
                  {/* Card Image */}
                  <div className="relative w-full h-[280px] overflow-hidden">
                    <Image
                      src={post.coverImage || "/aquanode-banner.png"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Date */}
                    <div className="text-gray-400 text-sm font-medium uppercase tracking-wide mb-3">
                      {post.date}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-normal text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Read Article Button */}
                    <button 
                      className="group/btn bg-[#3B82F6] hover:bg-[#2563EB] transition-all text-white font-normal px-6 py-3 rounded-lg flex items-center gap-2 text-sm"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Read Article
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all"
                      >
                        <path
                          d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33333M12.6667 8L8.00004 12.6667"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <p className="text-gray-500 text-lg">Nothing in this section yet!</p>
      )}
    </div>
  );
}
