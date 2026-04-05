'use client'

import { useEffect, useState } from 'react'
import PapelPicado, { PapelPicadoInverted } from '@/components/svg/PapelPicado'
import MilagroHeart from '@/components/svg/MilagroHeart'
import Cactus from '@/components/svg/Cactus'
import { ChiliRow } from '@/components/svg/Chili'
import Sun, { SunDivider } from '@/components/svg/Sun'
import LogoCantina from '@/components/svg/LogoCantina'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChevronDown,
  FaClock,
} from 'react-icons/fa'

// ─── Specialités data ────────────────────────────────────────────────────────

const specialites = [
  {
    bg: '#FF461C',
    emoji: '🌮',
    name: 'Tacos & Burritos',
    desc: 'Tortillas croustillantes, garnitures généreuses',
    shadow: 'rgba(255,70,28,0.5)',
  },
  {
    bg: '#844999',
    emoji: '🥩',
    name: 'Viandes Grillées',
    desc: 'Picanha, onglet, brochettes flambées',
    shadow: 'rgba(132,73,153,0.5)',
  },
  {
    bg: '#FFAB03',
    emoji: '🧀',
    name: 'Nachos & Partage',
    desc: 'Plateaux XXL pour partager entre amis',
    shadow: 'rgba(255,171,3,0.5)',
  },
  {
    bg: '#4280C7',
    emoji: '🍕',
    name: 'Pizzas Latina',
    desc: 'Nos pizzas aux saveurs tex-mex',
    shadow: 'rgba(66,128,199,0.5)',
  },
  {
    bg: '#19A95B',
    emoji: '🍹',
    name: 'Cocktails & Margaritas',
    desc: 'Margaritas, mojitos, cocktails maison',
    shadow: 'rgba(25,169,91,0.5)',
  },
  {
    bg: '#F23376',
    emoji: '🍮',
    name: 'Desserts & Glaces',
    desc: 'Churros, dulce de leche, maracuja',
    shadow: 'rgba(242,51,118,0.5)',
  },
]

// ─── Horaires data ────────────────────────────────────────────────────────────

const horaires = [
  { jours: 'Mardi – Jeudi', midi: '12h – 14h', soir: '19h – 22h30', fermé: false },
  { jours: 'Vendredi & Sam.', midi: '12h – 14h', soir: '19h – 23h30', fermé: false },
  { jours: 'Dimanche', midi: '12h – 15h', soir: 'Brunch', fermé: false },
  { jours: 'Lundi', midi: '—', soir: 'Fermé', fermé: true },
]

// ─── Decorative dot pattern SVG ─────────────────────────────────────────────

function DotPattern({ opacity = 0.08 }: { opacity?: number }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="white" opacity={opacity} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  )
}

// ─── Floating decorative circles ────────────────────────────────────────────

