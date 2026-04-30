import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'

const STATS = [
  { value: '40+', label: 'Years of Experience' },
  { value: '6',   label: 'Chartered Accountants' },
  { value: '30+', label: 'Finance Professionals' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/40">
      <div className="max-w-5xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeading
            kicker="Who we are"
            heading="Backed by 40 Years of Finance Expertise"
            subtext="FinApp is built by PTCA — Prakash & Thiagarajan Chartered Accountants — a trusted CA firm based in Bengaluru since 1984."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left — about text */}
            <div>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
                style={{ background: '#0077ff15' }}
              >
                🏛️
              </div>
              <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">
                Prakash & Thiagarajan<br />
                <span className="text-brand-bright">Chartered Accountants</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Founded in 1984 by Mr. Prakash Singh and Mr. Thiagarajan S., PTCA has spent four decades
                serving corporate clients across India in auditing, GST compliance, direct taxes, and financial advisory.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                FinApp is our initiative to bridge the gap between classroom finance education and the tools
                professionals actually use on the job — Tally, Excel, and AI. Trained by real CA practitioners,
                not just instructors.
              </p>

              <div className="flex items-start gap-2 text-sm text-slate-500 mb-3">
                <span className="text-brand-bright mt-0.5">📍</span>
                <span>41, 3rd Main, AECS Layout, Sanjaynagar, Bengaluru – 560 094</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-500 mb-3">
                <span className="text-brand-bright mt-0.5">📞</span>
                <a href="tel:+919591341000" className="hover:text-brand-bright transition-colors">
                  +91 95913 41000
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-500">
                <span className="text-brand-bright mt-0.5">✉️</span>
                <a href="mailto:balaji@ptca.in" className="hover:text-brand-bright transition-colors">
                  balaji@ptca.in
                </a>
              </div>
            </div>

            {/* Right — stats */}
            <div className="space-y-5">
              {STATS.map(s => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 flex items-center gap-5"
                >
                  <p className="font-display text-4xl font-extrabold text-brand-bright">{s.value}</p>
                  <p className="text-slate-600 font-medium text-sm leading-tight">{s.label}</p>
                </div>
              ))}

              <div
                className="rounded-2xl p-6 text-white"
                style={{ background: 'linear-gradient(120deg,#0d2f6e,#1351b8)' }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-2">Our mission</p>
                <p className="text-sm leading-relaxed text-blue-100">
                  "We aim to deliver excellence in finance education — combining 40 years of CA expertise
                  with modern digital learning tools."
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
