const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    fontFamily: {
      techMono: ['Share Tech Mono', 'monospace', 'sans-serif'],
      montserrat: ['Montserrat', 'serif']
    },
    extend: {
      screens: {
        'minwidth': '700px',
      },
      colors: {
        cyan: colors.cyan,
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      minHeight: {
       '0': '0',
       '7': '7vh',
       '93': '93vh',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      transformOrigin: {
       '24': '24px',
      },
    },
  },
}
