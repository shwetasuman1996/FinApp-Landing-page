import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'

const STATS = [
  { value: '5',   label: 'Industrial Expert Chartered Accountants' },
  { value: '3',   label: 'Courses Available' },
  { value: '30+', label: 'Finance Professionals' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/40">
      <div className="max-w-5xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeading
            kicker="Who we are"
            heading="About FinApp"
            subtext="FinApp is a professional finance education platform — built and led by qualified Chartered Accountants, designed to equip learners with the real tools used in the industry."
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
                FinApp<br />
                <span className="text-brand-bright">Finance Education Platform</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                FinApp is a structured finance education platform built by practising Chartered Accountants
                based in Bengaluru. We train students and working professionals in the tools that matter most
                on the job — Tally, Excel, and AI.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our courses are designed and delivered by real CA professionals — not just instructors —
                bridging the gap between classroom theory and what employers actually expect on day one.
              </p>

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
                  "We aim to deliver excellence in finance education — combining deep CA expertise
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
