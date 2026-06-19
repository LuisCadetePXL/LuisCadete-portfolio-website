/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        neural: {
          50:  '#e8f4ff',
          100: '#c3e0ff',
          200: '#8ec6ff',
          300: '#52a8ff',
          400: '#1a8cff',
          500: '#0070f3',
          600: '#0058cc',
          700: '#0041a8',
          800: '#002d82',
          900: '#001a5c',
        },
        accent: '#00d4ff',
        glow:   '#7c3aed',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'float':      'float 6s ease-in-out infinite',
        'glow':       'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        glow: {
          from: { textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff' },
          to:   { textShadow: '0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 60px #00d4ff' },
        },
      },
    },
  },
  plugins: [],
}
