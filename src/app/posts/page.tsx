import { formatDate, getBlogPosts } from "@/utils/posts";
import Link from "next/link";
import React from "react";

async function Post() {
  let posts = getBlogPosts();
  // Sort the posts as required.
  posts = posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <main>
      <section className=" px-2 md:px-0 pt-8">
        <h1 className="font-medium text-2xl md:text-3xl">All Posts</h1>
        <div className="flex flex-col">
        {posts.slice(0, 3).map(post => {
            return <Link key={post.slug} href={`/posts/${post.slug}`} className="py-4 px-2 mt-2 rounded flex flex-col md:flex-row justify-between bg-neutral-50">
              <div className="text-lg">{post.metadata.title}</div>
              <div>{formatDate(post.metadata.publishedAt)}</div>
            </Link>;
        })}
        </div>
      </section>
    </main>
  );
}

export default Post;
