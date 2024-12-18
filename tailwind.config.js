/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        btnBg: "#002639",
        primary: "#00B7EA",
        black: "#000",
        white: "#FFFFFF",
        // secondary: "#aaa6c3",3EC9FF
        // tertiary: "#151030",
      },
      boxShadow: {
        // card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        // xs: "450px",
      },
      backgroundImage: {
        // "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        zain: ["Zain", "sans-serif"],
        changa: ["Changa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
