import { FEATURES } from '../../data/features'
import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'

export default function Features() {
  return (
    <section
      id="features"
      className="py-20"
      style={{ background: 'linear-gradient(135deg, #0d2f6e 0%, #0f3577 60%, #0d2f6e 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeading
            kicker="Everything you need to succeed"
            heading="Platform Features Built for Finance Education"
            subtext="Every feature in FinApp was designed around how finance professionals actually learn and work."
            light
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {FEATURES.map((feat, i) => (
            <AnimatedSection key={feat.title} delay={i * 0.06}>
              <div className="glass-card rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 h-full">
                <div className="text-3xl mb-3">{feat.icon}</div>
                <h3 className="font-display font-bold text-white text-sm mb-2">{feat.title}</h3>
                <p className="text-blue-200 text-xs leading-relaxed">{feat.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
