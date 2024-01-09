/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hoki: {
          500: '#668499',
        },
        woodsmoke: {
          950: '#0B0D11',
        },
        seashellPeach: {
          50: '#fff4ed',
        },
        flesh: {
          200: '#fbbc95',
        },
        karry: {
          200: '#FEE7D6',
        },
        lavender: {
          300: '#FAABFC',
        },
        shark: {
          950: '#1E242E',
        },
        charcoal: {
          950: '#020a15',
        },
        brightGray: {
          900: '#303A4A',
        },
      },
    },
  },
  plugins: [],
};
