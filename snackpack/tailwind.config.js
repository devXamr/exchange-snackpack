/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerBg1': "url('./src/assets/snackpack-header.jpg')"
      }
    },
  },
  plugins: [],
}

