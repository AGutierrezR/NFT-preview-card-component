/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(178, 100%, 50%)',
        white: 'hsl(0, 0%, 100%)',
        blue: {
          300: 'hsl(215, 51%, 70%)',
          500: 'hsl(215, 32%, 27%)',
          600: 'hsl(216, 50%, 16%)',
          700: 'hsl(217, 54%, 11%)',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        sm: '0.6875rem',
        base: 'var(--fs-400)',
        xl: 'var(--fs-600)'
      },
      letterSpacing: {
        tighter: '-.025rem',
        tight: '-.0125rem',
      },
      boxShadow: {
        DEFAULT: '0 5.9px 7.9px rgb(0 0 0 / 12%), 0 47px 63px rgb(0 0 0 / 24%)',
      },
    },
  },
  plugins: [],
}
