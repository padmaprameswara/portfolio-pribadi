/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#dc2626",
        dark: "#030712",
      },
      screen: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
