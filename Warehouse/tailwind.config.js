/** @type {import('tailwindcss').Config} */ 
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    fontFamily: {
      sans: ["Noto Sans Thai", "sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'custom-purple': '#473366',
    },
    extend: {
    },
  },
  plugins: [],
}
