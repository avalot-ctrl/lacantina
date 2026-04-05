import Link from 'next/link'
import Image from 'next/image'
import PapelPicado from '@/components/svg/PapelPicado'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/historia', label: 'Notre Histoire' },
  { href: '/carta', label: 'La Carta' },
  { href: '/eventos', label: 'Événements' },
  { href: '/fiesta', label: 'Privatisation' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-cuir text-tortilla relative overflow-hidden">
      {/* Papel picado à l'entrée du footer */}
      <PapelPicado className="w-full" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-violeta opacity-5 translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-flor opacity-5 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & tagline */}
          <div className="lg:col-span-1">
            <Image src="/logo.png" alt="La Cantina — Brasserie Latina" width={200} height={100} className="brightness-0 invert mb-4" />
            <p className="text-tortilla/70 font-futura text-sm leading-relaxed mt-3">
              Une brasserie vibrante dédiée aux saveurs du Mexique et de l'Amérique du Sud. Partage, convivialité, sabor.
            </p>
            {/* Réseaux sociaux */}
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-flor flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-azul flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-rosa flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-fjalla text-flor tracking-widest uppercase text-sm mb-5 flex items-center gap-2">
              <span className="inline-block w-6 h-0.5 bg-flor" />
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-futura text-sm text-tortilla/70 hover:text-flor transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-flor opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="font-fjalla text-flor tracking-widest uppercase text-sm mb-5 flex items-center gap-2">
              <span className="inline-block w-6 h-0.5 bg-flor" />
              Horaires
            </h3>
            <ul className="space-y-2.5 font-futura text-sm">
              <li className="flex justify-between gap-4">
                <span className="text-tortilla/70">Mardi — Jeudi</span>
                <span className="text-tortilla text-right">12h–14h / 19h–22h30</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-tortilla/70">Vendredi & Sam.</span>
                <span className="text-tortilla text-right">12h–14h / 19h–23h30</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-tortilla/70">Dimanche</span>
                <span className="text-tortilla text-right">12h–15h (Brunch)</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-tortilla/70">Lundi</span>
                <span className="text-rojo font-semibold">Fermé</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-fjalla text-flor tracking-widest uppercase text-sm mb-5 flex items-center gap-2">
              <span className="inline-block w-6 h-0.5 bg-flor" />
              Contact
            </h3>
            <ul className="space-y-3 font-futura text-sm">
              <li>
                <a
                  href="https://maps.google.com/?q=42+Rue+Georges+Clemenceau+85000+La+Roche-sur-Yon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tortilla/70 hover:text-flor transition-colors flex items-start gap-2"
                >
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-flor" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  83 rue François Cévert<br />85000 La Roche-sur-Yon
                </a>
              </li>
              <li>
                <a
                  href="tel:0251000000"
                  className="text-tortilla/70 hover:text-flor transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0 text-flor" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  02 51 XX XX XX
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@lacantina-larochesuryon.fr"
                  className="text-tortilla/70 hover:text-flor transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0 text-flor" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hola@lacantina-larochesuryon.fr
                </a>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-block mt-5 bg-flor hover:bg-flor-dark text-white font-fjalla tracking-widest uppercase text-xs px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Séparateur décoratif */}
        <div className="relative mt-12 mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-cuir px-4 text-flor text-xl">✦</span>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-futura text-xs text-tortilla/50 text-center">
            © {new Date().getFullYear()} La Cantina — Brasserie Latina. Tous droits réservés.
          </p>
          <p className="font-futura text-xs text-tortilla/60 text-center italic">
            Hecho con ❤️ y mucho sabor — La Cantina, La Roche-sur-Yon
          </p>
        </div>
      </div>
    </footer>
  )
}
