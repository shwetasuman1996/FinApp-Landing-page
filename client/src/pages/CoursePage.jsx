import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SUBJECTS } from '../data/courses'

const FINAPP_URL = import.meta.env.VITE_APP_URL || 'https://finapp-1lpk.onrender.com'

const GENERAL_FAQ = [
  {
    q: 'Who is this course for?',
    a: 'This course is designed for students, freshers, and working professionals looking to build practical finance and accounting skills used on the job.',
  },
  {
    q: 'What certificate will I receive?',
    a: 'On successful completion you will receive a FinApp certificate of completion. Tally courses additionally come with a certificate issued by Tally Solutions Pvt. Ltd., Bengaluru.',
  },
  {
    q: 'Can I enrol in individual levels or stages?',
    a: 'Yes. Each level or stage is priced and available separately. You can start at the right level for your background and progress at your own pace.',
  },
  {
    q: 'What are the batch timings?',
    a: 'Batch timings vary. Please send an enquiry or WhatsApp us to know the current schedule and available slots.',
  },
  {
    q: 'Is there a discount for enrolling in multiple levels?',
    a: 'Please reach out to us directly — we may offer a combined package. Send an enquiry below or WhatsApp us.',
  },
  {
    q: 'Is the learning online or offline?',
    a: 'Please send an enquiry or contact us to know the current mode of delivery (online / offline / hybrid) for each course.',
  },
]

function StageCard({ stage, subject, onEnquiry }) {
  return (
    <div
      className={`bg-white rounded-2xl border overflow-hidden flex flex-col h-full ${
        stage.popular ? 'shadow-xl ring-2 ring-offset-2' : 'shadow-card border-slate-100'
      }`}
      style={stage.popular ? { ringColor: subject.borderColor } : { borderTop: `4px solid ${subject.borderColor}` }}
    >
      {stage.popular && (
        <div
          className="text-center text-xs font-bold text-white py-2 uppercase tracking-wider"
          style={{ background: `linear-gradient(120deg, ${subject.borderColor}, #19b5b2)` }}
        >
          ⭐ Most Popular
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        {/* Heading */}
        <div className="mb-4">
          {!stage.label.startsWith('Stage') && (
            <span
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
              style={{ background: subject.bgLight, color: subject.borderColor }}
            >
              {stage.label}
            </span>
          )}
          <h3 className={`font-display text-lg font-bold text-brand-navy ${!stage.label.startsWith('Stage') ? 'mt-3' : ''}`}>
            {stage.name || stage.sublabel}
          </h3>
          {stage.name && (
            <p className="text-slate-500 text-sm mt-0.5">{stage.sublabel}</p>
          )}
        </div>

        {/* Price */}
        <div className="mb-5">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-extrabold font-display text-brand-navy">₹{stage.price}</span>
            <span className="text-slate-400 text-sm">one-time</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">{stage.duration} · {stage.modules} Modules · {stage.lessons} Lessons</p>
        </div>

        {/* Highlights */}
        <ul className="space-y-2.5 mb-6 flex-1">
          {stage.highlights.map(h => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-slate-600">
              <span
                className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ background: subject.borderColor }}
              >✓</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Modules */}
        <div className="mb-6 p-4 rounded-xl text-xs" style={{ background: subject.bgLight }}>
          <p className="font-semibold text-slate-700 mb-2">Course Modules:</p>
          <ol className="space-y-1 list-decimal list-inside text-slate-600">
            {stage.moduleList.map(m => <li key={m}>{m}</li>)}
          </ol>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => onEnquiry(stage.name || stage.sublabel)}
          className="block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
          style={
            stage.popular
              ? { background: `linear-gradient(120deg, ${subject.borderColor}, #19b5b2)`, color: '#fff' }
              : { border: `2px solid ${subject.borderColor}`, color: subject.borderColor }
          }
        >
          Enquiry
        </button>
      </div>
    </div>
  )
}

