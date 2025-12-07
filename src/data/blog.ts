export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "from-lost-to-less-lost",
    slug: "from-lost-to-less-lost",
    title: "From Lost to Less Lost",
    excerpt: "A reflection on navigating uncertainty and finding direction in professional development",
    content: "Placeholder content for the blog post",
    date: "2024-12-02",
    author: "Nick Smid",
    tags: ["Reflection", "Growth", "Journey"],
    readTime: "5 min read",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
