import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'

const PLANS = [
  {
    course: 'Tally Prime',
    level: 'Core Program',
    duration: '6 Weeks',
    price: '9,999',
    color: '#0077ff',
    icon: '📊',
    features: [
      '6 modules · 48+ lessons',
      'Video lessons + Gamma slide decks',
      'Downloadable PDFs & Excel files',
      'MCQ quizzes with speed bonuses',
      'Live Gaming Arena contests',
      'Progress tracking dashboard',
      'Student query support',
    ],
  },
  {
    course: 'Excel for Finance',
    level: 'Productivity Program',
    duration: '4 Weeks',
    price: '4,999',
    color: '#14733b',
    icon: '📈',
    features: [
      '4 modules · 32+ lessons',
      'Video lessons + Gamma slide decks',
      'Downloadable PDFs & Excel workbooks',
      'MCQ quizzes with speed bonuses',
      'Live Gaming Arena contests',
      'Progress tracking dashboard',
      'Student query support',
    ],
  },
  {
    course: 'AI for Finance',
    level: 'Advanced Program',
    duration: '4 Weeks',
    price: '14,999',
    color: '#7c3aed',
    icon: '🤖',
    popular: true,
    features: [
      '4 modules · 19+ lessons',
      'Video lessons + Gamma slide decks',
      'Downloadable PDFs & resource files',
      'MCQ quizzes with speed bonuses',
      'Live Gaming Arena contests',
      'Progress tracking dashboard',
      'Student query support',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeading
            kicker="Simple, transparent pricing"
            heading="Course Fees"
            subtext="One-time fee per course. No hidden charges, no subscriptions."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <AnimatedSection key={plan.course} delay={i * 0.1}>
              <div
                className={`relative bg-white rounded-2xl border overflow-hidden flex flex-col h-full ${
                  plan.popular ? 'shadow-xl ring-2' : 'shadow-card'
                }`}
                style={plan.popular ? { ringColor: plan.color, borderColor: plan.color } : {}}
              >
                {plan.popular && (
                  <div
                    className="text-center text-xs font-bold text-white py-1.5 uppercase tracking-wider"
                    style={{ background: plan.color }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1" style={{ borderTop: plan.popular ? 'none' : `4px solid ${plan.color}` }}>
                  <div className="text-3xl mb-3">{plan.icon}</div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: plan.color }}>
                    {plan.level} · {plan.duration}
                  </p>
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-4">{plan.course}</h3>

                  <div className="mb-6">
                    <span className="text-4xl font-extrabold font-display text-brand-navy">₹{plan.price}</span>
                    <span className="text-slate-400 text-sm ml-1">one-time</span>
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <span
                          className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs font-bold"
                          style={{ background: plan.color }}
                        >✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="block text-center py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90"
                    style={
                      plan.popular
                        ? { background: `linear-gradient(120deg, ${plan.color}, #19b5b2)`, color: '#fff' }
                        : { border: `2px solid ${plan.color}`, color: plan.color }
                    }
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="text-center text-slate-400 text-sm mt-8">
            Have questions about fees or batch timings?{' '}
            <a href="#contact" className="text-brand-bright font-medium hover:underline">
              Send us an enquiry →
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