function FloatingCircles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute rounded-full"
        style={{
          width: 320,
          height: 320,
          top: '10%',
          left: '-8%',
          background: 'radial-gradient(circle, rgba(240,126,44,0.18) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 420,
          height: 420,
          bottom: '5%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(132,73,153,0.2) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 200,
          height: 200,
          top: '40%',
          right: '15%',
          background: 'radial-gradient(circle, rgba(252,234,91,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 150,
          height: 150,
          top: '20%',
          right: '30%',
          background: 'radial-gradient(circle, rgba(25,169,91,0.1) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}

// ─── Page component ──────────────────────────────────────────────────────────

export default function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Trigger hero animation shortly after mount
    const t = setTimeout(() => setHeroVisible(true), 80)
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => {
      clearTimeout(t)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className="overflow-x-hidden">

      {/* ================================================================
          1. HERO SECTION
      ================================================================ */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col"
        style={{
          background: 'linear-gradient(135deg, #541A24 0%, #6b2232 25%, #7a3060 55%, #844999 100%)',
        }}
      >
        {/* Dot pattern overlay */}
        <DotPattern opacity={0.06} />

        {/* Floating gradient blobs */}
        <FloatingCircles />

        {/* Extra decorative SVG arcs */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
          style={{ opacity: 0.07 }}
        >
          <circle cx="80%" cy="20%" r="180" fill="none" stroke="#FCEA5B" strokeWidth="1.5" />
          <circle cx="80%" cy="20%" r="220" fill="none" stroke="#FCEA5B" strokeWidth="0.8" />
          <circle cx="12%" cy="75%" r="140" fill="none" stroke="#F07E2C" strokeWidth="1.5" />
          <circle cx="12%" cy="75%" r="180" fill="none" stroke="#F07E2C" strokeWidth="0.8" />
        </svg>

        {/* Papel Picado banner */}
        <div className="relative z-10 w-full">
          <PapelPicado />
        </div>

        {/* Floating SVG decorations */}
        <div className="absolute left-4 md:left-12 top-28 md:top-36 z-10 opacity-80">
          <Cactus size={90} className="drop-shadow-lg" />
        </div>
        <div className="absolute right-6 md:right-16 top-32 md:top-40 z-10 opacity-75">
          <MilagroHeart size={80} animated className="drop-shadow-lg" />
        </div>
        <div className="absolute left-8 md:left-20 bottom-32 z-10 opacity-70">
          <ChiliRow count={4} className="drop-shadow" />
        </div>
        <div className="absolute right-4 md:right-24 bottom-40 z-10 opacity-70">
          <Sun size={64} color="#FCEA5B" />
        </div>
        <div className="absolute left-[48%] top-24 z-10 opacity-40">
          <MilagroHeart size={40} />
        </div>
        <div className="absolute right-[42%] bottom-28 z-10 opacity-40">
          <Sun size={36} color="#F07E2C" />
        </div>

        {/* Hero center content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pb-20 text-center">
          {/* Logo */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.9s ease, transform 0.9s ease',
            }}
          >
            <LogoCantina variant="white" width={320} className="drop-shadow-2xl" />
          </div>

          {/* Tagline */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
            }}
          >
            <h1
              className="font-bernier mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
              style={{
                color: '#FCEA5B',
                textShadow: '0 4px 24px rgba(0,0,0,0.5), 2px 2px 0 #541A24',
              }}
            >
              ¡Bienvenidos<br className="hidden sm:block" /> a La Cantina!
            </h1>
          </div>

          {/* Subtitle */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.9s ease 0.38s, transform 0.9s ease 0.38s',
            }}
          >
            <p
              className="font-fjalla tracking-widest uppercase text-lg md:text-xl mt-4"
              style={{ color: '#EFDFC6', letterSpacing: '0.25em' }}
            >
              Brasserie Latina — La Roche-sur-Yon
            </p>
          </div>

          {/* ChiliRow separator */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transition: 'opacity 0.9s ease 0.5s',
            }}
          >
            <ChiliRow count={7} className="mt-4 justify-center" />
          </div>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.9s ease 0.6s, transform 0.9s ease 0.6s',
            }}
          >
            <Button href="/carta" variant="primary" size="lg">
              Découvrir la Carta
            </Button>
            <a
              href="/reserver"
              className="inline-flex items-center justify-center gap-2 font-fjalla tracking-widest uppercase rounded-full border-2 border-white text-white px-8 py-4 text-base hover:bg-white hover:text-cuir transition-all duration-200 hover:scale-105"
            >
              Réserver
            </a>
          </div>

          {/* Social icons */}
          <div
            className="flex items-center gap-5 mt-8"
            style={{
              opacity: heroVisible ? 1 : 0,
              transition: 'opacity 0.9s ease 0.75s',
            }}
          >
            {[
              { Icon: FaInstagram, href: '#', label: 'Instagram' },
              { Icon: FaFacebookF, href: '#', label: 'Facebook' },
              { Icon: FaTiktok, href: '#', label: 'TikTok' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/30 text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
          style={{
            opacity: scrolled ? 0 : heroVisible ? 0.7 : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          <span className="font-fjalla text-xs tracking-widest uppercase text-white/60">
            Découvrir
          </span>
          <FaChevronDown
            className="text-white/60 animate-bounce"
            size={14}
          />
        </div>
      </section>

      {/* ================================================================
          2. BIENVENUE SECTION
      ================================================================ */}
      <section
        id="bienvenue"
        className="relative overflow-hidden"
        style={{ background: '#EFDFC6' }}
      >
        {/* Inverted Papel Picado */}
        <PapelPicadoInverted />

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute rounded-full"
            style={{
              width: 500,
              height: 500,
              top: '-10%',
              right: '-8%',
              background: 'radial-gradient(circle, rgba(240,126,44,0.08) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 350,
              height: 350,
              bottom: '-5%',
              left: '-5%',
              background: 'radial-gradient(circle, rgba(132,73,153,0.07) 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left column */}
            <AnimatedSection animation="slide-left">
              <SectionTitle
                eyebrow="¡Descubre!"
                title="Bienvenue à La Cantina"
                align="left"
              />
              <p
                className="font-futura text-base md:text-lg leading-relaxed mt-6"
                style={{ color: '#541A24', opacity: 0.85 }}
              >
                Bienvenue à La Cantina — un lieu vibrant où les saveurs du Mexique et
                d&apos;Amérique du Sud se rencontrent. Guacamole fait minute, bœuf effiloché
                12 heures, tortillas pressées à la main&hellip;
              </p>
              <p
                className="font-futura text-base md:text-lg leading-relaxed mt-4"
                style={{ color: '#541A24', opacity: 0.75 }}
              >
                Ici, chaque plat est une invitation au voyage. Nos recettes s&apos;inspirent
                des marchés de Mexico, des plages de Rio et des saveurs pimentées d&apos;Oaxaca.
                Une cuisine généreuse, authentique, festive.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  { label: 'Fait Maison', color: '#FF461C' },
                  { label: 'Produits Frais', color: '#19A95B' },
                  { label: '100% Saveurs', color: '#4280C7' },
                  { label: 'Ambiance Unique', color: '#844999' },
                ].map(({ label, color }) => (
                  <span
                    key={label}
                    className="font-fjalla text-xs tracking-widest uppercase px-4 py-2 rounded-full text-white"
                    style={{ background: color }}
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Button href="/la-cantina" variant="primary" size="md">
                  Notre Histoire
                </Button>
              </div>
            </AnimatedSection>

            {/* Right column — decorative quote card */}
            <AnimatedSection animation="slide-right" delay={150}>
              <div className="relative">
                {/* Main card */}
                <div
                  className="relative rounded-3xl p-8 md:p-10 overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #541A24 0%, #844999 100%)',
                    boxShadow: '0 24px 80px rgba(84,26,36,0.35)',
                  }}
                >
                  <DotPattern opacity={0.05} />

                  {/* Corner suns */}
                  <div className="absolute top-4 right-4 opacity-30">
                    <Sun size={48} color="#FCEA5B" />
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-20">
                    <Sun size={36} color="#F07E2C" />
                  </div>

                  {/* Quote mark */}
                  <div
                    className="font-bernier text-8xl leading-none mb-2"
                    style={{ color: '#F07E2C', opacity: 0.5 }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>
                  <blockquote
                    className="font-bernier text-2xl md:text-3xl leading-snug"
                    style={{
                      color: '#FCEA5B',
                      textShadow: '1px 1px 0 rgba(0,0,0,0.3)',
                    }}
                  >
                    La cuisine, c&apos;est l&apos;amour, l&apos;amitié et la familia.
                  </blockquote>
                  <p
                    className="font-fjalla tracking-widest uppercase text-sm mt-4"
                    style={{ color: '#EFDFC6', opacity: 0.7 }}
                  >
                    — El Chef de La Cantina
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <ChiliRow count={6} />
                  </div>
                </div>

                {/* Floating heart badge */}
                <div
                  className="absolute -top-6 -left-6 rounded-2xl p-3"
                  style={{
                    background: '#FFAB03',
                    boxShadow: '0 8px 24px rgba(255,171,3,0.4)',
                    transform: 'rotate(-8deg)',
                  }}
                >
                  <MilagroHeart size={52} />
                </div>

                {/* Cactus badge */}
                <div
                  className="absolute -bottom-4 -right-4 rounded-2xl p-2"
                  style={{
                    background: '#19A95B',
                    boxShadow: '0 8px 24px rgba(25,169,91,0.4)',
                    transform: 'rotate(6deg)',
                  }}
                >
                  <Cactus size={52} />
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>

        <SunDivider />
      </section>

      {/* ================================================================
          3. NOS SPÉCIALITÉS SECTION
      ================================================================ */}
      <section id="specialites" className="relative bg-white py-20 md:py-28 overflow-hidden">

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 6,
              background: 'linear-gradient(90deg, #FF461C, #FFAB03, #19A95B, #4280C7, #F23376, #844999)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <SectionTitle
            eyebrow="¡Delicioso!"
            title="Nos Spécialités"
            subtitle="Des saveurs authentiques qui voyagent de Mexico à Buenos Aires"
          />

          {/* Cards grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-14">
            {specialites.map((item, i) => (
              <AnimatedSection
                key={item.name}
                animation="fade-up"
                delay={i * 80}
              >
                <div
                  className="group relative rounded-2xl md:rounded-3xl p-6 md:p-8 overflow-hidden cursor-pointer"
                  style={{
                    background: item.bg,
                    boxShadow: `0 8px 32px ${item.shadow}`,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.transform = 'scale(1.04) translateY(-4px)'
                    el.style.boxShadow = `0 20px 48px ${item.shadow}`
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget
                    el.style.transform = 'scale(1) translateY(0)'
                    el.style.boxShadow = `0 8px 32px ${item.shadow}`
                  }}
                >
                  {/* Dot pattern */}
                  <DotPattern opacity={0.08} />

                  {/* Decorative circle bg */}
                  <div
                    className="absolute -top-4 -right-4 rounded-full"
                    style={{
                      width: 100,
                      height: 100,
                      background: 'rgba(255,255,255,0.1)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Emoji */}
                  <div
                    className="text-4xl md:text-5xl mb-4 leading-none relative z-10"
                    aria-hidden="true"
                  >
                    {item.emoji}
                  </div>

                  {/* Name */}
                  <h3
                    className="font-bernier text-lg md:text-xl leading-tight text-white relative z-10"
                    style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.2)' }}
                  >
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="font-futura text-xs md:text-sm text-white/80 mt-2 leading-relaxed relative z-10">
                    {item.desc}
                  </p>

                  {/* Arrow indicator */}
                  <div
                    className="mt-4 w-8 h-8 rounded-full flex items-center justify-center relative z-10"
                    style={{ background: 'rgba(255,255,255,0.2)' }}
                  >
                    <span className="text-white text-sm font-bold">→</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="flex justify-center mt-12">
              <Button href="/carta" variant="primary" size="lg">
                Voir Toute la Carta →
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          4. AMBIANCE SECTION
      ================================================================ */}
      <section
        id="ambiance"
        className="relative py-24 md:py-36 overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #FF461C 0%, #F07E2C 20%, #FFAB03 38%, #19A95B 55%, #4280C7 72%, #844999 88%, #F23376 100%)',
        }}
      >
        <DotPattern opacity={0.07} />

        {/* Large blurred colour blobs for depth */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              width: 600,
              height: 600,
              top: '-20%',
              left: '-10%',
              background: 'rgba(255,255,255,0.08)',
            }}
          />
          <div
            className="absolute rounded-full blur-3xl"
            style={{
              width: 500,
              height: 500,
              bottom: '-15%',
              right: '-8%',
              background: 'rgba(0,0,0,0.08)',
            }}
          />
        </div>

        {/* Decorative suns */}
        <div className="absolute top-8 left-8 opacity-30">
          <Sun size={80} color="#FCEA5B" />
        </div>
        <div className="absolute top-12 right-12 opacity-25">
          <Sun size={60} color="white" />
        </div>
        <div className="absolute bottom-8 left-1/4 opacity-20">
          <Sun size={50} color="#FCEA5B" />
        </div>
        <div className="absolute bottom-10 right-1/3 opacity-25">
          <Sun size={70} color="white" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <AnimatedSection animation="fade-up">
            <p
              className="font-fjalla tracking-[0.3em] uppercase text-sm text-white/70 mb-4"
            >
              ¡La Experiencia!
            </p>
            <h2
              className="font-bernier text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white"
              style={{ textShadow: '0 4px 32px rgba(0,0,0,0.3), 2px 2px 0 rgba(0,0,0,0.15)' }}
            >
              Un voyage culinaire entre Mexique et Amérique du Sud
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={150}>
            <p
              className="font-bernier text-2xl md:text-3xl mt-6"
              style={{
                color: '#FCEA5B',
                textShadow: '1px 1px 0 rgba(0,0,0,0.2)',
              }}
            >
              ¡Cada bocado es un viaje!
            </p>
          </AnimatedSection>

          {/* Feature pills */}
          <AnimatedSection animation="fade-up" delay={280}>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {[
                { icon: '🎵', text: 'Musique latine live' },
                { icon: '🌮', text: 'Cuisine authentique' },
                { icon: '🎉', text: 'Ambiance festive' },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 px-6 py-3 rounded-full font-fjalla text-sm tracking-widest uppercase text-white"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(8px)',
                    border: '1.5px solid rgba(255,255,255,0.3)',
                  }}
                >
                  <span className="text-xl" aria-hidden="true">{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Chili divider */}
          <AnimatedSection animation="fade-up" delay={380}>
            <div className="flex justify-center mt-10">
              <ChiliRow count={9} />
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection animation="fade-up" delay={460}>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="/reserver"
                className="inline-flex items-center justify-center gap-2 font-fjalla tracking-widest uppercase rounded-full bg-white text-cuir px-8 py-4 text-sm hover:bg-amarillo transition-all duration-200 hover:scale-105 shadow-lg"
                style={{ color: '#541A24' }}
              >
                🎉 Réserver une Table
              </a>
              <a
                href="/carta"
                className="inline-flex items-center justify-center gap-2 font-fjalla tracking-widest uppercase rounded-full border-2 border-white text-white px-8 py-4 text-sm hover:bg-white/10 transition-all duration-200 hover:scale-105"
              >
                🌮 Voir la Carta
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================================================================
          5. HORAIRES & INFOS SECTION
      ================================================================ */}
      <section
        id="horaires"
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: '#541A24' }}
      >
        <DotPattern opacity={0.05} />

        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute rounded-full"
            style={{
              width: 400,
              height: 400,
              top: '-10%',
              right: '-5%',
              background: 'radial-gradient(circle, rgba(240,126,44,0.12) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 350,
              height: 350,
              bottom: '-8%',
              left: '-4%',
              background: 'radial-gradient(circle, rgba(132,73,153,0.1) 0%, transparent 70%)',
            }}
          />
        </div>

        {/* Decorative corner sun */}
        <div className="absolute top-8 right-8 opacity-15" aria-hidden="true">
          <Sun size={100} color="#F07E2C" />
        </div>
        <div className="absolute bottom-8 left-8 opacity-10" aria-hidden="true">
          <Sun size={80} color="#FCEA5B" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <SectionTitle
            eyebrow="¡Venid!"
            title="Horaires & Infos"
            light={true}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-14">

            {/* Left — Horaires */}
            <AnimatedSection animation="slide-left" delay={100}>
              <div
                className="rounded-3xl overflow-hidden"
                style={{ border: '2px solid rgba(240,126,44,0.3)' }}
              >
                {/* Header */}
                <div
                  className="px-6 py-4 flex items-center gap-3"
                  style={{ background: 'rgba(240,126,44,0.15)' }}
                >
                  <FaClock style={{ color: '#F07E2C' }} size={18} />
                  <span
                    className="font-fjalla tracking-widest uppercase text-sm"
                    style={{ color: '#F07E2C' }}
                  >
                    Nos Horaires d&apos;Ouverture
                  </span>
                </div>

                {/* Rows */}
                <div>
                  {horaires.map((h, i) => (
                    <div
                      key={h.jours}
                      className="flex items-center justify-between px-6 py-4"
                      style={{
                        background:
                          h.fermé
                            ? 'rgba(255,255,255,0.02)'
                            : i % 2 === 0
                            ? 'rgba(255,255,255,0.04)'
                            : 'transparent',
                        borderBottom:
                          i < horaires.length - 1
                            ? '1px solid rgba(240,126,44,0.12)'
                            : 'none',
                        opacity: h.fermé ? 0.45 : 1,
                      }}
                    >
                      <span
                        className="font-fjalla text-sm md:text-base"
                        style={{ color: h.fermé ? '#EFDFC6' : '#FCEA5B' }}
                      >
                        {h.jours}
                      </span>
                      <div className="flex flex-col items-end gap-0.5">
                        {h.fermé ? (
                          <span
                            className="font-futura text-sm italic"
                            style={{ color: '#EFDFC6', opacity: 0.6 }}
                          >
                            Fermé
                          </span>
                        ) : (
                          <>
                            <span
                              className="font-futura text-sm"
                              style={{ color: '#EFDFC6' }}
                            >
                              {h.midi}
                            </span>
                            <span
                              className="font-futura text-sm font-semibold"
                              style={{ color: '#F07E2C' }}
                            >
                              {h.soir}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer note */}
                <div
                  className="px-6 py-4 text-center"
                  style={{ background: 'rgba(240,126,44,0.08)' }}
                >
                  <p
                    className="font-futura text-xs italic"
                    style={{ color: '#EFDFC6', opacity: 0.6 }}
                  >
                    Réservation recommandée le week-end
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right — Infos / Contact */}
            <AnimatedSection animation="slide-right" delay={180}>
              <div
                className="rounded-3xl p-6 md:p-8 h-full flex flex-col justify-between"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '2px solid rgba(240,126,44,0.2)',
                }}
              >
                <div>
                  <h3
                    className="font-bernier text-2xl mb-6"
                    style={{ color: '#FCEA5B', textShadow: '1px 1px 0 rgba(0,0,0,0.3)' }}
                  >
                    Nous Trouver
                  </h3>

                  <div className="flex flex-col gap-5">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: '#F07E2C' }}
                      >
                        <FaMapMarkerAlt size={14} className="text-white" />
                      </div>
                      <div>
                        <p
                          className="font-fjalla text-sm tracking-wider uppercase mb-1"
                          style={{ color: '#F07E2C' }}
                        >
                          Adresse
                        </p>
                        <p className="font-futura text-sm leading-relaxed" style={{ color: '#EFDFC6' }}>
                          La Cantina — Brasserie Latina<br />
                          La Roche-sur-Yon, 85000<br />
                          Vendée, France
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: '#19A95B' }}
                      >
                        <FaPhone size={13} className="text-white" />
                      </div>
                      <div>
                        <p
                          className="font-fjalla text-sm tracking-wider uppercase mb-1"
                          style={{ color: '#19A95B' }}
                        >
                          Téléphone
                        </p>
                        <a
                          href="tel:+33251000000"
                          className="font-futura text-sm hover:underline"
                          style={{ color: '#EFDFC6' }}
                        >
                          02 51 00 00 00
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: '#4280C7' }}
                      >
                        <FaEnvelope size={13} className="text-white" />
                      </div>
                      <div>
                        <p
                          className="font-fjalla text-sm tracking-wider uppercase mb-1"
                          style={{ color: '#4280C7' }}
                        >
                          Email
                        </p>
                        <a
                          href="mailto:contact@lacantina.fr"
                          className="font-futura text-sm hover:underline"
                          style={{ color: '#EFDFC6' }}
                        >
                          contact@lacantina.fr
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-fjalla tracking-widest uppercase rounded-full text-xs px-5 py-2.5 transition-all duration-200 hover:scale-105"
                    style={{
                      background: '#F07E2C',
                      color: 'white',
                      boxShadow: '0 4px 16px rgba(240,126,44,0.4)',
                    }}
                  >
                    <FaMapMarkerAlt size={11} />
                    Voir l&apos;Itinéraire
                  </a>
                  <a
                    href="/reserver"
                    className="inline-flex items-center gap-2 font-fjalla tracking-widest uppercase rounded-full border-2 border-white/30 text-white text-xs px-5 py-2.5 hover:bg-white/10 hover:border-white/60 transition-all duration-200 hover:scale-105"
                  >
                    Réserver
                  </a>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>

        {/* Bottom papel picado */}
        <div className="relative z-10 mt-16">
          <PapelPicado />
        </div>
      </section>

    </main>
  )
}
