import BlogArticle from "@/components/blog/BlogArticle";
import { getBlogPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogArticle post={post} />;
}
