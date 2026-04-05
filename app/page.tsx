'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PapelPicado, { PapelPicadoInverted } from '@/components/svg/PapelPicado'
import Cactus from '@/components/svg/Cactus'
import { ChiliRow } from '@/components/svg/Chili'
import Calavera from '@/components/svg/Calavera'
import { SunDivider } from '@/components/svg/Sun'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { FaInstagram, FaFacebookF, FaTiktok, FaMapMarkerAlt, FaPhone, FaChevronDown } from 'react-icons/fa'

/* ─────────────── DATA ─────────────── */

const specialites = [
  { bg: '#FF461C', emoji: '🌮', name: 'Tacos & Burritos',       desc: 'Tortillas croustillantes, garnitures généreuses, sauces maison', from: '13,90€' },
  { bg: '#844999', emoji: '🥩', name: 'Viandes Grillées',        desc: 'Picanha, onglet chimichurri, brochettes flambées',               from: '16,90€' },
  { bg: '#FFAB03', emoji: '🧀', name: 'Nachos & Partage',        desc: 'Plateaux XXL pour partager entre amigos',                        from: '9,90€'  },
  { bg: '#4280C7', emoji: '🍕', name: 'Pizzas Latina',           desc: 'Chorizo inferno, Guacamolita, Tres Quesos…',                     from: '11,90€' },
  { bg: '#19A95B', emoji: '🍹', name: 'Cocktails & Margaritas',  desc: 'Margaritas, mojitos, sangrias, cocktails maison',                from: '8€'     },
  { bg: '#F23376', emoji: '🍮', name: 'Desserts & Glaces',       desc: 'Churros loaded, dulce de leche, mousse maracuja',               from: '6,90€'  },
]

const horaires = [
  { jours: 'Mardi – Jeudi',    midi: '12h – 14h', soir: '19h – 22h30', fermé: false },
  { jours: 'Vendredi & Sam.',  midi: '12h – 14h', soir: '19h – 23h30', fermé: false },
  { jours: 'Dimanche',         midi: '12h – 15h', soir: 'Brunch 🥑',   fermé: false },
  { jours: 'Lundi',            midi: '—',          soir: 'Fermé',       fermé: true  },
]

const stats = [
  { value: '6',   label: 'Catégories de plats' },
  { value: '50+', label: 'Plats à la carte'    },
  { value: '12h', label: 'Cuisson effiloché'   },
  { value: '100%', label: 'Fait maison'         },
]

/* ─────────────── FLOATING PARTICLE ─────────────── */
function Particle({ style }: { style: React.CSSProperties }) {
  return <div className="absolute rounded-full pointer-events-none" style={style} />
}

