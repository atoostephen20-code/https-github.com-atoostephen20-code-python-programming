'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <div>
        <label className="block text-sm">Name</label>
        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm">Message</label>
        <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 w-full border rounded px-3 py-2" rows={4} />
      </div>

      <div>
        <button type="submit" disabled={status === 'loading'} className="bg-primary text-white px-4 py-2 rounded">
          {status === 'loading' ? 'Sending...' : 'Send message'}
        </button>
        {status === 'success' && <span className="ml-3 text-green-600">Thanks — we’ll be in touch.</span>}
        {status === 'error' && <span className="ml-3 text-red-600">Something went wrong. Try again.</span>}
      </div>
    </form>
  )
}
