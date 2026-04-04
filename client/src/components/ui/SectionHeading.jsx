export default function SectionHeading({ kicker, heading, subtext, light = false, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {kicker && (
        <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${light ? 'text-teal-300' : 'text-brand-bright'}`}>
          {kicker}
        </p>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
            light ? 'text-blue-100' : 'text-slate-500'
          }`}
        >
          {subtext}
        </p>
      )}
    </div>
  )
}
