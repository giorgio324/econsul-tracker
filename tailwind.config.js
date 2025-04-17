/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'medium-cream': '#FBF7EF',
        'light-gray': '#877777',
        'medium-gray': '#9A9A9A',
        terms: '#989898',
        copyright: '#AAAAAA',
        'translusive-gray': '#321C1C21',
        'light-brown': '#321C1C',
        'medium-green': '#24B874',
        'dark-cream': '#D9D1C2',
        'light-white': '#FEFEFE',
        'current-step': '#FFC700',
        'uncompleted-step': '#E4E4E4',
      },
    },
  },
  plugins: [],
};
