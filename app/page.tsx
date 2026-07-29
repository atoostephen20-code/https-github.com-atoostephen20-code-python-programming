import Hero from '../components/Hero'
import Services from '../components/Services'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-3">Trusted smart home & commercial automation</h2>
            <p className="text-gray-600">We help homeowners and small businesses modernize spaces with reliable smart systems and ongoing support.</p>
          </div>
        </div>
      </section>

      <Services />

      <section className="py-12 bg-neutral-100">
        <div className="container grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Real results, clear ROI</h3>
            <p className="mt-2 text-gray-600">From energy savings to convenience and security, we deliver measurable outcomes for every installation.</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Energy reduction monitoring</li>
              <li>• Integrated security & alerts</li>
              <li>• Subscription-based maintenance plans</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-medium">Get a free 30-min consultation</h4>
            <p className="text-sm text-gray-600">Tell us about your project and we’ll propose a plan and budget.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
