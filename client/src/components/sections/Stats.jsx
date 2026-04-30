import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 100, suffix: '+', label: 'Lessons',  color: 'text-brand-bright' },
  { value: 3,   suffix: '',  label: 'Courses',   color: 'text-brand-teal'  },
{ value: 48,  suffix: '+', label: 'Modules',   color: 'text-green-700'  },
]

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const duration = 1200
          const step = target / (duration / 16)
          const timer = setInterval(() => {
            start += step
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-3 gap-8">
          {STATS.map(stat => (
            <div key={stat.label} className="text-center">
              <p className={`font-display text-5xl font-extrabold mb-1 ${stat.color}`}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
