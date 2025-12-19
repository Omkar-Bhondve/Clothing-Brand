/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-black": "#000000",
        "brand-white": "#FFFFFF",
        "brand-gold": "#E9C46A",
        "brand-gray": "#F5F5F5",
        "brand-medium-gray": "#999999",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
