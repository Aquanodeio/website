import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogNavbar from "@/components/Blogs/BlogNavbar";
import FooterCTA from "@/components/Home/FooterCTA";
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog-server";
import MDXRenderer from "@/components/mdx/mdx-renderer";
import EllipseLeft from "@/assets/blogs/ellipse-left.svg";
import EllipseRight from "@/assets/blogs/ellipse-right.svg";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main
      className="min-h-screen w-full bg-white overflow-x-hidden overflow-y-auto flex flex-col"
      style={{ fontFamily: "var(--font-)" }}
    >
      <BlogNavbar />

      {/* Container with consistent padding */}
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20 py-8">
        {/* Hero Banner - 30% smaller than blog page */}
        <div className="relative w-full bg-[#0F0E11] p-28 overflow-hidden rounded-[10px] mb-8">
          {/* Subtle blue gradient overlay - bottom right */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 1000px 800px at 85% 80%, rgba(21, 47, 112, 0.3), transparent 60%)",
            }}
          />

          {/* Left Ellipse Light - very subtle */}
          <div className="absolute left-0 -bottom-65 w-[600px] h-[650px] opacity-100 pointer-events-none rotate-[-6deg]">
            <Image
              src={EllipseLeft}
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Right Ellipse Light - more prominent on bottom right */}
          <div className="absolute right-0 -bottom-80 w-[900px] h-[900px] opacity-20 pointer-events-none">
            <Image
              src={EllipseRight}
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 text-center">
            <h1 className="text-4xl md:text-5xl font-normal text-white" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
              {post.title}
            </h1>
          </div>
        </div>

        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-12"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </Link>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Post Header (Sticky) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              {/* Author Info */}
              <div className="flex items-center gap-4 mb-4">
                {post.author.avatar ? (
                  <div className="w-16 h-16 rounded-full overflow-hidden relative">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">
                      {post.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                )}
                <div>
                  <p className="text-gray-900 font-semibold text-base">
                    {post.author.name}
                  </p>
                  <p className="text-gray-600 text-sm">{post.author.title}</p>
                </div>
              </div>

              {/* Date */}
              <div className="mb-6">
                <span className="text-gray-600 text-sm font-medium uppercase tracking-wide">
                  {post.date}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Post Content */}
          <div className="lg:col-span-8">
            <article className="max-w-none">
              <div className="text-gray-600">
                <MDXRenderer content={post.content} />
              </div>
            </article>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 border border-gray-200 text-gray-600 px-3 py-1 rounded-lg text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <FooterCTA />
    </main>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}
