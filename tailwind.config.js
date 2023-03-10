/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1400px'
      },
    }
  },
  plugins: [],
}