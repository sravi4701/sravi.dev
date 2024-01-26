import { fetchPostBySlug } from '@/utils/post';
import React from 'react'

async function PageDetail({ params }: { params: { slug: string } }) {
    console.log(params)
    const slug = params.slug;
    const post = await fetchPostBySlug(slug)
  return (
    <main>
      <div>fetchPostBySlug</div>
      <p dangerouslySetInnerHTML={{__html: post.content}}></p>
    </main>
  )
}

export default PageDetail
