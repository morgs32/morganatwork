/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        xl: '1.4rem',
      },
      colors: {
        dark: '#334155',
      },
    },
  },
  plugins: [],
}
