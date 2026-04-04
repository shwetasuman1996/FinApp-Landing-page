import SectionHeading from '../ui/SectionHeading'
import AnimatedSection from '../ui/AnimatedSection'

const LEADERBOARD = [
  { rank: 1, medal: '🥇', name: 'Priya K.',  pts: '4,200', bonus: true  },
  { rank: 2, medal: '🥈', name: 'Rahul S.',  pts: '3,950', bonus: false },
  { rank: 3, medal: '🥉', name: 'Amit R.',   pts: '3,700', bonus: false },
  { rank: 4, medal: '',   name: 'Sneha T.',  pts: '3,420', bonus: false },
  { rank: 5, medal: '',   name: 'Karan M.',  pts: '3,150', bonus: false },
]

export default function Gamification() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <AnimatedSection>
          <SectionHeading
            kicker="Learn more by competing"
            heading="Gamification & Live Contests"
            subtext="Finance learning doesn't have to be dry. FinApp's Gaming Arena brings real-time competition to your study schedule."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: feature list */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              {[
                {
                  icon: '🎯',
                  title: 'Live Quiz Contests',
                  desc: 'Teachers schedule quiz events. Students compete simultaneously in a timed window.',
                },
                {
                  icon: '⚡',
                  title: 'Speed Bonuses',
                  desc: 'The faster you answer correctly, the more bonus points you earn on top of your base score.',
                },
                {
                  icon: '📊',
                  title: 'Real-Time Leaderboards',
                  desc: 'Your rank updates live after each contest ends. See exactly where you stand.',
                },
                {
                  icon: '🏅',
                  title: 'Winner Announcements',
                  desc: 'Top performers are highlighted in the contest results for recognition and motivation.',
                },
              ].map(item => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-brand-navy text-base mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: mock leaderboard */}
          <AnimatedSection delay={0.2}>
            <div className="bg-brand-navy rounded-2xl p-6 shadow-card-hover">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-white font-display font-bold">Gaming Arena</p>
                  <p className="text-blue-300 text-xs">Tally Quiz Contest #3</p>
                </div>
                <span className="flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                  LIVE NOW
                </span>
              </div>

              <div className="space-y-2">
                {LEADERBOARD.map(row => (
                  <div
                    key={row.rank}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm ${
                      row.rank === 1 ? 'bg-yellow-500/15 border border-yellow-500/20' :
                      row.rank === 2 ? 'bg-slate-500/10' :
                      row.rank === 3 ? 'bg-orange-500/10' : 'bg-white/5'
                    }`}
                  >
                    <span className="text-white font-medium">
                      {row.medal || `${row.rank}.`} {row.name}
                    </span>
                    <div className="flex items-center gap-2">
                      {row.bonus && (
                        <span className="text-xs bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded-full border border-yellow-400/20">
                          ⚡ Speed
                        </span>
                      )}
                      <span className="text-teal-300 font-bold">{row.pts} pts</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 text-center text-blue-300 text-xs">
                Contest closes in 12:34 — Join now to earn points!
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
