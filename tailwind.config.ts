import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cuir: '#541A24',
        'cuir-light': '#7a2535',
        flor: '#F07E2C',
        'flor-dark': '#d06820',
        tortilla: '#EFDFC6',
        violeta: '#844999',
        kaki: '#47471E',
        verde: '#19A95B',
        azul: '#4280C7',
        turquesa: '#7BCCC0',
        naranja: '#FFAB03',
        rojo: '#FF461C',
        rosa: '#F23376',
        'rosa-polvos': '#FFB6BB',
        amarillo: '#FCEA5B',
      },
      fontFamily: {
        bernier: ['"Bungee Shade"', 'Rubik Dirt', 'cursive'],
        fjalla: ['"Fjalla One"', 'sans-serif'],
        futura: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-festive': 'linear-gradient(135deg, #541A24 0%, #844999 50%, #F07E2C 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(84,26,36,0.85) 0%, rgba(84,26,36,0.6) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'sway': 'sway 2.5s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'banner-scroll': 'bannerScroll 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(240,126,44,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(240,126,44,0.8)' },
        },
        bannerScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'festive': '0 8px 32px rgba(84,26,36,0.3)',
        'orange-glow': '0 4px 20px rgba(240,126,44,0.5)',
        'card': '0 4px 24px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
export default config
