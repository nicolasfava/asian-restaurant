/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FFBC58",
        secondary: "#ffffff",
        tertiary: "#0F0B0A",
        dimWhite: "rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        markazi: ["Markazi Text", "serif"],
        poppins: ["Poppins", "san-serif"]
      },
    },
    screens: {
      xs: "320px",
      sm: "768px",
      md: "1024px",
      lg: "1440px",
      xl: "2000px"
    },
  },
  plugins: [],
}

