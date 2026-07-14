/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#fdf2f8',
        rose: '#f9a8d4',
        lavender: '#e9d5ff',
        mauve: '#f5e8ff',
      },
      fontFamily: {
        display: ['"Segoe UI"', 'sans-serif'],
        body: ['"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px rgba(244, 114, 182, 0.16)',
      },
    },
  },
  plugins: [],
};
