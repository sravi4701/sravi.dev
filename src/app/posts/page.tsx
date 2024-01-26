import { fetchAllPosts } from '@/utils/post';
import Link from 'next/link';
import React from 'react'

async function Post() {
    const posts = await fetchAllPosts();
  return (
    <main>
        <div>All posts:</div>
        {posts.map(post => {
          return <div key={post.title}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </div>
        })}
    </main>
  )
}

export default Post
