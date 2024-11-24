/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('/public/bg-image.png')",
        bg2: "url('/public/bg-image2.png')",
        bg3: "url('/public/bg-image.png')",
        bg4 : "url('/public/bg-3.png')"
      },
    },
  },
  plugins: [],
}