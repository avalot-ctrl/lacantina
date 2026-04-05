import type { Metadata } from 'next'
import PapelPicado, { PapelPicadoInverted } from '@/components/svg/PapelPicado'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { ChiliRow } from '@/components/svg/Chili'
import { SunDivider } from '@/components/svg/Sun'

export const metadata: Metadata = {
  title: 'La Carta — Notre Carte',
  description: 'Découvrez la carte complète de La Cantina : tacos, burritos, viandes grillées, pizzas latina, desserts et cocktails.',
}

interface MenuItem {
  name: string
  description?: string
  price: string
  badge?: string
}

interface MenuCategory {
  id: string
  title: string
  subtitle?: string
  emoji: string
  bg: string
  textColor: string
  accentColor: string
  items: MenuItem[]
  note?: string
}

const menuCategories: MenuCategory[] = [
  {
    id: 'aperos',
    title: 'Los Apéros à Partager',
    subtitle: '¡Para compartir con amigos!',
    emoji: '🫙',
    bg: 'bg-naranja',
    textColor: 'text-cuir',
    accentColor: '#541A24',
    items: [
      { name: 'Chorizo tranché doux ou piquant', description: '1 chorizo tranché', price: '6,90€' },
      { name: 'Assiette de frites', price: '4,90€' },
      { name: 'Assiette de frites de patates douces', price: '5,90€' },
      { name: 'Jalapeños frits fourrés', description: 'Cream cheese, sour cream', price: '8,90€', badge: '🌶️ Piquant' },
      { name: 'Frites de la Cantina', description: 'Frites, effiloché au choix ou poivrons grillés, oignons frits, jalapeños, cébette, sour cream, oignons rouges, crispy bacon, sauce mayo fumée, cheddar gratiné', price: '12,90€', badge: '⭐ Signature' },
      { name: 'Plateau de nachos', description: 'Nachos avec guacamole, sour cream et pico de gallo', price: '9,90€' },
      { name: 'Nachos de la Cantina', description: 'Nachos, effiloché au choix ou poivrons grillés, oignons frits, jalapeños, cébette, sour cream, oignons rouges, crispy bacon, sauce mayo fumée, cheddar gratiné', price: '13,90€', badge: '⭐ Signature' },
      { name: 'Crispy Tacos', description: 'Mini-tacos poulet, porc, bœuf — galettes de maïs croustillantes, cébette, oignons rouges, cheddar râpé, guacamole, sour cream et pico de gallo', price: '11,90€' },
      { name: 'Chicharrones', description: 'Gratons de porc, citron vert, guacamole, sour cream et pico de gallo', price: '9,90€' },
      { name: 'Quesadillas', description: 'Effiloché au choix ou poivrons grillés, jalapeños, mozzarella, cheddar, guacamole, sour cream et pico de gallo', price: '11,90€' },
      { name: 'La Fiesta Loca', description: 'Chicharrones, frites de la Cantina, quesadillas, guacamole, sour cream, pico de gallo', price: '24,90€', badge: '🎉 Pour 2-3' },
      { name: 'Épi de maïs grillé enrobé de beurre', price: '4,50€' },
      { name: 'Popcorn grillés', description: 'Épices cajun ou nature', price: '3,90€' },
    ],
  },
  {
    id: 'saladas',
    title: 'Las Saladas',
    subtitle: 'Fraîcheur & saveurs',
    emoji: '🥗',
    bg: 'bg-verde',
    textColor: 'text-white',
    accentColor: '#FFFFFF',
    items: [
      { name: 'Salade Cobb', description: 'Salade, tomate, oignons rouges, effiloché de poulet, bleu d\'Auvergne', price: '13,90€' },
      { name: 'Avocado Toast', description: 'Salade, tomate, oignons rouges, vinaigrette, 2 toasts guacamole, pico de gallo, sour cream, œuf poché • Supp. ceviche +3€', price: '14,90€', badge: '🥑 Best-seller' },
      { name: 'Pan con Tomate', description: 'Salade, tomate, oignons rouges, vinaigrette, 2 toasts frottés à l\'ail, sauce tomate, jambon espagnol', price: '13,90€' },
      { name: 'Club Sandwich', description: 'Effiloché de poulet, mayo fumée, tomate, salade, crispy bacon + accompagnement au choix', price: '14,90€' },
      { name: 'Ceviche', description: '+ Accompagnement au choix', price: '15,90€', badge: '🐟 Frais' },
      { name: 'Tartare de bœuf à la mexicaine', description: 'Mélangé guacamole + accompagnement au choix', price: '16,90€', badge: '🥩 Premium' },
    ],
    note: 'Accompagnements au choix : frites cajun, frites patates douces, riz, poivrons grillés, chilli sin carne, nachos, épi de maïs grillé\nSauces : ketchup, mayo, mayo chipotle, chimichurri, BBQ fumée, sour cream, poivre, beurre maître d\'hôtel, beurre de la Cantina',
  },
  {
    id: 'carnes',
    title: 'Las Carnes y los Pescados Grillés',
    subtitle: 'Cuissons longues & grillades',
    emoji: '🥩',
    bg: 'bg-rojo',
    textColor: 'text-white',
    accentColor: '#FFFFFF',
    items: [
      { name: 'Brochette de bœuf', description: 'Supplément flambage disponible', price: '18,90€' },
      { name: 'Onglet de bœuf chimichurri', price: '19,90€', badge: '🔥 Grillé' },
      { name: 'Picanha grillé', price: '22,90€', badge: '🥩 Signature' },
      { name: 'Poulpe grillé chimichurri', price: '19,90€', badge: '🐙 Mer' },
      { name: 'Poulet cajun grillé', price: '16,90€' },
      { name: 'Burger de la Cantina', description: 'Buns verts, guacamole maison, oignons rouges, effiloché de bœuf, piment, salade, cheddar épicé', price: '16,90€', badge: '⭐ Signature' },
      { name: 'Burger El Cerdo Dorado', description: 'Bun brioché toasté, porc effiloché confit au paprika fumé, coleslaw, poivron mariné, salade, cheddar, sauce sucrée fumée', price: '16,90€' },
      { name: 'Burger El Pollo Fresco', description: 'Bun brioché toasté, poulet effiloché mariné citron vert & herbes fraîches, crème de maïs maison, avocat, tomate, oignons rouges, salade', price: '16,90€' },
      { name: 'Veggie Burger', description: 'Buns verts, sour cream aux fines herbes, galette de petits pois, poivrons marinés, guacamole maison, oignons rouges, tomates, salade', price: '15,90€', badge: '🌿 Veggie' },
      { name: 'Chicken and Waffle', price: '15,90€' },
      { name: 'Pièces de bœuf maturées', description: 'Renseignez-vous auprès de votre serveur', price: 'Selon arrivage', badge: '🏆 Premium' },
    ],
  },
  {
    id: 'texmex',
    title: 'El Tex-Mex',
    subtitle: 'Les classiques revisités',
    emoji: '🌮',
    bg: 'bg-flor',
    textColor: 'text-white',
    accentColor: '#FFFFFF',
    items: [
      { name: 'Chilli sin carne', description: 'Mijoté toute la nuit avec amour ♥', price: '13,90€', badge: '🌿 Veggie' },
      { name: 'Chilli con carne', description: 'Avec effiloché de bœuf en plus, mijoté toute la nuit', price: '15,90€' },
      { name: 'Burrito', price: '13,90€' },
      { name: 'Tacos croustillants', description: '3 tacos — poulet, porc, bœuf — galettes de maïs croustillantes, cébette, oignons rouges, cheddar râpé, guacamole, sour cream et pico de gallo', price: '14,90€' },
      { name: 'Les Fajitas à composer', description: 'Le plat emblématique ! À personnaliser avec vos garnitures préférées', price: '16,90€', badge: '⭐ Emblématique' },
      { name: 'Enchiladas', price: '14,90€' },
    ],
  },
  {
    id: 'pizzas',
    title: 'Las Pizzas',
    subtitle: 'Nos pizzas aux saveurs latina',
    emoji: '🍕',
    bg: 'bg-violeta',
    textColor: 'text-white',
    accentColor: '#FFFFFF',
    items: [
      { name: 'La Simplo', description: 'Base tomate, mozzarella, jambon', price: '11,90€' },
      { name: 'La Chorizo Inferno', description: 'Base tomate, chorizo, mozzarella, oignons rouges, cheddar gratiné, jalapeños', price: '13,90€', badge: '🌶️ Piquant' },
      { name: 'La Patagonia Burrata', description: 'Sauce tomate, jambon, burrata, tomates cerises', price: '14,90€', badge: '⭐ Signature' },
      { name: 'La Pollo Cantina', description: 'Sauce tomate, effiloché de poulet, mozzarella, oignons rouges, cheddar gratiné, cébette', price: '13,90€' },
      { name: 'La Guacamolita', description: 'Base sour cream, effiloché de poulet, mozzarella, tomates cerises, oignons rouges, coriandre, guacamole', price: '14,90€', badge: '🥑 Fresh' },
      { name: 'La Carnitas', description: 'Sauce tomate, effiloché de porc, mozzarella, jalapeños, oignons rouges, cheddar, sour cream', price: '13,90€' },
      { name: 'La Gringa BBQ', description: 'Sauce tomate, effiloché de bœuf, mozzarella, crispy bacon, oignons rouges, oignons frits, cheddar, sauce BBQ', price: '14,90€', badge: '🔥 BBQ' },
      { name: 'La Veggie', description: 'Sauce tomate, mozzarella, jalapeños, poivrons grillés, épi de maïs, oignons rouges, cheddar', price: '12,90€', badge: '🌿 Veggie' },
      { name: 'La Tres Quesos', description: 'Sauce tomate, mozzarella, cheddar, bleu d\'Auvergne, oignons rouges, oignons frits', price: '13,90€', badge: '🧀 Fromages' },
    ],
  },
  {
    id: 'dessertos',
    title: 'Los Dessertos',
    subtitle: 'Pour finir en douceur',
    emoji: '🍮',
    bg: 'bg-rosa',
    textColor: 'text-white',
    accentColor: '#FFFFFF',
    items: [
      { name: 'Salade de fruits', price: '6,90€' },
      { name: 'Cheesecake dulce de leche', price: '8,90€', badge: '❤️ Maison' },
      { name: 'Churros Loaded', description: 'Nutella, noisettes concassées, gaufrettes concassées, chocolat blanc', price: '8,90€', badge: '⭐ Signature' },
      { name: 'Brownie chocolat, glace vanille, dulce de leche', price: '8,90€' },
      { name: 'Crème brûlée citron vert', price: '7,90€' },
      { name: 'Mousse de maracuja', price: '7,90€' },
      { name: 'Choco Torta', price: '8,90€' },
      { name: 'Café gourmand', description: 'Mini mousse de maracuja, mini crème brûlée, mini cheesecake dulce de leche, brownie', price: '9,90€', badge: '☕ Gourmand' },
    ],
  },
]

