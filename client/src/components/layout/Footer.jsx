const FINAPP_URL = import.meta.env.VITE_APP_URL || 'https://finapp-1lpk.onrender.com'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-2xl mb-3">
              <span className="text-brand-bright">Fin</span>App
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Structured finance education — online and offline, all in one platform.
            </p>
            <p className="text-blue-300 text-xs">
              Master Tally · Excel · AI for Finance
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">Programs</h4>
            <ul className="space-y-2">
              {['Tally Prime', 'Excel for Finance', 'AI for Finance'].map(c => (
                <li key={c}>
                  <a href="#courses" className="text-blue-100 hover:text-white text-sm transition-colors">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">Platform</h4>
            <ul className="space-y-2">
              {[
                { label: 'Features',           href: '#features'     },
                { label: 'How It Works',       href: '#how-it-works' },
                { label: 'Online & Offline',   href: '#roles'        },
                { label: 'Enquiry',            href: '#contact'      },
              ].map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-blue-100 hover:text-white text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">Get Started</h4>
            <ul className="space-y-2 mb-5">
              <li>
                <a href={`${FINAPP_URL}/signup`} className="text-blue-100 hover:text-white text-sm transition-colors">
                  Create Account
                </a>
              </li>
              <li>
                <a href={`${FINAPP_URL}/`} className="text-blue-100 hover:text-white text-sm transition-colors">
                  Log In
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white text-sm transition-colors">
                  Enquiry
                </a>
              </li>
            </ul>
            <a
              href={`${FINAPP_URL}/signup`}
              className="inline-block text-sm font-semibold px-4 py-2 rounded-lg text-white"
              style={{ background: 'linear-gradient(120deg,#0077ff,#19b5b2)' }}
            >
              Get Started Free →
            </a>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 text-center text-blue-400 text-xs">
          © {new Date().getFullYear()} FinApp. Structured Finance Education — Online & Offline.
        </div>
      </div>
    </footer>
  )
}
