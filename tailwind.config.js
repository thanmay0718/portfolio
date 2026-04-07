/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
      },
      fontFamily: {
        sans: ['Inter', 'San Francisco', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
