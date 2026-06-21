import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/websites', label: 'Websites' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4 ${
        scrolled ? 'top-2' : 'top-4'
      }`}
    >
      <div
        className={`w-full max-w-6xl transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg border border-slate-200/50'
            : 'bg-white/80 backdrop-blur-xl shadow-sm border border-slate-200/50'
        } rounded-full px-6 py-2`}
      >
        <div className="flex items-center justify-between">
          {/* Logo with Image */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/image.png"
              alt="AUTOFY.AI"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AUTOFY.AI
            </span>
          </Link>

          {/* Desktop Nav - Capsule style */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 rounded-full p-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white shadow-sm text-slate-900'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/919392472134"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm py-2 px-5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200/50 overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `py-2.5 px-4 rounded-full font-medium text-sm transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <a
                href="https://wa.me/919392472134"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm py-2.5 px-4 rounded-full text-center mt-1 hover:shadow-lg transition-all"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}