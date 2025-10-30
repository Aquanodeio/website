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
                    <h3 className="text-xl font-normal text-white mb-3 leading-tight">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Read Article Button */}
                    {/* <button 
                      className="bg-white transition-all text-black font-normal px-6 py-3 rounded-lg flex items-center gap-3 text-sm border border-blue-600/10 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Read Article
                      <div className="flex items-center gap-0">
                        <div className="h-[2px] w-3 bg-current transition-all duration-200 group-hover:w-6" />
                        <div className="w-2 h-2 border-r-2 border-b-2 border-current rotate-[-45deg] -translate-x-[7px] transition-all" />
                      </div>
                    </button> */}
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
