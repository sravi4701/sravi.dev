import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { formatDate } from "@/utils/posts";
import { getSortedPosts } from "@/utils/postsSorted";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on engineering, mostly Python and web platform work.",
  alternates: { canonical: "/posts" },
};

export default function Posts() {
  const posts = getSortedPosts();

  return (
    <section className="py-16 md:py-24">
      <Container>
        <p className="label mb-3">Writing</p>
        <h1 className="font-display text-4xl leading-tight md:text-5xl">
          Notes and learnings
        </h1>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/posts/${post.slug}`}
                className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="text-lg transition-colors group-hover:text-accent">
                  {post.metadata.title}
                </span>
                <span className="shrink-0 font-mono text-xs text-fg-faint">
                  {formatDate(post.metadata.publishedAt)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
