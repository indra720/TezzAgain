/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#06122E',
          900: '#0B1B4D',
          800: '#12296B',
        },
        royal: '#1647E8',
        blue: {
          DEFAULT: '#2D6BFF',
          brand: '#2D6BFF',
          light: '#7FB0FF',
        },
        sky: {
          100: '#EAF2FF',
          200: '#D6E6FF',
        },
        leaf: '#3DDC5A',
        card: {
          DEFAULT: '#FFFFFF',
          border: '#E3EAF8',
        },
        text: {
          dark: '#FFFFFF',
          'dark-muted': '#C9D6F2',
          light: '#0A1226',
          'light-muted': '#44506E',
        }
      },
      backgroundImage: {
        'gradient-deep': 'linear-gradient(160deg, #06122E, #0B1B4D 55%, #1647E8)',
        'gradient-brand': 'linear-gradient(135deg, #1647E8, #2D6BFF)',
        'gradient-light': 'linear-gradient(180deg, #EAF2FF 0%, #D6E6FF 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0 12px 32px rgba(6, 18, 46, 0.22)',
        'card-hover': '0 18px 40px rgba(6, 18, 46, 0.28)',
        'brand-glow': '0 8px 24px rgba(22, 71, 232, 0.35)',
      },
      borderRadius: {
        card: '16px',
        btn: '12px',
      }
    },
  },
  plugins: [],
}
