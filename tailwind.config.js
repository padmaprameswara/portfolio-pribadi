/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "selector",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#dc2626",
        dark: "#1f2937",
      },
      screen: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
