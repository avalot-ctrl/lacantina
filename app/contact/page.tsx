import type { Metadata } from 'next'
import PapelPicado from '@/components/svg/PapelPicado'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import ContactForm from './ContactForm'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Contact — La Cantina',
  description:
    'Contactez La Cantina — Brasserie Latina à La Roche-sur-Yon. Réservez votre table, venez nous rendre visite ou envoyez-nous un message.',
}

const infoCards = [
  {
    icon: '📍',
    label: 'Adresse',
    content: '83 rue François Cévert\n85000 La Roche-sur-Yon',
    bg: 'bg-white border-2 border-flor',
    text: 'text-cuir',
    labelColor: 'text-flor',
  },
  {
    icon: '📞',
    label: 'Téléphone',
    content: '02 51 XX XX XX',
    bg: 'bg-white border-2 border-verde',
    text: 'text-cuir',
    labelColor: 'text-verde',
  },
  {
    icon: '✉️',
    label: 'Email',
    content: 'hola@lacantina-larochesuryon.fr',
    bg: 'bg-white border-2 border-violeta',
    text: 'text-cuir',
    labelColor: 'text-violeta',
  },
]

const horaires = [
  { day: 'Mardi — Jeudi', hours: '12h–14h / 19h–22h30' },
  { day: 'Vendredi — Samedi', hours: '12h–14h / 19h–23h30' },
  { day: 'Dimanche', hours: '12h–15h  •  Brunch' },
  { day: 'Lundi', hours: 'Fermé' },
]

const socials = [
  {
    icon: FaInstagram,
    platform: 'Instagram',
    handle: '@lacantina.larochesuyon',
    href: 'https://instagram.com/lacantina.larochesuyon',
    bg: 'bg-rosa',
    ring: 'hover:ring-4 hover:ring-rosa/40',
  },
  {
    icon: FaFacebook,
    platform: 'Facebook',
    handle: 'La Cantina — Brasserie Latina',
    href: 'https://facebook.com',
    bg: 'bg-azul',
    ring: 'hover:ring-4 hover:ring-azul/40',
  },
  {
    icon: FaTiktok,
    platform: 'TikTok',
    handle: '@lacantina85',
    href: 'https://tiktok.com/@lacantina85',
    bg: 'bg-violeta',
    ring: 'hover:ring-4 hover:ring-violeta/40',
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[40vh] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #541A24 0%, #844999 100%)',
        }}
      >
        {/* Papel picado at the very top */}
        <div className="absolute top-0 left-0 right-0">
          <PapelPicado />
        </div>

        {/* Background texture dots */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <AnimatedSection
          animation="fade-up"
          className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-12"
        >
          <h1
            className="font-bernier text-6xl md:text-8xl text-white leading-none mb-4 drop-shadow-lg"
            style={{ textShadow: '3px 3px 0 rgba(0,0,0,0.25)' }}
          >
            ¡Hablemos!
          </h1>
          <p className="font-futura text-white/80 text-lg md:text-xl max-w-xl leading-relaxed">
            Venez nous rendre visite ou réservez votre table
          </p>
        </AnimatedSection>
      </section>

      {/* ─── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <section className="bg-tortilla py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">

            {/* ── LEFT: Info cards ── */}
            <AnimatedSection animation="slide-left" delay={100} className="flex flex-col gap-4">
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  className={`${card.bg} rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
                >
                  <p className={`font-fjalla text-xs tracking-widest uppercase mb-1 ${card.labelColor}`}>
                    {card.label}
                  </p>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0 mt-0.5">{card.icon}</span>
                    <p className={`font-futura text-sm leading-relaxed whitespace-pre-line ${card.text}`}>
                      {card.content}
                    </p>
                  </div>
                </div>
              ))}

              {/* Horaires card */}
              <div className="bg-cuir rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <p className="font-fjalla text-xs tracking-widest uppercase mb-3 text-flor">
                  Horaires
                </p>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl shrink-0">🕐</span>
                  <div className="space-y-2 w-full">
                    {horaires.map(({ day, hours }) => (
                      <div key={day} className="flex justify-between items-baseline gap-2">
                        <span className="font-fjalla text-xs text-white/70 uppercase tracking-wide shrink-0">
                          {day}
                        </span>
                        <span
                          className={`font-futura text-xs text-right ${
                            hours === 'Fermé' ? 'text-rojo' : 'text-white'
                          }`}
                        >
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* ── MIDDLE: Google Maps ── */}
            <AnimatedSection animation="fade-up" delay={200} className="flex flex-col">
              <div className="rounded-2xl overflow-hidden shadow-lg h-80 lg:h-full min-h-[320px] ring-2 ring-flor/20">
                <iframe
                  title="La Cantina — Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.0!2d-1.427!3d46.671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s42+Rue+Georges+Clemenceau%2C+85000+La+Roche-sur-Yon%2C+France!5e0!3m2!1sfr!2sfr!4v1699000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '320px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>

            {/* ── RIGHT: Contact form ── */}
            <AnimatedSection animation="slide-right" delay={300} className="flex flex-col">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 ring-1 ring-flor/10 h-full">
                <h3
                  className="font-bernier text-3xl text-cuir mb-1"
                  style={{ textShadow: 'none' }}
                >
                  Envoyez-nous un message
                </h3>
                <p className="font-futura text-cuir/60 text-sm mb-6">
                  Nous vous répondrons dans les plus brefs délais ✦
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ─── RÉSEAUX SOCIAUX ──────────────────────────────────────────────── */}
      <section
        className="py-16 px-4 md:px-8"
        style={{
          background:
            'linear-gradient(135deg, #FF461C 0%, #F23376 35%, #844999 70%, #4280C7 100%)',
        }}
      >
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-10">
            <h2
              className="font-bernier text-4xl md:text-5xl text-white mb-2"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.2)' }}
            >
              Suivez l'aventure !
            </h2>
            <p className="font-futura text-white/75 text-base">
              La Cantina en direct sur vos réseaux préférés
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socials.map(({ icon: Icon, platform, handle, href, bg, ring }, i) => (
              <AnimatedSection key={platform} animation="fade-up" delay={i * 120}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group flex flex-col items-center justify-center gap-4
                    ${bg} ${ring}
                    rounded-2xl p-8 text-white
                    transition-all duration-300
                    hover:-translate-y-2 hover:shadow-2xl
                    cursor-pointer
                  `}
                >
                  <Icon className="text-5xl group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-center">
                    <p className="font-fjalla text-lg tracking-widest uppercase">
                      {platform}
                    </p>
                    <p className="font-futura text-sm text-white/80 mt-1">{handle}</p>
                  </div>
                  <span className="font-fjalla text-xs tracking-widest uppercase border border-white/40 rounded-full px-4 py-1.5 group-hover:bg-white/20 transition-colors duration-200">
                    Nous suivre
                  </span>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
