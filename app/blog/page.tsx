import Link from "next/link";

const posts = [
  { slug: "welcome", title: "Welcome" },
  { slug: "our-mission", title: "Our Mission" },
  { slug: "community-stories", title: "Community Stories" },
];

export default function BlogIndexPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul className="mt-6 space-y-3">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link className="text-primary hover:underline" href={`/blog/${p.slug}`}>
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
