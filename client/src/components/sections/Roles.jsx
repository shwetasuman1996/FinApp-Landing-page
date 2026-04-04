import { useState } from 'react'
import { ROLES } from '../../data/roles'
import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'

export default function Roles() {
  const [active, setActive] = useState('student')
  const role = ROLES.find(r => r.id === active)

  return (
    <section id="roles" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/40">
      <div className="max-w-5xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeading
            kicker="One platform, three perspectives"
            heading="Designed for Every Role"
            subtext="FinApp gives Students, Teachers, and Admins exactly the tools they need — no more, no less."
          />
        </AnimatedSection>

        {/* Tab switcher */}
        <AnimatedSection delay={0.1}>
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white rounded-xl p-1.5 shadow-card border border-slate-100 gap-1">
              {ROLES.map(r => (
                <button
                  key={r.id}
                  onClick={() => setActive(r.id)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    active === r.id
                      ? 'text-white shadow-md'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                  style={
                    active === r.id
                      ? { background: `linear-gradient(120deg, ${r.color}, #19b5b2)` }
                      : {}
                  }
                >
                  {r.emoji} {r.title}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Role detail panel */}
        <AnimatedSection key={active} delay={0}>
          <div
            className="bg-white rounded-2xl shadow-card border overflow-hidden"
            style={{ borderTop: `4px solid ${role.color}` }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-slate-100">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: `${role.color}15` }}
                >
                  {role.emoji}
                </div>
                <h3
                  className="font-display text-2xl font-bold mb-1"
                  style={{ color: role.color }}
                >
                  {role.title}
                </h3>
                <p className="text-slate-400 text-sm italic mb-4">{role.tagline}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{role.description}</p>
                <div className="p-4 rounded-xl text-xs" style={{ background: `${role.color}10` }}>
                  <p className="font-semibold text-slate-700 mb-1">Dashboard pages:</p>
                  <p className="text-slate-500 leading-relaxed">{role.dashboardPages}</p>
                </div>
              </div>

              {/* Right — capabilities */}
              <div className="p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">
                  What {role.title}s can do
                </p>
                <ul className="space-y-3">
                  {role.capabilities.map(cap => (
                    <li key={cap} className="flex items-start gap-3 text-sm text-slate-600">
                      <span
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ background: role.color }}
                      >
                        ✓
                      </span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
