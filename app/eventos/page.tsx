import type { Metadata } from 'next'
import PapelPicado from '@/components/svg/PapelPicado'
import Calavera from '@/components/svg/Calavera'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Événements — La Cantina',
  description:
    'Découvrez tous les événements de La Cantina — Brasserie Latina à La Roche-sur-Yon : soirées, brunch dominical, musique live, quiz et grandes fêtes thématiques.',
}

interface EventCard {
  title: string
  day: string
  icon: string
  description: string
  badge: string
  bg: string
  text: string
  badgeBg: string
  badgeText: string
  buttonVariant: 'white' | 'outline'
}

const recurringEvents: EventCard[] = [
  {
    title: 'Soirée Margarita',
    day: 'Tous les Jeudis',
    icon: '🍹',
    description:
      'Margaritas à prix réduit, musique latine live, ambiance festive garantie. La nuit idéale pour commencer le week-end en avance !',
    badge: 'Récurrent',
    bg: '#19A95B',
    text: 'text-white',
    badgeBg: 'bg-white/20',
    badgeText: 'text-white',
    buttonVariant: 'white',
  },
  {
    title: 'Brunch Dominical',
    day: 'Tous les Dimanches • 12h–15h',
    icon: '🥑',
    description:
      'Formule brunch avec œufs rancheros, pancakes dulce de leche, fruits frais et jus pressés. Le dimanche matin comme en Amérique latine.',
    badge: 'Brunch',
    bg: '#FFAB03',
    text: 'text-cuir',
    badgeBg: 'bg-cuir/20',
    badgeText: 'text-cuir',
    buttonVariant: 'outline',
  },
  {
    title: 'Noche de Música',
    day: '1 vendredi par mois',
    icon: '🎸',
    description:
      'Groupe de musique live : salsa, cumbia, mariachi… La piste de danse vous attend ! Réservation fortement recommandée.',
    badge: 'Live',
    bg: '#844999',
    text: 'text-white',
    badgeBg: 'bg-white/20',
    badgeText: 'text-white',
    buttonVariant: 'white',
  },
  {
    title: 'Quiz Cantina',
    day: '2ème mardi du mois',
    icon: '🧠',
    description:
      'Soirée quiz entre amis, spécial culture latino. Par équipes de 2 à 6 personnes. Lots à gagner pour les meilleurs conocedores !',
    badge: 'Quiz',
    bg: '#4280C7',
    text: 'text-white',
    badgeBg: 'bg-white/20',
    badgeText: 'text-white',
    buttonVariant: 'white',
  },
]

