/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Matrix green — remapped onto the `blue` accent used across components
        // so every existing `blue-*` class turns Matrix green automatically.
        blue: {
          50: '#e8ffe8',
          100: '#c2ffc2',
          200: '#7dff7d',
          300: '#39ff5a',
          400: '#00ff41',
          500: '#00e03a',
          600: '#00b82f',
          700: '#008f24',
          800: '#006618',
          900: '#003b00',
        },
        matrix: {
          bg: '#050805',
          dark: '#0d0208',
          dim: '#008f11',
          green: '#00ff41',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'flicker': 'flicker 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.4' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.7' },
          '97%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};