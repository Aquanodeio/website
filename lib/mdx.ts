import fs from "fs";
import path from "path";
import matter from "gray-matter";

// This function should only be called on the server side
const getContentDirectory = () => {
  if (typeof window !== "undefined") {
    throw new Error("This function can only be called on the server side");
  }
  return path.join(process.cwd(), "content/blog");
};

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
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
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const contentDirectory = getContentDirectory();

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
    // Convert date strings to comparable format
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const contentDirectory = getContentDirectory();
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
  const contentDirectory = getContentDirectory();

  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}
