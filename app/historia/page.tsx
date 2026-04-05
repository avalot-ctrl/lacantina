import PapelPicado, { PapelPicadoInverted } from '@/components/svg/PapelPicado'
import MilagroHeart from '@/components/svg/MilagroHeart'
import Sun, { SunDivider } from '@/components/svg/Sun'
import Calavera from '@/components/svg/Calavera'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'Notre Histoire',
  description:
    "Découvrez l'histoire de La Cantina, née de la rencontre de Benjamin et Bianca à São Paulo en 2018.",
}

/* ─────────────────────────────────────────────────────────────
   TIMELINE DATA
───────────────────────────────────────────────────────────── */
const milestones = [
  {
    year: '2018',
    label: 'Rencontre à São Paulo',
    description:
      'Dans un marché vibrant de São Paulo, Benjamin — étudiant français en gastronomie — croise Bianca pour la première fois. Un plat de feijoada, un sourire, et le destin bascule.',
    dotColor: 'bg-violeta',
    cardBg: 'bg-violeta',
    textColor: 'text-white',
  },
  {
    year: '2020',
    label: 'Retour en France, début du projet',
    description:
      'De retour en Vendée, ils commencent à cuisiner ensemble — les techniques de Benjamin et les recettes de Vovó Maria côte à côte. Les cahiers s\'accumulent. Le rêve prend forme.',
    dotColor: 'bg-flor',
    cardBg: 'bg-flor',
    textColor: 'text-white',
  },
  {
    year: '2024',
    label: 'Travaux et création de La Cantina',
    description:
      'Pendant des mois, les murs se couvrent de couleurs éclatantes, les vitraux s\'inspirent des fêtes brésiliennes et mexicaines, et le cœur Milagro devient leur emblème.',
    dotColor: 'bg-verde',
    cardBg: 'bg-verde',
    textColor: 'text-white',
  },
  {
    year: '2025',
    label: 'Ouverture à La Roche-sur-Yon',
    description:
      'Le 15 mars 2025, La Cantina ouvre ses portes. La file d\'attente s\'étend jusqu\'à la rue. Les premières larmes de joie coulent sur les joues de Bianca.',
    dotColor: 'bg-rojo',
    cardBg: 'bg-rojo',
    textColor: 'text-white',
  },
]

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function HistoriaPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col min-h-[55vh]"
        style={{
          background: 'linear-gradient(135deg, #541A24 0%, #844999 60%, #4280C7 100%)',
        }}
      >
        {/* Top papel picado */}
        <PapelPicado className="absolute top-0 left-0 right-0 z-10" />

        {/* Scattered decorative suns */}
        <span className="absolute top-16 left-8 opacity-20">
          <Sun size={80} color="#FFAB03" />
        </span>
        <span className="absolute top-12 right-12 opacity-15">
          <Sun size={60} color="#F07E2C" />
        </span>
        <span className="absolute bottom-10 left-1/4 opacity-10">
          <Sun size={100} color="#FCEA5B" />
        </span>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 relative z-10">
          <AnimatedSection animation="fade-up" delay={100}>
            <span className="font-fjalla tracking-[0.35em] uppercase text-sm text-flor mb-4 block">
              02. Notre Histoire
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={250}>
            <h1
              className="font-bernier text-white leading-none mb-6"
              style={{
                fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                textShadow: '4px 4px 0 rgba(0,0,0,0.3)',
              }}
            >
              Nuestra Historia
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <p className="font-futura text-white/85 text-lg md:text-2xl max-w-2xl leading-relaxed">
              De São Paulo à La Roche-sur-Yon,{' '}
              <em>une histoire d&apos;amour et de saveurs</em>
            </p>
          </AnimatedSection>

          {/* Heart icon below subtitle */}
          <AnimatedSection animation="fade-in" delay={600} className="mt-8">
            <MilagroHeart size={56} animated />
          </AnimatedSection>
        </div>

        {/* Bottom inverted papel picado */}
        <PapelPicadoInverted className="absolute bottom-0 left-0 right-0 z-10" />
      </section>


      {/* ══════════════════════════════════════════════════════
          2. L'ORIGINE  (bg-tortilla)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-tortilla py-24 px-6 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #541A24 0, #541A24 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <SectionTitle
            eyebrow="Chapitre I"
            title="L'Origine"
            subtitle="Une rencontre qui allait tout changer"
            align="center"
            className="mb-16"
          />


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left – decorative card */}
            <AnimatedSection animation="slide-left" delay={150}>
              <div
                className="bg-violeta rounded-3xl p-10 flex flex-col items-center gap-6 shadow-2xl relative overflow-hidden"
                style={{ minHeight: '400px' }}
              >
                {/* Background sun burst */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Sun size={400} color="#FCEA5B" />
                </div>

                <div className="relative z-10 text-center">
                  <p
                    className="font-bernier text-white leading-tight mb-2"
                    style={{
                      fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                      textShadow: '2px 2px 0 rgba(0,0,0,0.25)',
                    }}
                  >
                    2018
                  </p>
                  <p
                    className="font-bernier text-amarillo leading-tight"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}
                  >
                    São Paulo, Brésil
                  </p>
                </div>

                {/* Decorative divider */}
                <div className="w-full flex items-center gap-3 relative z-10">
                  <div className="flex-1 h-px bg-white/30" />
                  <Sun size={24} color="#FCEA5B" />
                  <div className="flex-1 h-px bg-white/30" />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-4">
                  <MilagroHeart size={110} />
                  <p className="font-futura text-white/80 text-sm text-center leading-relaxed max-w-xs">
                    Le cœur Milagro — symbole de gratitude et de partage —
                    est devenu l&apos;emblème de leur aventure.
                  </p>
                </div>

                {/* Decorative corner dots */}
                <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-amarillo opacity-70" />
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-rosa opacity-70" />
                <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-turquesa opacity-70" />
                <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-flor opacity-70" />
              </div>
            </AnimatedSection>

            {/* Right – story text */}
            <AnimatedSection animation="slide-right" delay={300}>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 flex-shrink-0 self-stretch rounded-full bg-gradient-to-b from-violeta via-flor to-verde" />
                  <div>
                    <h3 className="font-fjalla text-cuir text-xl uppercase tracking-widest mb-3">
                      Benjamin, Chef de Coeur
                    </h3>
                    <p className="font-futura text-cuir/80 leading-relaxed">
                      Chef français passionné de cuissons lentes et de viandes maturées, Benjamin a
                      toujours cru que cuisiner est un acte de patience et d&apos;amour — jamais une
                      course contre le temps. C&apos;est en partant étudier au Brésil qu&apos;il
                      a découvert une autre façon de vivre la table.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1.5 flex-shrink-0 self-stretch rounded-full bg-gradient-to-b from-rojo via-rosa to-naranja" />
                  <div>
                    <h3 className="font-fjalla text-cuir text-xl uppercase tracking-widest mb-3">
                      Bianca, L&apos;Âme du Brésil
                    </h3>
                    <p className="font-futura text-cuir/80 leading-relaxed">
                      Originaire de São Paulo, Bianca a grandi dans la cuisine de sa grand-mère,
                      Vovó Maria. Chaque recette est un héritage transmis à voix basse, entre les
                      parfums de cannelle et de coriandre, le chant des marmites sur le feu. Elle
                      porte en elle la mémoire gustative de tout un peuple.
                    </p>
                  </div>
                </div>

                <div
                  className="bg-cuir/10 border-l-4 border-violeta rounded-r-2xl p-5 mt-2"
                >
                  <p className="font-futura text-cuir/90 italic leading-relaxed">
                    &ldquo;On s&apos;est retrouvés attablés face à face dans un marché de São Paulo,
                    une feijoada fumante devant nous et le monde entier à inventer.&rdquo;
                  </p>
                  <p className="font-fjalla text-flor tracking-widest uppercase text-xs mt-2">
                    — Benjamin &amp; Bianca, 2018
                  </p>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          3. LE RÊVE  (bg-azul)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-azul py-24 px-6 relative overflow-hidden">
        {/* Decorative angled overlays */}
        <div
          className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-15"
          style={{ background: '#FCEA5B', transform: 'translate(-30%, -30%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: '#FF461C', transform: 'translate(30%, 30%)' }}
        />
        <div
          className="absolute top-1/2 right-8 opacity-10"
          style={{ transform: 'translateY(-50%)' }}
        >
          <Sun size={200} color="#FFAB03" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection animation="fade-up" delay={100}>
            <span className="font-fjalla tracking-[0.35em] uppercase text-sm text-amarillo mb-4 block">
              Chapitre II
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <h2
              className="font-bernier text-white leading-none mb-8"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                textShadow: '3px 3px 0 rgba(0,0,0,0.25)',
              }}
            >
              Le Rêve
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={350}>
            <p className="font-futura text-white/85 text-lg md:text-xl leading-relaxed mb-8">
              De retour en France, Benjamin et Bianca rêvent d&apos;un endroit unique où la rigueur
              culinaire française rencontre l&apos;âme et les saveurs de l&apos;Amérique latine.
              Un plat de Vovó Maria revisité avec soin. Un bœuf effiloché cuit douze heures durant.
              Des pains et des sauces préparés à la main chaque matin avant l&apos;ouverture.
            </p>
            <p className="font-futura text-white/75 text-lg leading-relaxed mb-14">
              Pas de compromis. Pas de shortcuts. Juste la vérité d&apos;un plat
              cuisiné avec tout ce que l&apos;on a d&apos;amour à offrir.
            </p>
          </AnimatedSection>

          {/* Pull quote */}
          <AnimatedSection animation="fade-in" delay={500}>
            <div
              className="relative border-2 border-white/30 rounded-3xl px-8 md:px-14 py-10 bg-white/10 backdrop-blur-sm"
            >
              {/* Opening quote mark */}
              <span
                className="absolute -top-6 left-8 font-bernier text-amarillo leading-none select-none"
                style={{ fontSize: '5rem', lineHeight: 1 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p
                className="font-bernier text-white leading-tight"
                style={{
                  fontSize: 'clamp(1.4rem, 3.5vw, 2.5rem)',
                  textShadow: '1px 1px 0 rgba(0,0,0,0.2)',
                }}
              >
                Chaque plat raconte une histoire.
                <br />
                Chaque bouchée est un voyage.
              </p>

              {/* Closing quote mark */}
              <span
                className="absolute -bottom-6 right-8 font-bernier text-amarillo leading-none select-none"
                style={{ fontSize: '5rem', lineHeight: 1 }}
                aria-hidden="true"
              >
                &rdquo;
              </span>
            </div>
          </AnimatedSection>

          {/* Row of small suns */}
          <AnimatedSection animation="fade-in" delay={650} className="flex justify-center gap-4 mt-16">
            {['#FCEA5B', '#F07E2C', '#FF461C', '#F23376', '#844999'].map((color, i) => (
              <Sun key={i} size={32} color={color} />
            ))}
          </AnimatedSection>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          4. TIMELINE  (bg-white)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 px-6 relative overflow-hidden">
        {/* Faint vertical stripe */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-flor/20 hidden md:block" />

        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Chapitre III"
            title="Notre Aventure"
            subtitle="De São Paulo à La Roche-sur-Yon, les grandes étapes d'une belle folie"
            align="center"
            className="mb-20"
          />

          <div className="relative">
            {/* Center line (mobile: left-aligned; desktop: centered) */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violeta via-flor to-rojo md:-translate-x-1/2" />

            <div className="flex flex-col gap-16">
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0
                return (
                  <AnimatedSection
                    key={m.year}
                    animation={isLeft ? 'slide-left' : 'slide-right'}
                    delay={i * 150}
                    className={`relative flex items-center gap-6 md:gap-0 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`
                        absolute left-6 md:left-1/2 md:-translate-x-1/2
                        w-5 h-5 rounded-full border-4 border-white shadow-lg z-10
                        ${m.dotColor}
                      `}
                    />

                    {/* Card — offset depending on side */}
                    <div
                      className={`
                        ml-16 md:ml-0 w-full
                        ${isLeft ? 'md:pr-12 md:w-1/2 md:text-right' : 'md:pl-12 md:w-1/2 md:ml-auto'}
                      `}
                    >
                      <div
                        className={`
                          ${m.cardBg} ${m.textColor} rounded-2xl px-7 py-6 shadow-xl
                          relative overflow-hidden
                        `}
                      >
                        {/* Background decorative year */}
                        <span
                          className="absolute bottom-1 right-3 font-bernier text-white/10 select-none leading-none"
                          style={{ fontSize: '5rem' }}
                          aria-hidden="true"
                        >
                          {m.year}
                        </span>

                        <span
                          className="font-bernier text-white/70 text-base tracking-widest block mb-1"
                        >
                          {m.year}
                        </span>
                        <h3 className="font-bernier leading-tight mb-3" style={{ fontSize: '1.4rem' }}>
                          {m.label}
                        </h3>
                        <p className="font-futura text-sm text-white/85 leading-relaxed relative z-10">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════
          5. LA NAISSANCE  (bg-naranja)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-naranja py-24 px-6 relative overflow-hidden">
        {/* Large decorative Calavera — background */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none">
          <Calavera size={420} />
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 opacity-8 pointer-events-none">
          <Calavera size={300} />
        </div>

        {/* Papel picado at top */}
        <PapelPicado className="absolute top-0 left-0 right-0" />

        <div className="max-w-5xl mx-auto pt-8 relative z-10">
          <AnimatedSection animation="fade-up" delay={100} className="text-center mb-14">
            <span className="font-fjalla tracking-[0.35em] uppercase text-sm text-cuir/70 mb-3 block">
              Chapitre IV
            </span>
            <h2
              className="font-bernier text-cuir leading-none"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                textShadow: '2px 2px 0 rgba(255,255,255,0.3)',
              }}
            >
              La Naissance
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Left – text */}
            <AnimatedSection animation="slide-left" delay={250}>
              <div className="space-y-6">
                <p className="font-futura text-cuir/90 text-lg leading-relaxed">
                  En 2025, ils reprennent un ancien restaurant du centre-ville de La Roche-sur-Yon
                  et le métamorphosent entièrement. Des mains, de la sueur, et une foi absolue
                  dans la beauté du projet.
                </p>
                <p className="font-futura text-cuir/80 leading-relaxed">
                  Les murs se parent de couleurs éclatantes : jaune soleil, rouge ardent, violet
                  profond. Des vitraux colorés s&apos;inspirent de l&apos;art mexicain traditionnel.
                  Les luminaires tissés à la main réchauffent chaque table.
                </p>
                <p className="font-futura text-cuir/80 leading-relaxed">
                  Et au cœur de tout cela, le <strong>cœur Milagro</strong> — ex-voto mexicain
                  symbole de gratitude et de partage — trône au-dessus du bar comme un porte-bonheur
                  géant. C&apos;est leur emblème. C&apos;est leur âme.
                </p>
              </div>
            </AnimatedSection>

            {/* Right – decorative block */}
            <AnimatedSection animation="slide-right" delay={400}>
              <div className="flex flex-col items-center gap-8">
                {/* Color swatches row */}
                <div className="flex gap-3">
                  {[
                    { bg: 'bg-rojo', label: 'Ardeur' },
                    { bg: 'bg-violeta', label: 'Mystère' },
                    { bg: 'bg-verde', label: 'Vie' },
                    { bg: 'bg-azul', label: 'Rêve' },
                    { bg: 'bg-rosa', label: 'Amour' },
                  ].map((swatch) => (
                    <div key={swatch.label} className="flex flex-col items-center gap-1">
                      <div className={`w-10 h-10 rounded-xl shadow-md ${swatch.bg}`} />
                      <span className="font-fjalla text-cuir text-xs tracking-wider">
                        {swatch.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Big Calavera illustration */}
                <div className="flex flex-col items-center gap-4">
                  <Calavera size={160} />
                  <p className="font-fjalla text-cuir/70 tracking-[0.2em] uppercase text-xs text-center">
                    L&apos;art comme langage universel
                  </p>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-4 w-full">
                  {[
                    { value: '12h', label: 'de cuisson lente' },
                    { value: '100%', label: 'fait maison' },
                    { value: '2025', label: 'ouverture' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-cuir rounded-2xl px-3 py-4 text-center"
                    >
                      <p className="font-bernier text-flor text-2xl leading-none">{stat.value}</p>
                      <p className="font-futura text-white/70 text-xs mt-1 leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>

        {/* Inverted papel picado at bottom */}
        <PapelPicadoInverted className="absolute bottom-0 left-0 right-0" />
      </section>


      {/* ══════════════════════════════════════════════════════
          6. LA PHILOSOPHIE  (bg-cuir)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-cuir py-28 px-6 relative overflow-hidden">
        {/* Decorative radiant backdrop */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, #F07E2C 0%, transparent 70%)',
          }}
        />

        {/* Scattered paper flags */}
        <div className="absolute top-10 left-6 opacity-20">
          <Sun size={50} color="#FCEA5B" />
        </div>
        <div className="absolute top-16 right-10 opacity-20">
          <Sun size={40} color="#F07E2C" />
        </div>
        <div className="absolute bottom-16 left-12 opacity-15">
          <Sun size={60} color="#844999" />
        </div>
        <div className="absolute bottom-10 right-8 opacity-20">
          <Calavera size={80} />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection animation="fade-up" delay={100}>
            <span className="font-fjalla tracking-[0.35em] uppercase text-sm text-flor mb-4 block">
              Chapitre V — Notre Philosophie
            </span>
          </AnimatedSection>

          {/* Giant quote */}
          <AnimatedSection animation="fade-up" delay={250}>
            <div className="relative mb-12">
              <span
                className="absolute -top-8 -left-4 font-bernier text-flor opacity-40 select-none leading-none"
                style={{ fontSize: '8rem', lineHeight: 1 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote
                className="font-bernier text-white relative z-10"
                style={{
                  fontSize: 'clamp(1.6rem, 4vw, 3rem)',
                  lineHeight: 1.2,
                  textShadow: '2px 2px 0 rgba(0,0,0,0.3)',
                }}
              >
                Chez nous, chaque plat raconte une histoire.
                <br />
                <span className="text-flor">Chaque bouchée est un voyage.</span>
              </blockquote>
              <span
                className="absolute -bottom-10 -right-4 font-bernier text-flor opacity-40 select-none leading-none"
                style={{ fontSize: '8rem', lineHeight: 1 }}
                aria-hidden="true"
              >
                &rdquo;
              </span>
            </div>
          </AnimatedSection>

          {/* Philosophy sub-text */}
          <AnimatedSection animation="fade-up" delay={400}>
            <p className="font-futura text-white/75 text-base md:text-lg leading-relaxed mb-4">
              Notre équipe est réunie par une conviction simple&nbsp;: la cuisine sincère
              nourrit autant l&apos;âme que le corps. Chaque ingrédient est choisi avec soin,
              chaque geste perpétue un savoir-faire, chaque table est une invitation au voyage.
            </p>
            <p className="font-futura text-white/60 leading-relaxed">
              De Benjamin et Bianca à chaque membre de la brigade, nous portons ensemble
              l&apos;héritage de deux cultures. La Cantina, c&apos;est notre maison. La vôtre aussi.
            </p>
          </AnimatedSection>

          {/* SunDivider */}
          <AnimatedSection animation="fade-in" delay={500}>
            <SunDivider className="my-10" />
          </AnimatedSection>

          {/* Large animated Milagro Heart */}
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="flex flex-col items-center gap-6 mb-14">
              <MilagroHeart size={140} animated />
              <p className="font-fjalla text-flor tracking-[0.3em] uppercase text-sm">
                Con amor — avec amour
              </p>
            </div>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="fade-up" delay={750}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/carta" variant="primary" size="lg">
                Voir la Carta
              </Button>
              <Button href="/reservar" variant="white" size="lg">
                Réserver
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </main>
  )
}
