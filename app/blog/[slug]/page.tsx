import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import OverlayNavbar from "@/components/OverlayNavbar";
import Footer from "@/components/Footer";
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog-server";
import MDXRenderer from "@/components/mdx/mdx-renderer";
import PricingBg from "@/assets/pricing/pricing-bg.png";
import Ellipse from "@/assets/pricing/ellipse.png";

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
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors mb-8"
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

        {/* Post Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#9CA3AF] text-sm font-medium">
              {post.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#3F3D70] to-[#514EA3] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div>
              <p className="text-white font-semibold">
                {post.author.name}{" "}
                <span className="text-[#9CA3AF] font-normal">
                  {post.author.handle}
                </span>
              </p>
              <p className="text-[#9CA3AF] text-sm">{post.author.title}</p>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <article className="max-w-none">
          <div className="text-[#E5E7EB]">
            <MDXRenderer content={post.content} />
          </div>
        </article>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-[#2F2F2F]">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#1A0F2E] border border-[#2F2F2F] text-[#9CA3AF] px-3 py-1 rounded-lg text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 pt-12 border-t border-[#2F2F2F]">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Take the Leap to Smarter Compute
          </h2>
          <p className="text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
            Start building on Aquanode. Accelerate your AI applications with our
            high-performance compute infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#3F3D70] hover:bg-[#514EA3] text-white px-8 py-3 rounded-lg text-sm font-medium transition-all">
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

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}
