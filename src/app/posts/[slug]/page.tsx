import React from 'react'

import { formatDate, getBlogPosts } from '@/utils/posts';
import { notFound } from 'next/navigation';
import CustomMDX from '@/components/CustomMDX';


async function PageDetail({ params }: { params: { slug: string } }) {
  console.log(params)
  const slug = params.slug;
  let post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
      notFound()
  }

  return (
    <main>
      <h1 className="font-medium text-2xl mt-4 px-2 md:p-0">{post.metadata.title}</h1>
      <div className="px-2 md:p-0">{formatDate(post.metadata.publishedAt)}</div>
      <article className="prose md:prose-lg p-2 md:p-0">
        <CustomMDX source={post.content} />
      </article>
    </main>
  )
}

export default PageDetail
