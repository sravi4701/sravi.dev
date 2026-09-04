import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import CustomMDX from "@/components/CustomMDX";
import { formatDate, getBlogPosts } from "@/utils/posts";

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPosts().find((entry) => entry.slug === params.slug);
  if (!post) return {};

  const { title, publishedAt, summary } = post.metadata;

  return {
    title,
    description: summary ?? title,
    alternates: { canonical: `/posts/${post.slug}` },
    openGraph: {
      type: "article",
      title,
      description: summary ?? title,
      publishedTime: publishedAt,
      url: `/posts/${post.slug}`,
    },
    twitter: { card: "summary_large_image", title, description: summary ?? title },
  };
}

export default function PostDetail({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((entry) => entry.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="py-16 md:py-24">
      <Container>
        <Link
          href="/posts"
          className="label transition-colors hover:text-accent"
        >
          &#8592; All posts
        </Link>

        <h1 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
          {post.metadata.title}
        </h1>
        <p className="mt-3 font-mono text-xs text-fg-faint">
          {formatDate(post.metadata.publishedAt)}
        </p>

        <div className="prose prose-stone mt-10 max-w-measure dark:prose-invert prose-headings:font-display prose-headings:font-normal prose-a:text-accent">
          <CustomMDX source={post.content} />
        </div>
      </Container>
    </article>
  );
}
