import { getBlogPosts } from "./posts";

/** Blog posts, newest first. */
export function getSortedPosts() {
  return getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );
}
