/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        page_lg: "1600px",
        page: "1300px",
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        hero: ["Orbitron", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
