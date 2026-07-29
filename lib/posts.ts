import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content', 'blog')

export async function getAllPosts() {
  try {
    const files = await fs.readdir(postsDir)
    const posts = []
    for (const file of files) {
      if (!file.endsWith('.mdx') && !file.endsWith('.md')) continue
      const full = path.join(postsDir, file)
      const content = await fs.readFile(full, 'utf8')
      const { data } = matter(content)
      posts.push({
        slug: file.replace(/\.(mdx|md)$/, ''),
        title: data.title || file,
        date: data.date || null,
        excerpt: data.excerpt || null
      })
    }
    // sort by date desc if available
    posts.sort((a, b) => {
      if (!a.date) return 1
      if (!b.date) return -1
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    return posts
  } catch (err) {
    return []
  }
}

export async function getPostBySlug(slug) {
  const full = path.join(postsDir, `${slug}.mdx`)
  try {
    const content = await fs.readFile(full, 'utf8')
    const { data, content: mdxContent } = matter(content)
    return { meta: data, content: mdxContent }
  } catch (err) {
    return null
  }
}
