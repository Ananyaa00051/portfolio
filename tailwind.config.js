/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#0a0a0a',
        text: '#f0ece4',
        accent: '#9d4edd', // Deep electric purple
      },
      fontFamily: {
        heading: ['"Clash Display"', 'sans-serif'],
        body: ['"Instrument Serif"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
