import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'

export default async function BlogPage() {
  const posts = await getAllPosts()
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-6">Insights & Articles</h2>
        <div className="grid gap-6">
          {posts.length === 0 && <p className="text-gray-600">No posts yet.</p>}
          {posts.map((p) => (
            <article key={p.slug} className="p-4 border rounded">
              <h3 className="text-xl font-medium"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
              {p.date && <div className="text-sm text-gray-500">{new Date(p.date).toLocaleDateString()}</div>}
              {p.excerpt && <p className="mt-2 text-gray-700">{p.excerpt}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
