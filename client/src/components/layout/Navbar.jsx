import { useState, useEffect } from 'react'

const FINAPP_URL = import.meta.env.VITE_APP_URL || 'https://finapp-1lpk.onrender.com'

const navLinks = [
  { label: 'Courses',      href: '#courses'      },
  { label: 'Features',     href: '#features'     },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Roles',        href: '#roles'        },
  { label: 'Contact',      href: '#contact'      },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMobileOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-xl">
          <span className={`${scrolled ? 'text-brand-navy' : 'text-white'}`}>
            <span className="text-brand-bright">Fin</span>
            <span className={scrolled ? 'text-brand-navy' : 'text-white'}>App</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-bright ${
                scrolled ? 'text-slate-600' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`${FINAPP_URL}/`}
            className={`text-sm font-medium transition-colors ${
              scrolled ? 'text-slate-600 hover:text-brand-bright' : 'text-white/80 hover:text-white'
            }`}
          >
            Log In
          </a>
          <a
            href={`${FINAPP_URL}/signup`}
            className="text-sm font-semibold px-4 py-2 rounded-lg text-white"
            style={{ background: 'linear-gradient(120deg,#0077ff,#19b5b2)' }}
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-brand-navy' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-5 py-4 space-y-3 shadow-lg">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block text-sm font-medium text-slate-700 hover:text-brand-bright py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a href={`${FINAPP_URL}/`} className="text-sm font-medium text-slate-600 hover:text-brand-bright">
              Log In
            </a>
            <a
              href={`${FINAPP_URL}/signup`}
              className="text-sm font-semibold px-4 py-2 rounded-lg text-white text-center"
              style={{ background: 'linear-gradient(120deg,#0077ff,#19b5b2)' }}
            >
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
