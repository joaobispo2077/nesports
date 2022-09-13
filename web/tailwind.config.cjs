/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundGalaxy: "url(/background-galaxy.png)"
      }
    }
  },
  plugins: []
}
