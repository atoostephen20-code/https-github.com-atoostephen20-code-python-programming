export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100 py-8">
      <div className="container grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">SetSmart Homes & Solutions</h4>
          <p className="mt-2 text-sm text-neutral-300">Designing, installing, and supporting smart home systems that last.</p>
        </div>
        <div>
          <h5 className="font-medium">Company</h5>
          <ul className="mt-2 text-sm text-neutral-300 space-y-1">
            <li>About</li>
            <li>Services</li>
            <li>Case studies</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium">Contact</h5>
          <p className="text-sm text-neutral-300 mt-2">hello@setsmart.example<br/>+1 (555) 555-5555</p>
        </div>
      </div>

      <div className="container mt-6 border-t border-neutral-800 pt-4 text-sm text-neutral-400">
        © {new Date().getFullYear()} SetSmart Homes and Solutions — All rights reserved.
      </div>
    </footer>
  )
}
