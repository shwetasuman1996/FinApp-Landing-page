import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'

const STEPS = [
  {
    number: '01',
    icon: '👤',
    title: 'Sign Up',
    description:
      'Create your account and pick your course — Tally Prime, Excel for Finance, or AI for Finance — and start learning right away.',
  },
  {
    number: '02',
    icon: '🗂️',
    title: 'Explore Your Curriculum',
    description:
      'Browse your course modules. Each module unlocks sequentially — complete the previous lesson before advancing to the next.',
  },
  {
    number: '03',
    icon: '📚',
    title: 'Learn Every Lesson',
    description:
      'Watch YouTube video lessons, view Gamma slide decks, read downloadable PDFs, and study Lottie-animated concept visuals.',
  },
  {
    number: '04',
    icon: '✍️',
    title: 'Take Quizzes & Earn Points',
    description:
      'Complete MCQ quizzes after each lesson. Answer faster for speed bonus points. Your score accumulates across all modules.',
  },
  {
    number: '05',
    icon: '🏆',
    title: 'Compete & Grow',
    description:
      'Join live Gaming Arena contests, climb the leaderboard, raise support queries, and track your full progress dashboard.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeading
            kicker="Simple, structured learning"
            heading="How FinApp Works"
            subtext="From sign-up to certification — five clear steps to professional finance expertise."
          />
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-bright via-brand-teal to-brand-teal opacity-20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {STEPS.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center relative">
                  {/* Step circle */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4 shadow-md relative z-10 bg-white border-2"
                    style={{ borderColor: '#0077ff' }}
                  >
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-brand-bright mb-1">{step.number}</span>
                  <h3 className="font-display font-bold text-brand-navy text-base mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
