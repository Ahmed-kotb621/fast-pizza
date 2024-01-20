/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    extend: {
      colors: {
        pizza: 'rgb(232 232 237/70%)',
      },
    },
  },
  plugins: [],
};
