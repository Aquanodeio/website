// Client-safe blog interface and legacy data
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

// Legacy hardcoded blog posts (for backward compatibility)
const legacyBlog: BlogPost[] = [
  // Add legacy posts here if needed, or remove entirely once all posts are in MDX
];

// Synchronous version for backward compatibility
// Note: For new implementations, use the server-side functions from lib/blog-server.ts
const blog = legacyBlog;

export default blog;
