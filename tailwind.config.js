/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        sm: '0px 0px 12px rgba(193, 193, 193, 0.2)',
        md: '0px 0px 20px rgba(193, 193, 193, 0.2)',
        lg: '0px 0px 30px rgba(193, 193, 193, 0.2)',
        xl: '0px 0px 40px rgba(193, 193, 193, 0.2)',
      },
      fontSize: {
        none: '0',
        xs: ['0.5625rem', { lineHeight: '1rem' }], // font-size: 9px
        sm: ['0.625rem', { lineHeight: '1rem' }], // font-size: 10px
        base: ['0.75rem', { lineHeight: '1.125rem' }], // font-size: 12px
        h6: ['0.875rem', { lineHeight: '1.25rem' }], // font-size: 14px
        h5: ['1rem', { lineHeight: '1.25rem' }], // font-size: 16px
        h4: ['1.125rem', { lineHeight: '1.5rem' }], // font-size: 18px
        h3: ['1.25rem', { lineHeight: '1.75rem' }], // font-size: 20px
        h2: ['1.5rem', { lineHeight: '2rem' }], // font-size: 24px
        h1: ['3.125rem', { lineHeight: '3rem' }], // font-size: 28px
      },
    },
  },
  plugins: [],
}

