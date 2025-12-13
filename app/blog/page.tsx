import BlogListingPage from "@/components/blog/BlogListingPage";
import { getBlogPosts, BlogPost } from "@/lib/api";

export default async function BlogIndexPage() {
  let posts: BlogPost[] = [];
  try {
    const res = await getBlogPosts();
    posts = res.data;
  } catch (error) {
    console.error("Failed to load blog posts:", error);
  }

  return <BlogListingPage posts={posts} />;
}
