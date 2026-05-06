import { useState } from 'react'
import { FRESHERS_COURSES, PROFESSIONALS_COURSES } from '../../data/courses'
import Badge from '../ui/Badge'
import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'

const FINAPP_URL = import.meta.env.VITE_APP_URL || 'https://finapp-1lpk.onrender.com'

const colorMap = {
  '#0077ff': 'blue',
  '#0055cc': 'blue',
  '#14733b': 'green',
  '#7c3aed': 'purple',
  '#e07c24': 'yellow',
  '#dc2626': 'red',
}

function CourseCard({ course, expanded, onToggle }) {
  const isOpen = expanded === course.id
  const variant = colorMap[course.borderColor] || 'blue'

  return (
    <div
      className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full border border-slate-100"
      style={{ borderTop: `4px solid ${course.borderColor}` }}
    >
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-3">
          <Badge label={course.level} variant={variant} />
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
            {course.duration}
          </span>
        </div>

        <h3 className="font-display text-xl font-bold mt-3 mb-1" style={{ color: course.borderColor }}>
          {course.title}
        </h3>
        <p className="text-xs text-slate-400 font-medium mb-3 italic">{course.tagline}</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">{course.description}</p>

        <div className="flex items-center gap-4 text-xs text-slate-500 mb-5">
          <span>📚 {course.modules} Modules</span>
          <span>📖 {course.lessons} Lessons</span>
        </div>

        <ul className="space-y-1.5 mb-4">
          {course.highlights.slice(0, isOpen ? undefined : 4).map(h => (
            <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
              <span style={{ color: course.borderColor }} className="mt-0.5 flex-shrink-0">✓</span>
              {h}
            </li>
          ))}
        </ul>

        {isOpen && (
          <div className="mb-4 p-3 rounded-xl text-xs" style={{ background: course.bgLight }}>
            <p className="font-semibold text-slate-700 mb-2">Course Modules:</p>
            <ol className="space-y-1 list-decimal list-inside text-slate-600">
              {course.moduleList.map(m => <li key={m}>{m}</li>)}
            </ol>
          </div>
        )}

        <button
          onClick={onToggle}
          className="text-xs font-semibold transition-colors"
          style={{ color: course.borderColor }}
        >
          {isOpen ? '↑ Show less' : '↓ Show all modules & highlights'}
        </button>
      </div>

      <div className="px-6 pb-6">
        <a
          href={`${FINAPP_URL}/signup`}
          className="block w-full text-center text-sm font-semibold py-2.5 rounded-xl text-white transition-all hover:opacity-90"
          style={{ background: `linear-gradient(120deg, ${course.borderColor}, #19b5b2)` }}
        >
          Start Learning →
        </a>
      </div>
    </div>
  )
}

export default function Courses() {
  const [expanded, setExpanded] = useState(null)

  const toggle = (id) => setExpanded(expanded === id ? null : id)

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeading
            kicker="Learn the skills employers need"
            heading="Skill-Oriented Finance Programs"
            subtext="Courses designed for freshers starting their career and working professionals looking to upskill — all structured with modules, videos, quizzes, and downloadable resources."
          />
        </AnimatedSection>

        {/* Freshers */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full text-white text-sm font-bold" style={{ background: '#0077ff' }}>
              Freshers
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {FRESHERS_COURSES.map((course, i) => (
            <AnimatedSection key={course.id} delay={i * 0.08}>
              <CourseCard course={course} expanded={expanded} onToggle={() => toggle(course.id)} />
            </AnimatedSection>
          ))}
        </div>

        {/* Working Professionals */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full text-white text-sm font-bold" style={{ background: '#0055cc' }}>
              Working Professionals
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFESSIONALS_COURSES.map((course, i) => (
            <AnimatedSection key={course.id} delay={i * 0.08}>
              <CourseCard course={course} expanded={expanded} onToggle={() => toggle(course.id)} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
