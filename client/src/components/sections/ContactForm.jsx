import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'

const ROLES = ['Student', 'Teacher / Trainer', 'Institution / Admin', 'Just Exploring']

export default function ContactForm() {
  const [form, setForm]     = useState({ name: '', email: '', role: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errMsg, setErrMsg] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    setErrMsg('')
    try {
      const API = import.meta.env.VITE_API_URL || ''
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', role: '', message: '' })
      } else {
        setStatus('error')
        setErrMsg(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrMsg('Could not connect to the server. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeading
            kicker="Get in touch"
            heading="Request a Demo or Ask a Question"
            subtext="Interested in FinApp for your team or institution? We'd love to hear from you."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {status === 'success' ? (
            <div className="text-center py-16 px-8 bg-green-50 rounded-2xl border border-green-200">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-display font-bold text-green-700 text-xl mb-2">Message sent!</h3>
              <p className="text-green-600 text-sm">
                Thanks for reaching out. We'll get back to you soon.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-5 text-sm font-medium text-green-700 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-card border border-slate-100 p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-bright/30 focus:border-brand-bright transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="rahul@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-bright/30 focus:border-brand-bright transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">I am a… *</label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-bright/30 focus:border-brand-bright transition-all bg-white"
                >
                  <option value="">Select your role</option>
                  {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us what you're looking for — a demo, enrollment info, institution pricing, etc."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-bright/30 focus:border-brand-bright transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-xl border border-red-200">
                  {errMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-60"
                style={{ background: 'linear-gradient(120deg,#0077ff,#19b5b2)' }}
              >
                {status === 'loading' ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
