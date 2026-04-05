'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/historia', label: 'Notre Histoire' },
  { href: '/carta', label: 'La Carta' },
  { href: '/eventos', label: 'Événements' },
  { href: '/fiesta', label: 'Privatisation' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cuir/95 backdrop-blur-md shadow-festive'
            : 'bg-cuir/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 hover:opacity-90 transition-opacity">
              <div style={{ mixBlendMode: 'screen', display: 'inline-block', lineHeight: 0 }}>
                <Image src="/logo-detoure.png" alt="La Cantina — Brasserie Latina" width={160} height={120} style={{ display: 'block' }} />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-fjalla text-sm tracking-widest uppercase transition-all duration-200 group ${
                    pathname === link.href
                      ? 'text-flor'
                      : 'text-tortilla hover:text-flor'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-flor transition-all duration-300 ${
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="tel:0251000000"
                className="hidden lg:flex items-center gap-2 bg-flor hover:bg-flor-dark text-white font-fjalla text-sm tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 shadow-orange-glow"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Réserver
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2 text-white"
                aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                <span
                  className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'linear-gradient(135deg, #541A24 0%, #844999 60%, #F07E2C 100%)' }}
      >
        {/* Decorative circles */}
        <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-flor opacity-10 translate-x-1/3" />
        <div className="absolute bottom-20 left-0 w-48 h-48 rounded-full bg-amarillo opacity-10 -translate-x-1/3" />

        <div className="flex flex-col items-center justify-center h-full gap-2 pt-16">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-white font-bernier text-4xl tracking-wider py-3 transition-all duration-300 hover:text-flor hover:scale-110 ${
                menuOpen
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="tel:0251000000"
            className={`mt-6 bg-flor text-white font-fjalla tracking-widest uppercase px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-flor ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}
          >
            Réserver une table
          </a>

          <div
            className={`flex gap-4 mt-4 transition-all duration-300 ${
              menuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? '480ms' : '0ms' }}
          >
            {['instagram', 'facebook', 'tiktok'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-cuir transition-all"
                aria-label={social}
              >
                <span className="text-xs font-fjalla uppercase">{social[0].toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