const iceCreams = {
  scoops: [
    { count: '1 boule', price: '2,90€' },
    { count: '2 boules', price: '4,90€' },
    { count: '3 boules', price: '6,90€' },
  ],
  flavors: ['Vanille', 'Chocolat', 'Café', 'Caramel', 'Fraise', 'Citron vert', 'Fruit de la passion'],
  coupes: [
    { name: 'Coupe Fiesta Tropicale', description: 'Citron vert, fraise, coulis fruit de la passion, fruits frais', price: '8,90€' },
    { name: 'Coupe Paraíso Helado', description: 'Caramel, chocolat, vanille, dulce de leche, churros, noisettes concassées', price: '9,90€' },
  ],
}

const formulesMidi = [
  { label: 'Plat du jour ou Avocado Toast ou Chilli sin carne', price: '14,90€' },
  { label: '+ Dessert du jour ou Café gourmand', price: '17,90€' },
  { label: '+ Boisson (Vittel 25cl, sirop, bière 25cl ou verre de vin)', price: '18,90€' },
]

export default function CartaPage() {
  return (
    <div className="min-h-screen">
      {/* ═══ HERO ═══ */}
      <section
        className="relative min-h-[45vh] flex flex-col items-center justify-center overflow-hidden pt-20"
        style={{ background: 'linear-gradient(135deg, #541A24 0%, #844999 50%, #F07E2C 100%)' }}
      >
        <PapelPicado />
        <div className="relative z-10 text-center px-4 py-16">
          <AnimatedSection animation="fade-in">
            <span className="font-fjalla tracking-[0.3em] uppercase text-flor text-sm">03. Le Menu</span>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="font-bernier text-hero text-white mt-2" style={{ textShadow: '4px 4px 0 rgba(0,0,0,0.3)' }}>
              La Carta
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="font-futura text-tortilla/80 mt-3 text-lg max-w-xl mx-auto">
              Tous nos plats sont préparés avec passion — saveurs du Mexique et d'Amérique du Sud
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <ChiliRow count={7} className="justify-center mt-6" />
          </AnimatedSection>
        </div>
        {/* Navigation rapide */}
        <div className="relative z-10 flex flex-wrap justify-center gap-2 px-4 pb-8">
          {menuCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="font-fjalla text-xs tracking-widest uppercase bg-white/10 hover:bg-flor border border-white/20 text-white px-4 py-2 rounded-full transition-all hover:scale-105"
            >
              {cat.emoji} {cat.title.split(' ').slice(-2).join(' ')}
            </a>
          ))}
        </div>
      </section>

      {/* ═══ CATÉGORIES ═══ */}
      {menuCategories.map((cat, catIdx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`relative py-16 ${cat.bg} overflow-hidden`}
        >
          {/* Decorative background number */}
          <div
            className="absolute top-0 right-0 font-bernier text-[20rem] leading-none opacity-5 select-none pointer-events-none"
            style={{ color: cat.accentColor }}
          >
            {String(catIdx + 1).padStart(2, '0')}
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <AnimatedSection animation="fade-up" className="mb-10">
              <div className={`flex items-start gap-4 flex-wrap`}>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-card"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  {cat.emoji}
                </div>
                <div>
                  <h2
                    className={`font-bernier text-subsection leading-tight ${cat.textColor}`}
                    style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.15)' }}
                  >
                    {cat.title}
                  </h2>
                  {cat.subtitle && (
                    <p className={`font-fjalla tracking-wider text-sm mt-1 ${cat.textColor} opacity-80`}>
                      {cat.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Decorative separator */}
              <div className="flex items-center gap-2 mt-4">
                <div className="h-0.5 flex-1" style={{ background: cat.accentColor, opacity: 0.3 }} />
                <div className="w-2 h-2 rounded-full" style={{ background: cat.accentColor, opacity: 0.6 }} />
                <div className="h-0.5 w-16" style={{ background: cat.accentColor, opacity: 0.3 }} />
              </div>
            </AnimatedSection>

            {/* Items */}
            <div className="space-y-1">
              {cat.items.map((item, i) => (
                <AnimatedSection
                  key={i}
                  animation="fade-up"
                  delay={i * 40}
                >
                  <div
                    className="group flex items-start gap-3 py-3 px-4 rounded-xl transition-all duration-200 menu-card"
                    style={{ background: 'rgba(255,255,255,0.08)' }}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`font-fjalla text-base ${cat.textColor}`}
                        >
                          {item.name}
                        </span>
                        {item.badge && (
                          <span
                            className="badge text-xs"
                            style={{
                              background: 'rgba(255,255,255,0.2)',
                              color: cat.accentColor,
                              border: `1px solid ${cat.accentColor}40`,
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p
                          className={`font-futura text-xs mt-0.5 leading-relaxed ${cat.textColor} opacity-70`}
                        >
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span
                      className={`font-fjalla text-base font-bold flex-shrink-0 mt-0.5 ${cat.textColor}`}
                      style={{ opacity: 1 }}
                    >
                      {item.price}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Note de section */}
            {cat.note && (
              <AnimatedSection animation="fade-up" delay={cat.items.length * 40} className="mt-6">
                <div
                  className={`p-4 rounded-xl font-futura text-xs leading-relaxed ${cat.textColor} opacity-80`}
                  style={{ background: 'rgba(255,255,255,0.1)', borderLeft: `3px solid ${cat.accentColor}60` }}
                >
                  {cat.note.split('\n').map((line, i) => (
                    <p key={i} className={i > 0 ? 'mt-1' : ''}>{line}</p>
                  ))}
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Bottom PapelPicado between sections */}
          {catIdx < menuCategories.length - 1 && (
            <PapelPicadoInverted className="mt-8" />
          )}
        </section>
      ))}

      {/* ═══ GLACES ═══ */}
      <section className="relative py-16 bg-turquesa overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-10">
            <span className="text-4xl">🍦</span>
            <h2 className="font-bernier text-subsection text-cuir mt-2" style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.1)' }}>
              Les Glaces
            </h2>
            <p className="font-fjalla tracking-wider text-cuir/70 text-sm mt-1">Artisanales & gourmandes</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Boules */}
            <AnimatedSection animation="fade-up" delay={0}>
              <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="font-fjalla text-cuir text-lg tracking-wider mb-4">À la Boule</h3>
                {iceCreams.scoops.map((s) => (
                  <div key={s.count} className="flex justify-between py-2 border-b border-cuir/10">
                    <span className="font-futura text-cuir">{s.count}</span>
                    <span className="font-fjalla text-cuir font-bold">{s.price}</span>
                  </div>
                ))}
                <div className="mt-4">
                  <p className="font-fjalla text-cuir/70 text-xs tracking-wider uppercase mb-2">Parfums</p>
                  <div className="flex flex-wrap gap-1.5">
                    {iceCreams.flavors.map((f) => (
                      <span
                        key={f}
                        className="text-xs font-futura bg-white/30 text-cuir px-2.5 py-1 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Coupes */}
            {iceCreams.coupes.map((coupe, i) => (
              <AnimatedSection key={coupe.name} animation="fade-up" delay={(i + 1) * 100}>
                <div className="bg-cuir rounded-2xl p-6 text-white h-full">
                  <div className="text-2xl mb-3">🍨</div>
                  <h3 className="font-bernier text-xl text-flor leading-tight">{coupe.name}</h3>
                  <p className="font-futura text-xs text-tortilla/70 mt-2 leading-relaxed">{coupe.description}</p>
                  <p className="font-fjalla text-2xl text-flor mt-4">{coupe.price}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <PapelPicadoInverted className="mt-8" />
      </section>

      {/* ═══ FORMULES DU MIDI ═══ */}
      <section className="relative py-16 bg-amarillo overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-10">
            <span className="text-4xl">☀️</span>
            <h2 className="font-bernier text-subsection text-cuir mt-2">Formules du Midi</h2>
            <p className="font-fjalla tracking-wider text-cuir/70 text-sm mt-1">Du mardi au vendredi • 12h–14h</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {formulesMidi.map((f, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                <div className="bg-cuir rounded-2xl p-6 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-flor opacity-10 translate-x-6 -translate-y-6" />
                  <span className="font-fjalla text-3xl text-flor">{f.price}</span>
                  <p className="font-futura text-xs text-tortilla/70 mt-2 leading-relaxed">{f.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <SunDivider className="my-6" />

          {/* Formule Enfant */}
          <AnimatedSection animation="fade-up">
            <div
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #F23376 0%, #844999 100%)' }}
            >
              <div className="absolute top-0 right-0 font-bernier text-8xl text-white opacity-5 pointer-events-none leading-none">
                NIÑOS
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">👶</span>
                  <div>
                    <h3 className="font-bernier text-2xl text-white">Formule Enfant</h3>
                    <span className="font-fjalla text-amarillo text-lg">8,90€</span>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    'Burrito avec effiloché au choix + accompagnement',
                    'Pizza Ze Pequenho (base tomate, mozzarella, jambon)',
                    'Effiloché de bœuf, riz, sauce tomate',
                  ].map((option, i) => (
                    <div
                      key={i}
                      className="bg-white/15 rounded-xl p-3 font-futura text-xs text-white leading-relaxed"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ CTA BAS DE PAGE ═══ */}
      <section className="py-20 bg-cuir text-center">
        <AnimatedSection animation="fade-up">
          <p className="font-fjalla tracking-[0.3em] uppercase text-flor text-sm mb-4">Envie de venir ?</p>
          <h2 className="font-bernier text-section text-white mb-6">Réservez votre table</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0251000000"
              className="inline-flex items-center justify-center gap-2 bg-flor hover:bg-flor-dark text-white font-fjalla tracking-widest uppercase px-8 py-4 rounded-full transition-all hover:scale-105 shadow-orange-glow text-sm"
            >
              📞 Appeler
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-tortilla text-tortilla hover:bg-tortilla hover:text-cuir font-fjalla tracking-widest uppercase px-8 py-4 rounded-full transition-all hover:scale-105 text-sm"
            >
              ✉️ Nous écrire
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
