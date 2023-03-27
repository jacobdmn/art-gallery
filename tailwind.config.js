module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,scss,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        love: '#EF5DA8',
        cold: '#8D8B8C',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
