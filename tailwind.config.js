/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'red':'#FD3B3B',
      'gray':'#222222',
      'white':'#FFFFFF',
      'back':'#F8F8F8'
    }
  },
  plugins: [],
}