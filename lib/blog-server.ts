// Server-side blog functions - only use in getStaticProps, getServerSideProps, or API routes
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  id: string;
  title: string;
  excerpt?: string;
  content: string;
  author: {
    name: string;
    handle: string;
    title: string;
    avatar: string;
  };
  date: string;
  tags: string[];
  readTime: string;
  slug?: string;
  coverImage?: string;
}

const contentDirectory = path.join(process.cwd(), "content/blog");

export function getAllBlogPosts(): BlogPost[] {
  // Check if content directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      return {
        slug,
        content: matterResult.content,
        ...matterResult.data,
      } as BlogPost;
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      slug,
      content: matterResult.content,
      ...matterResult.data,
    } as BlogPost;
  } catch (error) {
    throw new Error(`Error getting blog post ${slug}: ${error}`);
  }
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}
