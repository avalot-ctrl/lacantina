import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'La Cantina — Brasserie Latina | La Roche-sur-Yon',
    template: '%s | La Cantina — Brasserie Latina',
  },
  description:
    'La Cantina, Brasserie Latina à La Roche-sur-Yon. Cuisine Tex-Mex & Sud-Américaine, ambiance festive, saveurs du Mexique et d\'Amérique du Sud. Tacos, burritos, pizzas latina, cocktails & margaritas.',
  keywords: [
    'restaurant La Roche-sur-Yon',
    'Tex-Mex Vendée',
    'brasserie latina',
    'tacos burritos',
    'cantina',
    'restaurant mexicain',
    'restaurant sud-américain',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'La Cantina — Brasserie Latina',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Bungee&family=Fjalla+One&family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-futura antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