function EnquiryForm({ preselectedCourse, stages, preselectedLevel }) {
  const [form, setForm] = useState({ name: '', email: '', course: preselectedCourse || '', level: preselectedLevel || '', message: '' })

  // Sync level when user clicks Enquiry on a specific stage card
  useEffect(() => {
    if (preselectedLevel) setForm(f => ({ ...f, level: preselectedLevel }))
  }, [preselectedLevel])
  const [status, setStatus] = useState('idle')
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
        setForm({ name: '', email: '', course: preselectedCourse || '', level: '', message: '' })
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
    <div id="contact" className="mt-14">
      <div className="mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-bright">Enquiry</p>
      </div>

      {status === 'success' ? (
        <div className="text-center py-14 px-8 bg-green-50 rounded-2xl border border-green-200">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="font-display font-bold text-green-700 text-xl mb-2">Enquiry received!</h3>
          <p className="text-green-600 text-sm">Thanks for reaching out. We'll get back to you shortly.</p>
          <button onClick={() => setStatus('idle')} className="mt-5 text-sm font-medium text-green-700 underline">
            Send another enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-card border border-slate-100 p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name *</label>
              <input
                type="text" name="name" value={form.name} onChange={handleChange} required
                placeholder="Rahul Sharma"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-bright/30 focus:border-brand-bright transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address *</label>
              <input
                type="email" name="email" value={form.email} onChange={handleChange} required
                placeholder="rahul@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-bright/30 focus:border-brand-bright transition-all"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">Interested Course</label>
              <input
                type="text" name="course" value={form.course} readOnly
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 bg-slate-50 cursor-default"
              />
            </div>
            {stages && stages.length > 1 && (
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Interested Level *</label>
                <select
                  name="level" value={form.level} onChange={handleChange} required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-bright/30 focus:border-brand-bright transition-all bg-white"
                >
                  <option value="">Select a level</option>
                  {stages.map(s => (
                    <option key={s.label} value={s.name || s.sublabel}>{s.name || s.sublabel}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">Your Message *</label>
            <textarea
              name="message" value={form.message} onChange={handleChange} required rows={5}
              placeholder="Ask us anything — course details, fees, batch timings, or anything else on your mind."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-bright/30 focus:border-brand-bright transition-all resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-xl border border-red-200">{errMsg}</p>
          )}

          <button
            type="submit" disabled={status === 'loading'}
            className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-60"
            style={{ background: 'linear-gradient(120deg,#0077ff,#19b5b2)' }}
          >
            {status === 'loading' ? 'Sending…' : 'Submit Enquiry →'}
          </button>
        </form>
      )}
    </div>
  )
}

function CourseFAQ({ subject }) {
  return (
    <div className="mt-14">
      <h2 className="font-display text-2xl font-bold text-brand-navy mb-2 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-slate-500 text-sm text-center mb-8">Have a question about this course? Find answers below or send us an enquiry.</p>
      <div className="space-y-4">
        {GENERAL_FAQ.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-card border border-slate-100">
            <p className="font-semibold text-brand-navy mb-2">Q: {item.q}</p>
            <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CoursePage() {
  const { id } = useParams()
  const subject = SUBJECTS.find(s => s.id === id)
  const [selectedLevel, setSelectedLevel] = useState('')

  const handleEnquiry = (levelName) => {
    setSelectedLevel(levelName)
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  if (!subject) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-5 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-3">Course not found</h1>
        <p className="text-slate-500 mb-6">The course you're looking for doesn't exist.</p>
        <a href="/#courses" className="text-sm font-semibold text-blue-600 hover:underline">← Back to Courses</a>
      </div>
    )
  }

  const stageGridClass = subject.stages.length === 1
    ? 'max-w-md mx-auto'
    : subject.stages.length === 2
    ? 'grid md:grid-cols-2 gap-6 max-w-4xl mx-auto'
    : 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/" className="font-display font-bold text-xl">
            <span className="text-brand-bright">Fin</span><span className="text-brand-navy">App</span>
          </a>
          <a href="/#courses" className="text-sm font-medium text-slate-600 hover:text-brand-bright transition-colors">
            ← All Courses
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-12">
        {/* Hero */}
        <div
          className="rounded-2xl p-8 mb-10 text-white"
          style={{ background: `linear-gradient(135deg, ${subject.borderColor}, #19b5b2)` }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-4xl">{subject.icon}</span>
            {subject.tallyAuthorized && (
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                ★ Tally Authorized Learning Centre
              </span>
            )}
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{subject.title}</h1>
          <p className="text-white/80 text-base leading-relaxed max-w-2xl">{subject.description}</p>
        </div>

        {/* Tally authorization + certificate section */}
        {subject.tallyAuthorized && (
          <div className="mb-8 grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-yellow-50 border border-yellow-200 flex items-start gap-3">
              <span className="text-2xl mt-0.5">🏅</span>
              <div>
                <p className="font-semibold text-yellow-800 mb-1">Authorized Tally Learning Centre</p>
                <p className="text-sm text-yellow-700 leading-relaxed">
                  FinApp is an authorized partner of <strong>Tally Education Pvt. Ltd.</strong> Courses are conducted on original licensed Tally multi-user software.
                </p>
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 flex items-start gap-3">
              <span className="text-2xl mt-0.5">📜</span>
              <div>
                <p className="font-semibold text-blue-800 mb-1">Industry-Recognized Certificate</p>
                <p className="text-sm text-blue-700 leading-relaxed">
                  Certificate issued by <strong>Tally Solutions Pvt. Ltd., Bengaluru</strong> — recognized by employers across India. Not a generic platform certificate.
                </p>
                <p className="text-xs text-blue-500 mt-2 italic">📷 Certificate image — please add your Tally certificate image here</p>
              </div>
            </div>
          </div>
        )}

        {/* Stage heading */}
        <div className="mb-6 text-center">
          <h2 className="font-display text-2xl font-bold text-brand-navy">
            {subject.stages.length === 1 ? 'Course Details & Fees' : 'Choose Your Level'}
          </h2>
          {subject.stages.length > 1 && (
            <p className="text-slate-500 text-sm mt-1">
              Start at the right level — each covers different depths and is priced separately.
            </p>
          )}
        </div>

        {/* Stage cards */}
        <div className={stageGridClass}>
          {subject.stages.map((stage, i) => (
            <StageCard key={i} stage={stage} subject={subject} onEnquiry={handleEnquiry} />
          ))}
        </div>

        {/* FAQ */}
        <CourseFAQ subject={subject} />

        {/* Enquiry form */}
        <EnquiryForm preselectedCourse={subject.title} stages={subject.stages} preselectedLevel={selectedLevel} />
      </main>
    </div>
  )
}
