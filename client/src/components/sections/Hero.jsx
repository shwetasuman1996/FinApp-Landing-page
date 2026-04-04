const FINAPP_URL = 'http://192.168.0.85:5174'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d2f6e 0%, #1351b8 45%, #19b5b2 100%)' }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #0077ff, transparent)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #19b5b2, transparent)' }}
        />
        {/* Grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-4">
              Professional Finance Education Platform
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Master{' '}
              <span style={{
                background: 'linear-gradient(120deg,#60c4ff,#19b5b2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Tally, Excel
              </span>
              {' '}&amp; AI for Finance
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
              FinApp is a structured Learning Management System built for finance and accounting professionals.
              100+ lessons, live quiz contests, AI-generated content, and full progress tracking — all in one platform.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={`${FINAPP_URL}/signup`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(120deg,#0077ff,#19b5b2)' }}
              >
                Get Started Free
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm border border-white/30 hover:bg-white/10 transition-all"
              >
                Explore Courses
              </a>
            </div>
            <div className="flex items-center gap-6 text-blue-200 text-sm">
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-400">★★★★★</span>
                <span>Structured curriculum</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                <span>3 courses available</span>
              </div>
            </div>
          </div>

          {/* Right: mock UI card */}
          <div className="hidden lg:block">
            <div
              className="relative rounded-2xl p-1 shadow-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))' }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                {/* Mock header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white font-display font-bold text-lg">
                      <span className="text-brand-bright">Fin</span>App
                    </p>
                    <p className="text-blue-200 text-xs">Welcome back, Rahul 👋</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-bright to-brand-teal flex items-center justify-center text-white font-bold text-sm">R</div>
                </div>

                {/* Mock course progress */}
                <div className="space-y-4 mb-6">
                  {[
                    { course: 'Tally Prime',      progress: 72, color: '#0077ff' },
                    { course: 'Excel for Finance', progress: 45, color: '#14733b' },
                  ].map(item => (
                    <div key={item.course}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-blue-100 font-medium">{item.course}</span>
                        <span className="text-white font-bold">{item.progress}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{ width: `${item.progress}%`, background: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mock leaderboard snippet */}
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <p className="text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                    Gaming Arena — Live Now
                  </p>
                  {[
                    { rank: '🥇', name: 'Priya K.', pts: '4,200' },
                    { rank: '🥈', name: 'Rahul S.', pts: '3,950' },
                    { rank: '🥉', name: 'Amit R.', pts: '3,700' },
                  ].map(row => (
                    <div key={row.name} className="flex items-center justify-between py-1 text-sm">
                      <span className="text-white">{row.rank} {row.name}</span>
                      <span className="text-teal-300 font-semibold">{row.pts} pts</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
