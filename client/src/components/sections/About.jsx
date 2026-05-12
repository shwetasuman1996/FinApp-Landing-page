import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'

const STATS = [
  { value: '5',   label: 'Partner Chartered Accountants' },
  { value: '3',   label: 'Courses Available' },
  { value: '30+', label: 'Finance Professionals' },
]

const PARTNERS = [
  {
    name: 'S. Thiagarajan',
    designation: 'Partner',
    age: 64,
    qualification: 'B.Com, LLB, FCA, DISA (ICAI)',
    experience: '42 Years',
    specialization: 'Specializes in audit — handles all major audits of the firm including Special Audits for Income-Tax Department, C&AG, and Bank Branch Audits.',
  },
  {
    name: 'Balaji S',
    designation: 'Partner',
    age: 33,
    qualification: 'B.Com, FCA, CMA',
    experience: '12 Years',
    specialization: 'Earlier worked with Larsen & Toubro in Internal Audit. Specializes in Internal Audit with focus on Garment & Infrastructure industries, Statutory Compliance, Special Audit for Income-Tax Department, and other statutory audits.',
  },
  {
    name: 'CA Vighnesh',
    designation: 'Partner',
    age: 30,
    qualification: 'B.Com, LLB, FCA',
    experience: '7 Years',
    specialization: 'Certified Forensic Auditor from ICAI.',
  },
  {
    name: 'CA Pavan',
    designation: 'Partner',
    age: 30,
    qualification: 'B.Com, ACA, ACMA',
    experience: '4 Years',
    specialization: null,
  },
  {
    name: 'CA Mithun',
    designation: 'Partner',
    age: 30,
    qualification: 'B.Com, ACA',
    experience: '4 Years',
    specialization: null,
  },
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

        {/* Partners */}
        <AnimatedSection delay={0.2}>
          <div className="mt-16">
            <h3 className="font-display text-xl font-bold text-brand-navy mb-8 text-center">
              Meet Our <span className="text-brand-bright">Partners</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PARTNERS.map(p => (
                <div
                  key={p.name}
                  className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 flex flex-col gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: '#0077ff15' }}
                  >
                    👤
                  </div>
                  <div>
                    <p className="font-display font-bold text-brand-navy text-base">{p.name}</p>
                    <p className="text-brand-bright text-xs font-semibold uppercase tracking-wide">{p.designation}</p>
                  </div>
                  <div className="text-xs text-slate-500 space-y-1">
                    <p><span className="font-semibold text-slate-600">Age:</span> {p.age} Years</p>
                    <p><span className="font-semibold text-slate-600">Qualification:</span> {p.qualification}</p>
                    <p><span className="font-semibold text-slate-600">Experience:</span> {p.experience}</p>
                  </div>
                  {p.specialization && (
                    <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                      {p.specialization}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