/* ─────────────── COUNTER ANIMATION ─────────────── */
function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.5 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className="text-center group">
      <div
        className={`font-bernier text-5xl md:text-6xl text-flor transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
        style={{ textShadow: '0 0 30px rgba(240,126,44,0.5)' }}
      >
        {value}
      </div>
      <div className="font-fjalla tracking-widest uppercase text-xs text-tortilla/70 mt-1">{label}</div>
    </div>
  )
}

/* ─────────────── ORNAMENT SVG ─────────────── */
function Ornament({ color = '#F07E2C', className = '' }: { color?: string; className?: string }) {
  return (
    <svg width="120" height="20" viewBox="0 0 120 20" className={className} aria-hidden="true">
      <line x1="0" y1="10" x2="42" y2="10" stroke={color} strokeWidth="1.5" />
      <polygon points="40,6 48,10 40,14" fill={color} />
      <circle cx="60" cy="10" r="4" fill={color} />
      <polygon points="80,6 72,10 80,14" fill={color} />
      <line x1="78" y1="10" x2="120" y2="10" stroke={color} strokeWidth="1.5" />
    </svg>
  )
}

/* ─────────────── MAIN PAGE ─────────────── */
export default function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100)
    const handleMouse = (e: MouseEvent) => setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    window.addEventListener('mousemove', handleMouse)
    return () => { clearTimeout(t); window.removeEventListener('mousemove', handleMouse) }
  }, [])

  return (
    <main className="overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO — plein écran festif
      ══════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #541A24 0%, #6e1e2f 20%, #7a3060 55%, #5a2470 80%, #3a1550 100%)' }}
      >
        {/* Parallax gradient orbs who follow mouse */}
        <div
          className="absolute rounded-full pointer-events-none transition-transform duration-1000"
          style={{
            width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(240,126,44,0.18) 0%, transparent 70%)',
            top: '10%', left: '-10%',
            transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 20}px)`,
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none transition-transform duration-700"
          style={{
            width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(132,73,153,0.2) 0%, transparent 70%)',
            bottom: '5%', right: '-8%',
            transform: `translate(${-mousePos.x * 25}px, ${-mousePos.y * 15}px)`,
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none transition-transform duration-500"
          style={{
            width: 300, height: 300,
            background: 'radial-gradient(circle, rgba(252,234,91,0.1) 0%, transparent 70%)',
            top: '45%', right: '20%',
            transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 10}px)`,
          }}
        />

        {/* Dot grid overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-5" aria-hidden="true">
          <defs>
            <pattern id="dotgrid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotgrid)" />
        </svg>

        {/* Decorative rings */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" style={{ opacity: 0.06 }}>
          <circle cx="85%" cy="15%" r="200" fill="none" stroke="#FCEA5B" strokeWidth="1" />
          <circle cx="85%" cy="15%" r="260" fill="none" stroke="#FCEA5B" strokeWidth="0.5" />
          <circle cx="10%" cy="80%" r="160" fill="none" stroke="#F07E2C" strokeWidth="1" />
          <circle cx="10%" cy="80%" r="220" fill="none" stroke="#F07E2C" strokeWidth="0.5" />
          <circle cx="50%" cy="50%" r="380" fill="none" stroke="#844999" strokeWidth="0.5" />
        </svg>

        {/* Papel Picado en haut */}
        <div className="absolute top-0 w-full z-10 pt-16">
          <PapelPicado />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute left-6 top-1/3 animate-float" style={{ animationDuration: '4s' }}>
            <Cactus size={90} />
          </div>
          <div className="absolute right-8 top-1/4 animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }}>
            <Calavera size={80} />
          </div>
          <div className="absolute left-1/4 bottom-32 animate-sway hidden md:block" style={{ animationDuration: '3s' }}>
            <ChiliRow count={3} />
          </div>
          <div className="absolute right-1/4 bottom-24 animate-float" style={{ animationDuration: '6s', animationDelay: '0.5s' }}>
            <svg width="50" height="50" viewBox="0 0 50 50" aria-hidden="true">
              {[0,45,90,135,180,225,270,315].map((a,i) => (
                <line key={i} x1={25+14*Math.cos(a*Math.PI/180)} y1={25+14*Math.sin(a*Math.PI/180)}
                  x2={25+22*Math.cos(a*Math.PI/180)} y2={25+22*Math.sin(a*Math.PI/180)}
                  stroke="#FFAB03" strokeWidth={i%2===0?2:1} opacity="0.8"/>
              ))}
              <circle cx="25" cy="25" r="10" fill="#FFAB03" opacity="0.5"/>
            </svg>
          </div>
          {/* Sparkles */}
          {[
            { top:'15%', left:'15%', color:'#FCEA5B', size:8, delay:'0s' },
            { top:'25%', right:'12%', color:'#F07E2C', size:6, delay:'0.7s' },
            { top:'60%', left:'8%',  color:'#F23376', size:5, delay:'1.2s' },
            { top:'70%', right:'15%',color:'#7BCCC0', size:7, delay:'0.3s' },
            { top:'40%', left:'40%', color:'#FFAB03', size:4, delay:'0.9s' },
          ].map((s, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{ top: s.top, left: (s as any).left, right: (s as any).right, animationDelay: s.delay, animationDuration: '2s' }}
            >
              <svg width={s.size*3} height={s.size*3} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
                  fill={s.color} opacity="0.8"/>
              </svg>
            </div>
          ))}
        </div>

        {/* ── CONTENU CENTRAL HERO ── */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">

          {/* VRAI LOGO avec effet détouré */}
          <div
            className={`transition-all duration-1000 ease-out ${heroVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-8'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="relative inline-block">
              {/* Filtre SVG pour supprimer le fond blanc du PNG */}
              <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                  <filter id="remove-white" colorInterpolationFilters="sRGB">
                    <feColorMatrix
                      type="matrix"
                      values="1 0 0 0 0
                              0 1 0 0 0
                              0 0 1 0 0
                             -8 -8 -8 12 0"
                    />
                  </filter>
                </defs>
              </svg>
              {/* Halo animé */}
              <div
                className="absolute inset-0 blur-3xl animate-pulse-glow pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(240,126,44,0.4) 0%, transparent 70%)', transform: 'scale(1.8)' }}
              />
              {/* fond noir → transparent via screen blend, lignes blanches restent visibles */}
              <div style={{ mixBlendMode: 'screen', display: 'inline-block', lineHeight: 0 }}>
                <Image
                  src="/logo-detoure.png"
                  alt="La Cantina — Brasserie Latina"
                  width={500}
                  height={380}
                  priority
                  className="max-w-[320px] md:max-w-[500px] block"
                />
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div
            className={`mt-4 transition-all duration-800 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <Ornament color="rgba(255,171,3,0.8)" className="mx-auto mb-3" />
            <h1 className="font-bernier text-4xl sm:text-5xl md:text-6xl text-amarillo leading-tight"
              style={{ textShadow: '3px 3px 0 rgba(0,0,0,0.4), 0 0 40px rgba(252,234,91,0.3)' }}>
              ¡Bienvenidos!
            </h1>
            <p className="font-fjalla tracking-[0.25em] uppercase text-tortilla/80 text-sm mt-2 md:text-base">
              Brasserie Latina — La Roche-sur-Yon
            </p>
          </div>

          {/* Sous-titre */}
          <div
            className={`mt-3 transition-all duration-800 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <p className="font-futura text-tortilla/70 text-sm max-w-lg mx-auto leading-relaxed">
              Un voyage culinaire entre le Mexique et l'Amérique du Sud.<br />
              Saveurs vibrantes, partage et convivialité.
            </p>
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mt-8 transition-all duration-800 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '700ms' }}
          >
            <Link
              href="/carta"
              className="group relative overflow-hidden bg-flor hover:bg-flor-dark text-white font-fjalla tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-orange-glow text-sm"
            >
              <span className="relative z-10">🌮 Découvrir la Carta</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </Link>
            <a
              href="tel:0251000000"
              className="group border-2 border-tortilla/60 hover:border-flor text-tortilla hover:text-flor font-fjalla tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-sm"
            >
              📞 Réserver une table
            </a>
          </div>

          {/* Réseaux sociaux */}
          <div
            className={`flex gap-3 mt-6 transition-all duration-800 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '900ms' }}
          >
            {[
              { icon: <FaInstagram />, label: 'Instagram', color: '#F23376' },
              { icon: <FaFacebookF />, label: 'Facebook',  color: '#4280C7' },
              { icon: <FaTiktok />,    label: 'TikTok',    color: '#7BCCC0' },
            ].map(s => (
              <a key={s.label} href="#" aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-all duration-200"
                style={{ '--hover-bg': s.color } as any}
                onMouseEnter={e => (e.currentTarget.style.background = s.color)}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <FaChevronDown className="text-tortilla/40 text-xl" />
        </div>

        {/* Papel Picado inversé en bas */}
        <div className="absolute bottom-0 w-full">
          <PapelPicadoInverted />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAND
      ══════════════════════════════════════════ */}
      <section className="bg-cuir py-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg className="w-full h-full"><defs><pattern id="d2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#d2)"/></svg>
        </div>
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => <AnimatedCounter key={s.label} value={s.value} label={s.label} />)}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BIENVENUE
      ══════════════════════════════════════════ */}
      <section className="relative py-24 bg-tortilla overflow-hidden">
        {/* Decorative bg text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-bernier text-[18rem] text-cuir opacity-[0.03] select-none leading-none whitespace-nowrap">CANTINA</span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left">
              <SectionTitle
                eyebrow="¡Bienvenidos!"
                title="Une Brasserie au Cœur Vibrant"
                subtitle="Bienvenue dans un lieu où chaque plat est une histoire, chaque bouchée un voyage. La Cantina, c'est l'âme du Mexique et de l'Amérique du Sud réunie dans votre assiette."
                align="left"
              />
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/historia"
                  className="inline-flex items-center gap-2 bg-cuir hover:bg-cuir-light text-white font-fjalla tracking-widest uppercase px-7 py-3.5 rounded-full transition-all hover:scale-105 text-sm shadow-festive">
                  Notre Histoire ›
                </Link>
                <Link href="/carta"
                  className="inline-flex items-center gap-2 border-2 border-flor text-flor hover:bg-flor hover:text-white font-fjalla tracking-widest uppercase px-7 py-3.5 rounded-full transition-all hover:scale-105 text-sm">
                  La Carta ›
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" className="grid grid-cols-2 gap-4">
              {[
                { bg: '#F07E2C', icon: '🫙', title: 'Guacamole Minute',  text: 'Préparé devant vous, à la commande' },
                { bg: '#844999', icon: '🥩', title: 'Effiloché 12h',     text: 'Bœuf ou porc mijoté lentement' },
                { bg: '#19A95B', icon: '🌮', title: 'Tortillas Maison',  text: 'Pressées à la main chaque matin' },
                { bg: '#F23376', icon: '🍹', title: 'Margaritas',        text: "Préparées à l'instant, chaque soir" },
              ].map((c, i) => (
                <AnimatedSection key={c.title} animation="fade-up" delay={i * 80}
                  className="rounded-2xl p-5 text-white hover-lift cursor-default"
                  style={{ background: c.bg }}
                >
                  <div className="text-3xl mb-2">{c.icon}</div>
                  <div className="font-fjalla text-sm tracking-wide">{c.title}</div>
                  <div className="font-futura text-xs opacity-80 mt-1 leading-snug">{c.text}</div>
                </AnimatedSection>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SPÉCIALITÉS
      ══════════════════════════════════════════ */}
      <section className="relative py-24 bg-white overflow-hidden">
        <PapelPicado className="mb-0" />
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <AnimatedSection animation="fade-up" className="text-center mb-14">
            <SectionTitle eyebrow="Ce qu'on vous prépare" title="Nos Spécialités" align="center" />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialites.map((s, i) => (
              <AnimatedSection key={s.name} animation="fade-up" delay={i * 80}>
                <div
                  className="relative rounded-3xl p-8 text-white overflow-hidden group hover-lift cursor-default"
                  style={{ background: s.bg, boxShadow: `0 8px 32px ${s.bg}55` }}
                >
                  {/* Déco cercle en fond */}
                  <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-black opacity-10 group-hover:scale-125 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 text-4xl opacity-20 font-bernier">{String(i+1).padStart(2,'0')}</div>

                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{s.emoji}</div>
                  <h3 className="font-fjalla text-xl tracking-wide mb-2">{s.name}</h3>
                  <p className="font-futura text-sm opacity-85 leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-fjalla text-xs tracking-widest uppercase opacity-70">À partir de</span>
                    <span className="font-bernier text-2xl">{s.from}</span>
                  </div>
                  <Link href="/carta"
                    className="mt-4 inline-block font-fjalla text-xs tracking-widest uppercase bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-all">
                    Voir la carte →
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <PapelPicadoInverted className="mt-8" />
      </section>

      {/* ══════════════════════════════════════════
          AMBIANCE BAND
      ══════════════════════════════════════════ */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FF461C 0%, #F07E2C 30%, #FFAB03 60%, #FCEA5B 100%)' }}
      >
        {/* Animated diagonal stripes */}
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          {[0,1,2,3,4].map(i => (
            <div key={i} className="absolute h-full" style={{
              width: '3px', background: '#fff',
              left: `${10 + i*20}%`,
              transform: 'skewX(-20deg)',
              animation: `pulse ${1.5 + i*0.3}s ease-in-out infinite`,
              animationDelay: `${i*0.2}s`
            }}/>
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection animation="fade-up">
            <span className="font-fjalla tracking-[0.3em] uppercase text-cuir/70 text-sm">L'expérience Cantina</span>
            <h2 className="font-bernier text-section text-cuir mt-2 leading-tight"
              style={{ textShadow: '3px 3px 0 rgba(255,255,255,0.3)' }}>
              Un Voyage Culinaire<br />Entre Deux Continents
            </h2>
            <Ornament color="rgba(84,26,36,0.4)" className="mx-auto my-5" />
            <p className="font-futura text-cuir/80 text-lg max-w-2xl mx-auto leading-relaxed">
              La rigueur de la cuisine française rencontre l'âme vibrante de l'Amérique latine.
              Des saveurs audacieuses, des recettes transmises de génération en génération,
              et une ambiance qui fait danser vos papilles.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {['#MexicoCity', '#Sabor', '#FaitMaison', '#LaRocheSurYon', '#BrasseriLatina'].map(tag => (
                <span key={tag} className="font-fjalla text-xs tracking-widest bg-cuir/10 text-cuir px-4 py-2 rounded-full border border-cuir/20">
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-6 bottom-4 opacity-30 animate-sway" style={{ animationDuration: '4s' }}>
          <ChiliRow count={4} />
        </div>
        <div className="absolute right-6 top-4 opacity-30 animate-float" style={{ animationDuration: '5s' }}>
          <svg width="60" height="60" viewBox="0 0 60 60" aria-hidden="true">
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i) => (
              <line key={i} x1={30+20*Math.cos(a*Math.PI/180)} y1={30+20*Math.sin(a*Math.PI/180)}
                x2={30+28*Math.cos(a*Math.PI/180)} y2={30+28*Math.sin(a*Math.PI/180)}
                stroke="#541A24" strokeWidth="2" opacity="0.5"/>
            ))}
            <circle cx="30" cy="30" r="14" fill="rgba(84,26,36,0.2)" stroke="#541A24" strokeWidth="1.5"/>
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HORAIRES
      ══════════════════════════════════════════ */}
      <section className="relative py-24 bg-cuir overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg className="w-full h-full"><defs><pattern id="d3" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1.5" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#d3)"/></svg>
        </div>
        {/* Big decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-flor opacity-10" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-violeta opacity-10" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <AnimatedSection animation="fade-up" className="mb-14">
            <SectionTitle eyebrow="On vous attend" title="Horaires & Infos" align="center" light />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Horaires */}
            <AnimatedSection animation="slide-left">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="font-fjalla text-flor tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-flor inline-block" /> Horaires d'ouverture
                </h3>
                <div className="space-y-3">
                  {horaires.map(h => (
                    <div key={h.jours} className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all ${h.fermé ? 'bg-rojo/10' : 'bg-white/5 hover:bg-white/10'}`}>
                      <span className={`font-futura text-sm ${h.fermé ? 'text-rojo' : 'text-tortilla'}`}>{h.jours}</span>
                      {h.fermé
                        ? <span className="font-fjalla text-rojo text-sm tracking-wide">Fermé</span>
                        : <div className="text-right">
                            <div className="font-fjalla text-xs text-flor">{h.midi}</div>
                            <div className="font-fjalla text-xs text-amarillo">{h.soir}</div>
                          </div>
                      }
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Infos contact */}
            <AnimatedSection animation="slide-right" className="flex flex-col gap-4">
              <div className="bg-flor rounded-3xl p-8 text-white relative overflow-hidden group hover-lift">
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-500"/>
                <FaMapMarkerAlt className="text-2xl mb-3" />
                <p className="font-fjalla text-lg tracking-wide">83 rue François Cévert</p>
                <p className="font-futura text-sm opacity-80">85000 La Roche-sur-Yon</p>
                <a href="https://maps.google.com/?q=83+rue+Francois+Cevert+85000+La+Roche-sur-Yon"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-4 font-fjalla text-xs tracking-widest uppercase bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-all">
                  Voir sur Maps →
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-violeta rounded-2xl p-6 text-white relative overflow-hidden group hover-lift">
                  <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-500"/>
                  <FaPhone className="text-xl mb-2" />
                  <a href="tel:0251000000" className="font-fjalla text-sm">02 51 XX XX XX</a>
                </div>
                <Link href="/eventos" className="bg-verde rounded-2xl p-6 text-white relative overflow-hidden group hover-lift">
                  <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-500"/>
                  <span className="text-xl block mb-2">🎉</span>
                  <span className="font-fjalla text-sm">Événements</span>
                </Link>
              </div>
              <Link href="/fiesta"
                className="bg-amarillo rounded-2xl p-6 text-cuir relative overflow-hidden group hover-lift block">
                <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-cuir/10 group-hover:scale-125 transition-transform duration-500"/>
                <span className="text-xl block mb-2">🎊</span>
                <span className="font-fjalla text-sm tracking-wide">Privatisation & Événements privés</span>
                <span className="font-futura text-xs opacity-70 block mt-1">Jusqu'à 80 personnes</span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════ */}
      <section
        className="relative py-24 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #844999 0%, #541A24 100%)' }}
      >
        <PapelPicado className="mb-0" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-8">
          <AnimatedSection animation="fade-up">
            <div className="text-5xl mb-4 animate-float">🌮</div>
            <h2 className="font-bernier text-section text-white" style={{ textShadow: '3px 3px 0 rgba(0,0,0,0.3)' }}>
              ¡La Mesa Te Espera!
            </h2>
            <p className="font-futura text-tortilla/80 mt-4 mb-8 text-lg max-w-xl mx-auto">
              Réservez votre table et laissez-vous emporter par les saveurs de La Cantina.
            </p>
            <SunDivider className="my-6" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0251000000"
                className="bg-flor hover:bg-flor-dark text-white font-fjalla tracking-widest uppercase px-10 py-4 rounded-full transition-all hover:scale-105 shadow-orange-glow text-sm">
                📞 Appeler maintenant
              </a>
              <Link href="/contact"
                className="border-2 border-tortilla/50 text-tortilla hover:bg-tortilla hover:text-cuir font-fjalla tracking-widest uppercase px-10 py-4 rounded-full transition-all hover:scale-105 text-sm">
                ✉️ Nous écrire
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </main>
  )
}
