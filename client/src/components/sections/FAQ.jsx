import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'

const FAQS = [
  {
    q: 'Do I need any prior knowledge to join?',
    a: 'No prior knowledge is required for Tally Prime or Excel for Finance — they start from the basics. For AI for Finance, basic computer familiarity is helpful but not mandatory.',
  },
  {
    q: 'Is this online, offline, or both?',
    a: 'FinApp offers the best of both worlds. You attend structured offline classes with an experienced trainer and get full access to the online platform for lessons, quizzes, and resources anytime.',
  },
  {
    q: 'How long does each course take to complete?',
    a: 'Tally Prime is a 6-week program. Excel for Finance and AI for Finance are each 4-week programs. Lessons unlock sequentially so you stay on track week by week.',
  },
  {
    q: 'What is included in the course fee?',
    a: 'The one-time fee covers full access to all lessons, video content, Gamma slide decks, downloadable PDFs and Excel files, MCQ quizzes, Gaming Arena contests, and student query support.',
  },
  {
    q: 'Will I get a certificate after completing the course?',
    a: 'Yes. Students who complete all modules and quizzes receive a course completion certificate from FinApp / PTCA.',
  },
  {
    q: 'How do I enrol?',
    a: 'Click "Get Started Free" to create your account, or fill out the Enquiry form and our team will reach out to you with batch details and enrollment steps.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeading
            kicker="Got questions?"
            heading="Frequently Asked Questions"
            subtext="Everything you need to know before enrolling."
          />
        </AnimatedSection>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className="font-semibold text-brand-navy text-sm leading-snug">{faq.q}</span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold transition-transform duration-200"
                    style={{
                      background: 'linear-gradient(120deg,#0077ff,#19b5b2)',
                      transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
