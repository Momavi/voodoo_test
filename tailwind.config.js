/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#131516',
        card: '#222222',
        contrast: '#42b983',
      }
    },
  },
  plugins: [],
}