export default function EventosPage() {
  return (
    <main className="min-h-screen">

      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[40vh] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F23376 0%, #844999 100%)',
        }}
      >
        {/* Papel picado at the top */}
        <div className="absolute top-0 left-0 right-0">
          <PapelPicado />
        </div>

        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Decorative circles */}
        <div className="absolute top-12 left-8 w-24 h-24 rounded-full bg-amarillo/20 blur-xl" />
        <div className="absolute bottom-8 right-12 w-32 h-32 rounded-full bg-naranja/20 blur-xl" />

        <AnimatedSection
          animation="fade-up"
          className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-12"
        >
          <h1
            className="font-bernier text-6xl md:text-8xl text-white leading-none mb-4 drop-shadow-lg"
            style={{ textShadow: '3px 3px 0 rgba(0,0,0,0.25)' }}
          >
            Los Eventos
          </h1>
          <p className="font-futura text-white/80 text-lg md:text-xl max-w-xl leading-relaxed">
            ¡La Cantina, c'est la fête toute l'année !
          </p>
        </AnimatedSection>
      </section>

      {/* ─── ÉVÉNEMENTS RÉCURRENTS ─────────────────────────────────────────── */}
      <section className="bg-tortilla py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Chaque semaine"
            title="Rendez-vous Hebdomadaires"
            subtitle="Des moments festifs qui reviennent régulièrement — cochez votre agenda !"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
            {recurringEvents.map((event, i) => (
              <AnimatedSection
                key={event.title}
                animation="fade-up"
                delay={i * 100}
              >
                <article
                  className="group relative rounded-3xl overflow-hidden shadow-lg
                             hover:shadow-2xl hover:-translate-y-2
                             transition-all duration-300 h-full flex flex-col"
                  style={{ backgroundColor: event.bg }}
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`
                        font-fjalla text-xs tracking-widest uppercase
                        px-3 py-1 rounded-full
                        ${event.badgeBg} ${event.badgeText}
                        border border-white/30
                      `}
                    >
                      {event.badge}
                    </span>
                  </div>

                  <div className="flex flex-col gap-4 p-7 flex-1">
                    {/* Icon + Title */}
                    <div className="flex items-start gap-4">
                      <span
                        className="text-5xl shrink-0 group-hover:scale-110 transition-transform duration-300"
                        role="img"
                        aria-label={event.title}
                      >
                        {event.icon}
                      </span>
                      <div>
                        <h3
                          className={`font-bernier text-3xl leading-tight ${event.text}`}
                          style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.15)' }}
                        >
                          {event.title}
                        </h3>
                        <p
                          className={`font-fjalla text-xs tracking-widest uppercase mt-1 ${
                            event.text === 'text-white'
                              ? 'text-white/70'
                              : 'text-cuir/60'
                          }`}
                        >
                          {event.day}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/20 mx-0" />

                    {/* Description */}
                    <p
                      className={`font-futura text-sm leading-relaxed flex-1 ${
                        event.text === 'text-white' ? 'text-white/85' : 'text-cuir/80'
                      }`}
                    >
                      {event.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-2">
                      <Button
                        href="/contact"
                        variant={event.buttonVariant}
                        size="sm"
                        className={
                          event.buttonVariant === 'outline'
                            ? 'border-cuir text-cuir hover:bg-cuir hover:text-white'
                            : ''
                        }
                      >
                        Réserver ✦
                      </Button>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ÉVÉNEMENT SPÉCIAL : DÍA DE LOS MUERTOS ──────────────────────── */}
      <section
        className="relative overflow-hidden py-20 px-4 md:px-8"
        style={{ backgroundColor: '#FF461C' }}
      >
        {/* Large decorative background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-bernier text-[18vw] text-white/5 leading-none whitespace-nowrap"
          >
            MUERTOS
          </span>
        </div>

        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text content */}
            <AnimatedSection animation="slide-left" delay={100}>
              <div className="flex flex-col gap-6">
                {/* Eyebrow */}
                <span className="font-fjalla text-xs tracking-[0.4em] uppercase text-white/60">
                  Événement Annuel ✦ Fin Octobre / Début Novembre
                </span>

                {/* Title */}
                <h2
                  className="font-bernier text-5xl md:text-7xl text-white leading-none"
                  style={{ textShadow: '4px 4px 0 rgba(0,0,0,0.2)' }}
                >
                  Día de los Muertos 🎃
                </h2>

                {/* Description */}
                <p className="font-futura text-white/85 text-base leading-relaxed max-w-lg">
                  Notre grande fête annuelle ! Décoration spectaculaire inspirée du Mexique
                  traditionnel, menu thématique exclusif avec des plats aux saveurs authentiques,
                  maquillage calavera proposé à l'entrée pour tous les courageux, et DJ toute la
                  nuit pour faire vibrer la cantina jusqu'au bout de la noche.
                </p>

                {/* Feature list */}
                <ul className="flex flex-col gap-2">
                  {[
                    '🎨 Décoration thématique spectaculaire',
                    '🌮 Menu exclusif aux saveurs du Mexique',
                    '💀 Maquillage calavera à l\'entrée',
                    '🎧 DJ toute la nuit',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-futura text-sm text-white/90"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amarillo shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex flex-wrap gap-3 mt-2">
                  <Button href="/contact" variant="white" size="lg">
                    Dates à venir ✦
                  </Button>
                  <Button href="/contact" variant="outline" size="lg"
                    className="border-white text-white hover:bg-white hover:text-rojo"
                  >
                    Me prévenir
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Calavera decoration */}
            <AnimatedSection animation="slide-right" delay={200}>
              <div className="flex items-center justify-center">
                <div className="relative">
                  {/* Glow rings */}
                  <div className="absolute inset-0 rounded-full bg-amarillo/20 blur-3xl scale-150" />
                  <div className="absolute inset-0 rounded-full bg-rosa/20 blur-2xl scale-125" />
                  {/* Calavera */}
                  <Calavera
                    size={280}
                    className="relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  {/* Decorative orbiting dots */}
                  {['#FCEA5B', '#F23376', '#7BCCC0', '#FFAB03'].map((color, i) => {
                    const angle = i * 90
                    const rad = (angle * Math.PI) / 180
                    const r = 160
                    const cx = 140 + r * Math.cos(rad)
                    const cy = 140 + r * Math.sin(rad)
                    return (
                      <div
                        key={color}
                        className="absolute w-6 h-6 rounded-full shadow-lg"
                        style={{
                          backgroundColor: color,
                          left: cx - 12,
                          top: cy - 12,
                          animation: `spin ${6 + i}s linear infinite`,
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ─── CTA RÉSERVATION ──────────────────────────────────────────────── */}
      <section className="bg-cuir py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade-up" className="flex flex-col items-center text-center gap-6">
            {/* Decorative icon */}
            <span className="text-5xl">🌮</span>

            <div className="flex flex-col gap-3">
              <span className="font-fjalla text-xs tracking-[0.4em] uppercase text-flor">
                On vous attend !
              </span>
              <h2
                className="font-bernier text-5xl md:text-6xl text-white"
                style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.25)' }}
              >
                Envie de venir ?
              </h2>
              <p className="font-futura text-white/70 text-base md:text-lg max-w-md mx-auto leading-relaxed">
                Réservez votre table en ligne ou contactez-nous directement. On a hâte de vous
                accueillir dans notre cantina !
              </p>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-3 text-flor/40">
              <div className="h-px w-12 bg-flor/40" />
              <span className="text-flor text-lg">✦</span>
              <div className="h-px w-12 bg-flor/40" />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Réserver une table
              </Button>
              <Button href="/contact" variant="outline" size="lg"
                className="border-white/40 text-white hover:bg-white hover:text-cuir"
              >
                Nous contacter
              </Button>
            </div>

            {/* Quick info */}
            <div className="flex flex-wrap justify-center gap-6 mt-2 text-white/50 font-futura text-xs">
              <span>📍 42 Rue Georges Clemenceau, La Roche-sur-Yon</span>
              <span>📞 02 51 XX XX XX</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </main>
  )
}
