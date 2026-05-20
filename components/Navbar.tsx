'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Armada', href: '#armada' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Kontak', href: '#kontak' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md py-3'
            : 'bg-white/95 py-4'
        }`}
        style={{ backdropFilter: 'blur(12px)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#beranda" className="flex items-center gap-1 flex-shrink-0">
              <span
                className="text-2xl font-extrabold tracking-tight"
                style={{ color: '#84cc16' }}
              >
                Rental
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-gray-900">
                Mobil
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors relative group"
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ background: '#84cc16' }}
                  />
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+6281246405504"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Phone size={15} />
                <span>0812-4640-5504</span>
              </a>
              <a
                href="#pesan"
                className="btn-brand text-sm"
                style={{
                  background: '#84cc16',
                  color: 'white',
                  fontWeight: 600,
                  padding: '9px 20px',
                  borderRadius: 8,
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                }}
              >
                Pesan Sekarang
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <a href="#beranda" className="flex items-center gap-1">
              <span className="text-xl font-extrabold" style={{ color: '#84cc16' }}>Rental</span>
              <span className="text-xl font-extrabold text-gray-900">Mobil</span>
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col p-5 gap-2 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-4 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="p-5 border-t border-gray-100">
            <a
              href="tel:+6281246405504"
              className="flex items-center gap-2 text-sm text-gray-500 mb-4"
            >
              <Phone size={14} />
              <span>0812-4640-5504</span>
            </a>
            <a
              href="#pesan"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center text-sm font-semibold py-3 rounded-lg text-white"
              style={{ background: '#84cc16' }}
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
