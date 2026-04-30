import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'

const ONLINE_FEATURES = [
  'Access 100+ structured lessons anytime, anywhere',
  'Watch video lessons and Gamma slide decks on demand',
  'Download PDFs, Excel workbooks and PowerPoint files',
  'Complete MCQ quizzes and track your scores instantly',
  'Raise doubts from within any lesson — get answers fast',
  'Compete in live Gaming Arena contests and leaderboards',
  'View your full progress dashboard per module',
]

const OFFLINE_FEATURES = [
  'Attend structured classes led by experienced finance trainers',
  'Follow along with the same content covered in your online modules',
  'Clarify concepts face-to-face before practising online',
  'Group sessions for hands-on Tally and Excel practice',
  'Offline assessments that sync with your online progress',
  'Peer learning and real-world finance scenarios in class',
]

export default function Roles() {
  return (
    <section id="roles" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/40">
      <div className="max-w-5xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeading
            kicker="Best of both worlds"
            heading="Online Learning Meets Offline Classes"
            subtext="FinApp is built for students who want the structure of classroom training and the flexibility of online learning — combined into one powerful experience."
          />
        </AnimatedSection>

        {/* Two-column split */}
        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Online card */}
            <div className="bg-white rounded-2xl shadow-card border overflow-hidden" style={{ borderTop: '4px solid #0077ff' }}>
              <div className="p-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ background: '#0077ff15' }}>
                  💻
                </div>
                <h3 className="font-display text-xl font-bold mb-1" style={{ color: '#0077ff' }}>Online — On Your Schedule</h3>
                <p className="text-slate-400 text-sm italic mb-5">Learn at your own pace, any time</p>
                <ul className="space-y-3">
                  {ONLINE_FEATURES.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: '#0077ff' }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Offline card */}
            <div className="bg-white rounded-2xl shadow-card border overflow-hidden" style={{ borderTop: '4px solid #19b5b2' }}>
              <div className="p-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ background: '#19b5b215' }}>
                  🏫
                </div>
                <h3 className="font-display text-xl font-bold mb-1" style={{ color: '#19b5b2' }}>Offline — Guided & Interactive</h3>
                <p className="text-slate-400 text-sm italic mb-5">Real classrooms, real practice</p>
                <ul className="space-y-3">
                  {OFFLINE_FEATURES.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: '#19b5b2' }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom highlight banner */}
        <AnimatedSection delay={0.2}>
          <div
            className="rounded-2xl p-8 text-white text-center"
            style={{ background: 'linear-gradient(120deg, #0d2f6e, #1351b8, #19b5b2)' }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-3">Our unique approach</p>
            <h3 className="font-display text-2xl font-bold mb-3">
              One curriculum. Two ways to learn.
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed max-w-xl mx-auto">
              Whether you're revising after class or studying independently, FinApp keeps you on track.
              Your offline lessons and online modules are aligned — so nothing is ever out of sync.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
