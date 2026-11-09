/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ndc: {
          red: {
            50: '#fff1f2',
            100: '#ffe4e6',
            500: '#e40613',
            600: '#c8000f',
            700: '#a3000b',
            800: '#83020b',
            900: '#540005',
          },
        },
        navy: {
          50: '#f0f5fa',
          100: '#e1ecf5',
          200: '#c3d9eb',
          300: '#8fa8c2',
          400: '#5f7fa3',
          500: '#3c5d82',
          600: '#28456a',
          700: '#1b3452',
          800: '#13253b',
          900: '#0b1624',
          950: '#070d17',
        },
        gold: {
          50: '#fdf8ee',
          100: '#faf0d6',
          200: '#f3dda3',
          300: '#e8c06a',
          400: '#dba13a',
          500: '#d97706',
          600: '#b45309',
          700: '#8a3f0b',
          800: '#6b3209',
          900: '#4a2206',
          950: '#2c1403',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'elevated': '0 20px 40px -15px rgba(11, 22, 36, 0.12)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}

