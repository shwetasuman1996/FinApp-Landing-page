/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:   '#0d2f6e',
          blue:   '#1351b8',
          bright: '#0077ff',
          teal:   '#19b5b2',
          tealDark: '#1c988c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0d2f6e 0%, #1351b8 45%, #19b5b2 100%)',
        'cta-gradient':  'linear-gradient(120deg, #0077ff 0%, #19b5b2 100%)',
        'card-gradient': 'linear-gradient(120deg, #fff7ef 0%, #eef8ff 48%, #f9f0ff 100%)',
      },
      boxShadow: {
        card: '0 8px 32px rgba(19,81,184,0.10)',
        'card-hover': '0 16px 48px rgba(19,81,184,0.18)',
      },
    },
  },
  plugins: [],
}
