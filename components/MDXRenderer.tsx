'use client'
import { MDXRemote } from 'next-mdx-remote/react'

export default function MDXRenderer({ mdxSource }) {
  return (
    <div className="prose max-w-none">
      <MDXRemote {...mdxSource} />
    </div>
  )
}
