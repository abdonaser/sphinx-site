/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      height: {
        "60vh": "60vh", // Adds `h-80vh` utility
        "65vh": "65vh", // Adds `h-80vh` utility
        "70vh": "70vh", // Adds `h-80vh` utility
        "75vh": "75vh", // Adds `h-80vh` utility
        "80vh": "80vh", // Adds `h-80vh` utility
        "85vh": "85vh", // Adds `h-80vh` utility
        "90vh": "90vh", // Adds `h-80vh` utility
        "95vh": "95vh", // Adds `h-80vh` utility
        "100vh": "100vh", // Adds `h-80vh` utility
      },
      spacing: {
        // Custom margin values
        18: "4.5rem", // Adds 'ml-18', 'mr-18', etc.
        22: "5.5rem",
        30: "7.5rem",
        35: "8.75rem",
        50: "12.5rem",
      },
      colors: {
        btnBg: "#002639",
        primary: "#00B7EA",
        black: "#000",
        white: "#FFFFFF",
        secondary: "#36768E",
        // secondary: "#aaa6c3",3EC9FF 002639
        // tertiary: "#151030",
      },
      boxShadow: {
        // card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        start: "0px",
        mxs: "200px",
        xs: "450px",
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
