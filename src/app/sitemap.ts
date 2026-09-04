import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/utils/posts";
import { siteUrl } from "@/utils/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts().map((post) => ({
    url: `${siteUrl}/posts/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    ...posts,
  ];
}
