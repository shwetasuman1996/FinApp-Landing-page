import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'

const TESTIMONIALS = [
  {
    quote:
      'The sequential lesson unlocking pushed me to actually complete each topic before moving on. I finished the Tally course in exactly 6 weeks.',
    name: 'Sneha R.',
    role: 'Accounting Graduate',
    initials: 'SR',
    color: '#0077ff',
  },
  {
    quote:
      'The AI for Finance course changed how I work. I now use AI prompts every morning before preparing MIS reports.',
    name: 'Karan M.',
    role: 'Finance Executive',
    initials: 'KM',
    color: '#7c3aed',
  },
  {
    quote:
      'As a teacher, the AI lesson draft feature saves me hours. I write a topic and get a full structured lesson draft in under a minute.',
    name: 'Priya T.',
    role: 'Finance Educator',
    initials: 'PT',
    color: '#14733b',
  },
  {
    quote:
      'The quiz speed bonuses made me study seriously for the first time. I kept trying to beat my own score on every lesson.',
    name: 'Ravi D.',
    role: 'B.Com Student',
    initials: 'RD',
    color: '#19b5b2',
  },
  {
    quote:
      'The approval workflow is exactly what we needed. Lessons go through admin review before publishing — quality is always consistent.',
    name: 'Admin User',
    role: 'Finance Institute',
    initials: 'AU',
    color: '#f59e0b',
  },
  {
    quote:
      'The Gaming Arena is the best part. Live contests with real-time leaderboards made Friday study sessions something to look forward to.',
    name: 'Aditya P.',
    role: 'CA Aspirant',
    initials: 'AP',
    color: '#1351b8',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeading
            kicker="Learners & educators love FinApp"
            heading="What People Are Saying"
            subtext="Real experiences from students, teachers, and administrators using FinApp."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100 flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-0.5 text-yellow-400 text-sm mb-4">{'★★★★★'}</div>
                {/* Quote */}
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">"{t.quote}"</p>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-brand-navy font-semibold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
