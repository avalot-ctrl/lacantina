'use client' // ContactFiestaForm needs useState — whole file stays client

// If you later want a server boundary, split ContactFiestaForm into its own file
// and remove this directive from page.tsx.

import { useState } from 'react'
import PapelPicado, { PapelPicadoInverted } from '@/components/svg/PapelPicado'
import MilagroHeart from '@/components/svg/MilagroHeart'
import { SunDivider } from '@/components/svg/Sun'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

// ─── Metadata (only works in server components; kept here as reference) ────────
// export const metadata = {
//   title: 'Privatisation — Tu Fiesta',
//   description: 'Organisez votre événement privé à La Cantina...',
// }

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  prenom: string
  nom: string
  email: string
  telephone: string
  date: string
  personnes: string
  type: string
  message: string
}

// ─── ContactFiestaForm ────────────────────────────────────────────────────────
function ContactFiestaForm() {
  const [form, setForm] = useState<FormData>({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    date: '',
    personnes: '',
    type: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-white/10 border border-white/25 text-white placeholder-white/50 rounded-xl px-4 py-3 font-futura text-sm focus:outline-none focus:border-flor focus:bg-white/15 transition-all duration-200'
  const labelClass = 'block font-fjalla tracking-widest uppercase text-xs text-flor mb-1.5'

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-16 text-center">
        <MilagroHeart size={100} animated />
        <p className="font-bernier text-4xl md:text-5xl text-amarillo leading-tight">
          ¡Perfecto!
        </p>
        <p className="font-futura text-white/90 text-lg max-w-md leading-relaxed">
          On vous contacte rapidement pour organiser votre fiesta. ¡Hasta pronto!
        </p>
        <div className="flex gap-2 mt-2">
          {['#F07E2C', '#844999', '#19A95B', '#F23376', '#FFAB03', '#4280C7'].map((c) => (
            <span
              key={c}
              className="inline-block w-3 h-3 rounded-full animate-bounce"
              style={{ backgroundColor: c, animationDelay: `${Math.random() * 0.5}s` }}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
      {/* Row 1 — Prénom & Nom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="prenom" className={labelClass}>Prénom</label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            required
            value={form.prenom}
            onChange={handleChange}
            placeholder="Carmen"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="nom" className={labelClass}>Nom</label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            value={form.nom}
            onChange={handleChange}
            placeholder="Morales"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2 — Email & Téléphone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="carmen@email.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="telephone" className={labelClass}>Téléphone</label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            value={form.telephone}
            onChange={handleChange}
            placeholder="06 12 34 56 78"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 3 — Date & Nombre de personnes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className={labelClass}>Date souhaitée</label>
          <input
            id="date"
            name="date"
            type="date"
            required
            value={form.date}
            onChange={handleChange}
            className={`${inputClass} [color-scheme:dark]`}
          />
        </div>
        <div>
          <label htmlFor="personnes" className={labelClass}>Nombre de personnes</label>
          <input
            id="personnes"
            name="personnes"
            type="number"
            min={5}
            max={80}
            required
            value={form.personnes}
            onChange={handleChange}
            placeholder="30"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 4 — Type d'événement */}
      <div>
        <label htmlFor="type" className={labelClass}>Type d&apos;événement</label>
        <select
          id="type"
          name="type"
          required
          value={form.type}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" disabled>Choisissez un type…</option>
          <option value="anniversaire">🎂 Anniversaire</option>
          <option value="evg-evjf">💍 EVG / EVJF</option>
          <option value="afterwork">🥂 Afterwork</option>
          <option value="seminaire">🏢 Séminaire</option>
          <option value="noel">🎄 Fête de fin d&apos;année</option>
          <option value="autre">✨ Autre</option>
        </select>
      </div>

      {/* Row 5 — Message */}
      <div>
        <label htmlFor="message" className={labelClass}>Votre message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Parlez-nous de votre événement : thème, traiteur, musique, décoration…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          disabled={loading}
          className="
            inline-flex items-center justify-center gap-3
            bg-flor hover:bg-naranja
            text-white font-bernier tracking-widest
            text-2xl px-12 py-4 rounded-full
            shadow-[0_0_30px_rgba(240,126,44,0.5)]
            hover:shadow-[0_0_45px_rgba(255,171,3,0.7)]
            transition-all duration-300
            hover:scale-105 active:scale-100
            disabled:opacity-60 disabled:cursor-wait disabled:scale-100
          "
        >
          {loading ? (
            <>
              <span className="inline-block w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              Un momento…
            </>
          ) : (
            <>
              ¡Fiesta!
              <MilagroHeart size={32} />
            </>
          )}
        </button>
      </div>
    </form>
  )
}

// ─── Gallery placeholder card colors ──────────────────────────────────────────
const galleryCards = [
  { bg: '#F07E2C', label: 'Anniversaire', accent: '#FCEA5B' },
  { bg: '#844999', label: 'EVG / EVJF', accent: '#F23376' },
  { bg: '#19A95B', label: 'Séminaire', accent: '#7BCCC0' },
  { bg: '#4280C7', label: 'Afterwork', accent: '#FFAB03' },
  { bg: '#FF461C', label: 'Noël', accent: '#FCEA5B' },
  { bg: '#F23376', label: 'Mariage', accent: '#FFAB03' },
]

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function FiestaPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section
        className="relative w-full min-h-[45vh] flex flex-col overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #FCEA5B 0%, #FFAB03 35%, #F07E2C 65%, #FF461C 100%)',
        }}
      >
        {/* Papel Picado — top border */}
        <PapelPicado className="flex-shrink-0" />

        {/* Background texture dots */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(84,26,36,0.08) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
          {/* Decorative hearts row */}
          <div className="flex items-center gap-4 mb-4" aria-hidden="true">
            <MilagroHeart size={48} animated />
            <span className="font-fjalla tracking-[0.4em] uppercase text-cuir/70 text-sm">
              La Cantina — Privatisation
            </span>
            <MilagroHeart size={48} animated />
          </div>

          {/* Main title */}
          <AnimatedSection animation="fade-up" delay={100}>
            <h1
              className="font-bernier text-cuir leading-none mb-4 drop-shadow-sm"
              style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', textShadow: '3px 3px 0 rgba(84,26,36,0.15)' }}
            >
              ¡Tu Fiesta!
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection animation="fade-up" delay={220}>
            <p className="font-fjalla tracking-wide text-cuir/80 text-lg md:text-2xl max-w-xl leading-snug mb-8">
              La Cantina ouvre ses portes pour vos événements privés
            </p>
          </AnimatedSection>

          {/* Stats pills */}
          <AnimatedSection animation="fade-up" delay={340}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="bg-cuir text-white font-bernier text-2xl px-8 py-3 rounded-full shadow-lg">
                Jusqu&apos;à{' '}
                <span className="text-amarillo">80 pers.</span>
              </div>
              <div className="bg-white/30 backdrop-blur-sm border-2 border-cuir/20 text-cuir font-bernier text-xl px-8 py-3 rounded-full shadow-lg">
                Semi-priv.{' '}
                <span
                  className="font-bernier"
                  style={{ color: '#844999' }}
                >
                  30 pers.
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Scroll nudge */}
          <AnimatedSection animation="fade-in" delay={600}>
            <div className="mt-10 flex flex-col items-center gap-1 text-cuir/50 text-xs font-fjalla tracking-widest uppercase">
              <span>Découvrir</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 7L10 13L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom wave into tortilla */}
        <div className="flex-shrink-0 h-10 relative overflow-hidden">
          <svg
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full"
          >
            <path d="M0,0 C300,40 900,0 1200,30 L1200,40 L0,40 Z" fill="#EFDFC6" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          INTRO
      ══════════════════════════════════════════════ */}
      <section className="bg-tortilla py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — Text */}
          <div>
            <SectionTitle
              eyebrow="Votre événement"
              title="L'espace idéal pour fêter ensemble"
              align="left"
            />
            <AnimatedSection animation="fade-up" delay={150} className="mt-6 space-y-4 font-futura text-cuir/80 text-base leading-relaxed">
              <p>
                Vous cherchez un lieu chaleureux, festif et unique pour célébrer un moment
                important ? La Cantina met à votre disposition son espace de restauration pour
                des événements privés sur mesure, dans une ambiance latina inoubliable.
              </p>
              <p>
                Que ce soit pour un anniversaire mémorable, un EVG survitaminé ou un séminaire
                d&apos;entreprise avec un peu plus de piment, notre équipe s&apos;occupe de tout pour que
                votre soirée soit parfaite.
              </p>
              <p>
                Nos chefs cuisinent des formules pensées pour les grandes tablées : partage,
                convivialité, saveurs du Mexique et d&apos;Amérique du Sud. Cada fiesta es única.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300} className="mt-8">
              <Button href="#formulaire" variant="primary" size="lg">
                Demander un devis
              </Button>
            </AnimatedSection>
          </div>

          {/* Right — Feature list */}
          <AnimatedSection animation="slide-right" delay={100} className="space-y-4">
            {[
              { icon: '🎂', label: 'Anniversaires & fêtes', desc: 'Pour souffler vos bougies avec style et sabor' },
              { icon: '💍', label: 'EVG / EVJF', desc: 'La dernière grande fiesta avant le grand saut' },
              { icon: '🏢', label: 'Séminaires d\'entreprise', desc: 'Teambuilding et réunions avec une touche latina' },
              { icon: '🥂', label: 'Afterworks & cocktails', desc: 'Fins de journée mémorables en musique' },
              { icon: '🎄', label: 'Fêtes de fin d\'année', desc: 'Noël et réveillons façon Cantina — calottes & margaritas' },
            ].map((item, i) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-sm border border-white/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="text-3xl flex-shrink-0 leading-none mt-0.5">{item.icon}</span>
                <div>
                  <p className="font-fjalla tracking-wide text-cuir text-base">{item.label}</p>
                  <p className="font-futura text-cuir/60 text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <SunDivider />

      {/* ══════════════════════════════════════════════
          CAPACITÉS
      ══════════════════════════════════════════════ */}
      <section className="bg-cuir py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Espaces disponibles"
            title="Nos Capacités"
            subtitle="Deux formules d'occupation pour s'adapter à tous vos projets"
            light
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 — Privatisation Complète */}
            <AnimatedSection animation="slide-left" delay={100}>
              <div
                className="rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl h-full flex flex-col"
                style={{ backgroundColor: '#F07E2C' }}
              >
                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
                    backgroundSize: '12px 12px',
                  }}
                />
                <div className="relative z-10 flex flex-col gap-5 h-full">
                  <div className="text-5xl" aria-hidden="true">🏠</div>
                  <div>
                    <p className="font-fjalla tracking-widest uppercase text-white/70 text-sm">Privatisation</p>
                    <h3 className="font-bernier text-4xl md:text-5xl leading-none mt-1">Complète</h3>
                  </div>
                  <div className="mt-auto">
                    <p
                      className="font-bernier leading-none"
                      style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', textShadow: '2px 2px 0 rgba(0,0,0,0.15)' }}
                    >
                      80
                      <span className="text-2xl ml-1 font-fjalla">pers.</span>
                    </p>
                    <p className="font-futura text-white/80 text-sm mt-2 leading-relaxed">
                      L&apos;intégralité de la salle vous est réservée — musique, décoration et service
                      dédiés pour votre événement.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 2 — Espace Séparé */}
            <AnimatedSection animation="slide-right" delay={200}>
              <div
                className="rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl h-full flex flex-col"
                style={{ backgroundColor: '#844999' }}
              >
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, #fff 1px, transparent 1px)',
                    backgroundSize: '14px 14px',
                  }}
                />
                <div className="relative z-10 flex flex-col gap-5 h-full">
                  <div className="text-5xl" aria-hidden="true">🪄</div>
                  <div>
                    <p className="font-fjalla tracking-widest uppercase text-white/70 text-sm">Espace Séparé</p>
                    <h3 className="font-bernier text-4xl md:text-5xl leading-none mt-1">Semi-priv.</h3>
                  </div>
                  <div className="mt-auto">
                    <p
                      className="font-bernier leading-none"
                      style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', textShadow: '2px 2px 0 rgba(0,0,0,0.15)' }}
                    >
                      30
                      <span className="text-2xl ml-1 font-fjalla">pers.</span>
                    </p>
                    <p className="font-futura text-white/80 text-sm mt-2 leading-relaxed">
                      Un espace délimité et privatisé au sein du restaurant, idéal pour les petits
                      groupes qui souhaitent leur bulle de fiesta.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FORMULES
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Privatisation"
            title="Nos Formules"
            subtitle="Des offres clés en main pour que vous n'ayez qu'à profiter"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* ── Formule Amigos ── */}
            <AnimatedSection animation="fade-up" delay={100} className="h-full">
              <div className="h-full flex flex-col rounded-3xl border-2 border-verde bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Badge */}
                <div
                  className="text-center py-2 font-fjalla text-xs tracking-widest uppercase text-white"
                  style={{ backgroundColor: '#19A95B' }}
                >
                  Idéal pour afterworks
                </div>
                <div className="flex flex-col gap-5 p-8 flex-1">
                  <div>
                    <p className="font-fjalla tracking-widest uppercase text-cuir/50 text-xs">Formule</p>
                    <h3 className="font-bernier text-4xl text-cuir leading-none mt-1">Amigos</h3>
                  </div>
                  <p className="font-bernier text-verde" style={{ fontSize: '2.25rem' }}>
                    À partir de 25€
                    <span className="font-fjalla text-base text-cuir/50">/pers.</span>
                  </p>
                  <ul className="space-y-3 flex-1">
                    {[
                      'Apéritif & cocktail de bienvenue',
                      'Buffet de partage (nachos, quesadillas, tapas)',
                      'Musique ambiance incluse',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 font-futura text-sm text-cuir/70">
                        <span className="text-verde flex-shrink-0 mt-0.5" aria-hidden="true">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button href="#formulaire" variant="outline" size="md" className="w-full justify-center mt-4">
                    Choisir
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* ── Formule Fiesta (highlighted) ── */}
            <AnimatedSection animation="fade-up" delay={200} className="h-full">
              <div
                className="h-full flex flex-col rounded-3xl shadow-2xl overflow-hidden relative scale-[1.03] md:scale-105 z-10"
                style={{ backgroundColor: '#F07E2C' }}
              >
                {/* Popular badge */}
                <div className="text-center py-2.5 bg-amarillo font-fjalla text-xs tracking-widest uppercase text-cuir">
                  ⭐ Le plus populaire
                </div>
                <div className="flex flex-col gap-5 p-8 flex-1">
                  <div>
                    <p className="font-fjalla tracking-widest uppercase text-white/60 text-xs">Formule</p>
                    <h3 className="font-bernier text-5xl text-white leading-none mt-1">Fiesta</h3>
                  </div>
                  <p className="font-bernier text-amarillo" style={{ fontSize: '2.5rem' }}>
                    À partir de 39€
                    <span className="font-fjalla text-base text-white/60">/pers.</span>
                  </p>
                  <ul className="space-y-3 flex-1">
                    {[
                      'Cocktail de bienvenue',
                      'Repas assis 3 services',
                      'Sélection de vins & bières',
                      'Playlist latina personnalisée',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 font-futura text-sm text-white/90">
                        <span className="text-amarillo flex-shrink-0 mt-0.5" aria-hidden="true">★</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      document.getElementById('formulaire')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="
                      w-full mt-4 py-3 rounded-full font-fjalla tracking-widest uppercase text-sm
                      bg-white text-cuir hover:bg-amarillo hover:text-cuir
                      transition-all duration-200 hover:scale-105 active:scale-100
                      shadow-md
                    "
                  >
                    Choisir cette formule
                  </button>
                </div>
              </div>
            </AnimatedSection>

            {/* ── Formule Gran Fiesta ── */}
            <AnimatedSection animation="fade-up" delay={300} className="h-full">
              <div
                className="h-full flex flex-col rounded-3xl border-2 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                style={{ borderColor: '#844999' }}
              >
                {/* Badge */}
                <div
                  className="text-center py-2 font-fjalla text-xs tracking-widest uppercase text-white"
                  style={{ backgroundColor: '#844999' }}
                >
                  Expérience premium
                </div>
                <div className="flex flex-col gap-5 p-8 flex-1">
                  <div>
                    <p className="font-fjalla tracking-widest uppercase text-cuir/50 text-xs">Formule</p>
                    <h3 className="font-bernier text-4xl text-cuir leading-none mt-1">Gran Fiesta</h3>
                  </div>
                  <p
                    className="font-bernier"
                    style={{ fontSize: '2.25rem', color: '#844999' }}
                  >
                    À partir de 59€
                    <span className="font-fjalla text-base text-cuir/50">/pers.</span>
                  </p>
                  <ul className="space-y-3 flex-1">
                    {[
                      'Cocktail VIP',
                      'Repas assis 4 services',
                      'Dessert spectaculaire',
                      'Open bar 2h',
                      'DJ ou animation live option',
                      'Décoration thématique',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 font-futura text-sm text-cuir/70">
                        <span className="flex-shrink-0 mt-0.5" style={{ color: '#844999' }} aria-hidden="true">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button href="#formulaire" variant="secondary" size="md" className="w-full justify-center mt-4">
                    Choisir
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SunDivider />

      {/* ══════════════════════════════════════════════
          CE QU'ON PROPOSE
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ backgroundColor: '#844999' }}>
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Services inclus"
            title="Ce Qu'on Propose"
            subtitle="Tout ce qu'il faut pour une soirée mémorable — on s'occupe de tout"
            light
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-6">
            {[
              { icon: '🍽️', label: 'Menus sur mesure', desc: 'Cuisine adaptée à vos envies et restrictions' },
              { icon: '🍹', label: 'Cocktails personnalisés', desc: 'Signature drinks à votre image' },
              { icon: '🎨', label: 'Décoration thématique', desc: 'Ballons, guirlandes, ambiance totale' },
              { icon: '🎵', label: 'Sono & playlist latina', desc: 'Curated pour faire danser tout le monde' },
              { icon: '🎧', label: 'Options DJ', desc: 'DJ resident ou externe selon formule' },
              { icon: '📸', label: 'Animation & souvenir', desc: 'Photobooth, jeux, surprises à la cantina' },
            ].map((item, i) => (
              <AnimatedSection key={item.label} animation="fade-up" delay={i * 80}>
                <div className="flex flex-col items-center text-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 cursor-default">
                  <span className="text-4xl" aria-hidden="true">{item.icon}</span>
                  <p className="font-fjalla tracking-wide text-white text-sm md:text-base">{item.label}</p>
                  <p className="font-futura text-white/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          GALERIE PLACEHOLDER
      ══════════════════════════════════════════════ */}
      <section className="bg-tortilla py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Vos moments"
            title="Galerie"
            subtitle="Des fiestas, des sourires, des souvenirs — et bientôt le vôtre"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryCards.map((card, i) => (
              <AnimatedSection key={card.label} animation="fade-up" delay={i * 80}>
                <div
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
                  style={{ backgroundColor: card.bg }}
                >
                  {/* Texture */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(-45deg, rgba(255,255,255,0.3) 0, rgba(255,255,255,0.3) 1px, transparent 0, transparent 50%)',
                      backgroundSize: '10px 10px',
                    }}
                  />

                  {/* Corner decorations */}
                  <div
                    className="absolute top-3 left-3 w-6 h-6 rounded-full opacity-60"
                    style={{ backgroundColor: card.accent }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute bottom-3 right-3 w-4 h-4 rounded-full opacity-40"
                    style={{ backgroundColor: card.accent }}
                    aria-hidden="true"
                  />

                  {/* Main text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                    <p className="font-fjalla italic text-white/90 text-base md:text-lg leading-snug group-hover:scale-105 transition-transform duration-300">
                      Votre prochain événement ici ✦
                    </p>
                    <span
                      className="font-bernier text-2xl text-white leading-none"
                      style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.2)' }}
                    >
                      {card.label}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-fjalla tracking-widest uppercase text-white text-xs border border-white/60 rounded-full px-4 py-1.5">
                      Réservez cet espace
                    </span>
                  </div>

                  {/* Scale on hover */}
                  <div className="absolute inset-0 transform scale-100 group-hover:scale-105 transition-transform duration-500 -z-10" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FORMULAIRE DE DEMANDE
      ══════════════════════════════════════════════ */}
      <section id="formulaire" className="bg-cuir py-20 px-6 relative overflow-hidden">
        {/* Top Papel Picado */}
        <PapelPicadoInverted className="absolute top-0 left-0 w-full opacity-60" />

        {/* Background dots */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle, #FCEA5B 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <span className="font-fjalla tracking-[0.35em] uppercase text-flor text-sm">
                Votre événement, notre passion
              </span>
              <h2
                className="font-bernier text-white leading-none mt-2"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', textShadow: '2px 2px 0 rgba(0,0,0,0.2)' }}
              >
                Demandez un devis
              </h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="h-0.5 w-8 bg-flor/50 rounded-full" />
                <MilagroHeart size={28} animated />
                <div className="h-0.5 w-8 bg-flor/50 rounded-full" />
              </div>
              <p className="font-futura text-white/60 text-sm mt-4 max-w-md mx-auto leading-relaxed">
                Remplissez ce formulaire et notre équipe vous rappelle sous 24h pour construire
                ensemble la fiesta de vos rêves.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={150}>
            <ContactFiestaForm />
          </AnimatedSection>
        </div>

        {/* Bottom Papel Picado */}
        <PapelPicado className="absolute bottom-0 left-0 w-full opacity-40 rotate-180" />
      </section>
    </>
  )
}
