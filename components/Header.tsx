import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold text-primary">SetSmart Homes & Solutions</Link>
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/#services" className="text-gray-700 hover:text-primary">Services</Link>
          <Link href="/case-studies" className="text-gray-700 hover:text-primary">Case Studies</Link>
          <Link href="/blog" className="text-gray-700 hover:text-primary">Blog</Link>
          <Link href="/contact" className="ml-4 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-600">Get a quote</Link>
        </nav>

        {/* Mobile toggle simplified */}
        <div className="md:hidden">
          <Link href="/contact" className="inline-block bg-primary text-white px-3 py-2 rounded">Contact</Link>
        </div>
      </div>
    </header>
  )
}
