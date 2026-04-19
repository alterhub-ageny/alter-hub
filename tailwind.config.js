/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#08101C',
        ink: '#142236',
        ember: '#D4A855',
        champagne: '#F4D98A',
        bone: '#EDE3CC',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Times New Roman"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
