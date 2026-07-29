export default function Services() {
  const items = [
    { title: 'Smart Home Design', desc: 'Tailored system planning to match your lifestyle and budget.' },
    { title: 'Installation & Integration', desc: 'Professional setup with clean wiring and guaranteed performance.' },
    { title: 'Managed Support', desc: 'Ongoing monitoring, updates, and fast on-site service.' }
  ]

  return (
    <section id="services" className="py-12 bg-white">
      <div className="container">
        <h3 className="text-2xl font-semibold text-center mb-8">Our Services</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="p-6 bg-neutral-100 rounded-lg">
              <h4 className="font-medium">{it.title}</h4>
              <p className="mt-2 text-sm text-gray-700">{it.desc}</p>
              <button className="mt-4 inline-block text-primary font-medium">Learn more →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
