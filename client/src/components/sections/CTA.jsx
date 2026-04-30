const FINAPP_URL = import.meta.env.VITE_APP_URL || 'https://finapp-1lpk.onrender.com'

export default function CTA() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d2f6e 0%, #1351b8 50%, #19b5b2 100%)' }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #19b5b2, transparent)' }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #0077ff, transparent)' }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-5 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-4">
          Start your journey today
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
          Ready to build your finance career?
        </h2>
        <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Join FinApp today. Enroll in Tally, Excel or AI for Finance — and build the skills that today's finance jobs demand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`${FINAPP_URL}/signup`}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5 bg-white/20 border border-white/30 hover:bg-white/25"
          >
            Get Started Free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href={`${FINAPP_URL}/`}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-blue-200 text-sm hover:text-white transition-colors"
          >
            Already have an account? Log in →
          </a>
        </div>
      </div>
    </section>
  )
}
