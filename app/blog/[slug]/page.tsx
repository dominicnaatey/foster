import Link from "next/link";

type Props = { params: { slug: string } };

export default function BlogPostPage({ params }: Props) {
  const title = params.slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-4 text-slate-700">This is a placeholder article for {title}.</p>
      <div className="mt-8">
        <Link className="text-primary hover:underline" href="/blog">← Back to Blog</Link>
      </div>
    </article>
  );
}
