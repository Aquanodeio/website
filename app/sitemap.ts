import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog-server";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aquanode.io";
  const lastModified = new Date();

  const blogPosts = getAllBlogPosts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/marketplace`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Blog post pages
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
