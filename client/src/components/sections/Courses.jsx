import { SUBJECTS } from '../../data/courses'
import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'

function SubjectCard({ subject, index }) {
  const stageCount = subject.stages.length

  return (
    <AnimatedSection delay={index * 0.08}>
      <div
        className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full border border-slate-100"
        style={{ borderTop: `4px solid ${subject.borderColor}` }}
      >
        <div className="p-6 flex-1">
          <div className="flex items-start justify-between mb-4">
            <span className="text-4xl">{subject.icon}</span>
            {subject.tallyAuthorized && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">
                ★ Tally Authorized
              </span>
            )}
          </div>

          <h3 className="font-display text-xl font-bold mb-2" style={{ color: subject.borderColor }}>
            {subject.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">{subject.tagline}</p>

          <div className="flex items-center gap-3 flex-wrap">
            {subject.stages.map((stage, i) => (
              <span
                key={i}
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: subject.bgLight, color: subject.borderColor }}
              >
                {stage.name || stage.sublabel}
              </span>
            ))}
          </div>
        </div>

        <div className="px-6 pb-6">
          <a
            href={`/courses/${subject.id}`}
            className="block w-full text-center text-sm font-semibold py-2.5 rounded-xl text-white transition-all hover:opacity-90"
            style={{ background: `linear-gradient(120deg, ${subject.borderColor}, #19b5b2)` }}
          >
            Start Exploring →
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeading
            kicker="Learn the skills employers need"
            heading="Skill-Oriented Finance Programs"
            subtext="5 industry-focused courses — each with progressive stages for freshers and working professionals. Click any course to explore levels, modules, and fees."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subject, i) => (
            <SubjectCard key={subject.id} subject={subject} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
