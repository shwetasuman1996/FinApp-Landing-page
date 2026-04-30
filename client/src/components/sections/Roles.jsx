import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'

const BLENDED_FEATURES = [
  {
    icon: '🏫',
    title: 'Structured Offline Classes',
    description: 'Attend regular sessions with experienced finance trainers. Learn Tally, Excel, and AI concepts hands-on in a real classroom environment.',
  },
  {
    icon: '📱',
    title: 'Reinforce Online — Anytime',
    description: 'After every class, log in to FinApp and revisit the same topics through video lessons, Gamma slide decks, and downloadable resources at your own pace.',
  },
  {
    icon: '✍️',
    title: 'Test Yourself After Every Lesson',
    description: 'MCQ quizzes after each lesson let you check your understanding while the topic is fresh. Speed bonuses keep you sharp and motivated.',
  },
  {
    icon: '💬',
    title: 'Ask Doubts Anytime',
    description: 'Can\'t wait till the next class? Raise a query directly from within any lesson on the platform. Your trainer responds from their inbox — no doubt goes unanswered.',
  },
  {
    icon: '📈',
    title: 'Track Your Progress',
    description: 'Your personal dashboard shows exactly how far you\'ve come — lessons completed, quiz scores, and module progress — all in one place.',
  },
  {
    icon: '🏆',
    title: 'Compete & Stay Motivated',
    description: 'Join live Gaming Arena contests with your batchmates. Real-time leaderboards and speed scoring make learning competitive and fun.',
  },
]

export default function Roles() {
  return (
    <section id="roles" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/40">
      <div className="max-w-5xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeading
            kicker="Our unique approach"
            heading="Offline Classes. Enhanced by Online."
            subtext="FinApp isn't just an app — it's a blended learning experience. Your offline classes are the core. The online platform makes everything you learn stick."
          />
        </AnimatedSection>

        {/* Feature grid */}
        <AnimatedSection delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {BLENDED_FEATURES.map((f, i) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-card border border-slate-100">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ background: '#0077ff12' }}
                >
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-brand-navy text-base mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom banner */}
        <AnimatedSection delay={0.2}>
          <div
            className="rounded-2xl p-8 text-white text-center"
            style={{ background: 'linear-gradient(120deg, #0d2f6e, #1351b8, #19b5b2)' }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-3">Best of both worlds</p>
            <h3 className="font-display text-2xl font-bold mb-3">
              One curriculum. Learned twice as well.
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed max-w-xl mx-auto">
              What you learn in class, you reinforce online. What you miss in class, you catch up online.
              The FinApp platform is always there — before the lesson, after the lesson, or at midnight before an exam.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
