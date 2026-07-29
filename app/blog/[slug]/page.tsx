import { getPostBySlug } from '../../../lib/posts'
import { serialize } from 'next-mdx-remote/serialize'
import MDXRenderer from '../../../components/MDXRenderer'

export default async function PostPage({ params }) {
  const { slug } = params
  const post = await getPostBySlug(slug)
  if (!post) {
    return (<div className="container py-12">Post not found.</div>)
  }

  const mdxSource = await serialize(post.content || '')

  return (
    <section className="py-12 bg-white">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-semibold mb-3">{post.meta.title}</h1>
        {post.meta.date && <div className="text-sm text-gray-500 mb-4">{new Date(post.meta.date).toLocaleDateString()}</div>}
        <MDXRenderer mdxSource={mdxSource} />
      </div>
    </section>
  )
}
