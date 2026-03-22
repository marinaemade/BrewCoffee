/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homeBg': "url('/homeBg.png')",
        'footerBg': "url('/FooterBg.png')",
      },
    },
  },
  plugins: [
    daisyui, 
  ],

  daisyui: {
    themes: ["retro", "luxury"],
  },
}