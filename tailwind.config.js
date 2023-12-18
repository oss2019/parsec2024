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
      boxShadow: {
        medium:
          "0px 0px 15px 0px rgba(0,0,0,.06),0px 2px 30px 0px rgba(0,0,0,.22),inset 0px 0px 1px 0px hsla(0,0%,100%,.15)",
      },
    },
  },
  plugins: [],
}
