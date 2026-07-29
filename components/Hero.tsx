import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-white to-neutral-100 py-16">
      <div className="container grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Smart home systems that simplify life and save energy</h1>
          <p className="mt-4 text-gray-700 max-w-xl">SetSmart designs and installs future-proof automation for homes and small businesses — security, comfort, and energy management with local support.</p>
          <div className="mt-6 flex gap-4">
            <Link href="/contact" className="inline-block bg-primary text-white px-5 py-3 rounded-lg shadow-sm">Get a free consult</Link>
            <a href="#services" className="inline-block px-5 py-3 rounded-lg border border-gray-300 text-gray-700">Our services</a>
          </div>
          <div className="mt-6 text-sm text-gray-600">Avg. customer rating: ★★★★☆ · Avg. response time: 24 hrs</div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="h-56 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
            [Placeholder image / demo video]
          </div>
        </div>
      </div>
    </section>
  )
}
