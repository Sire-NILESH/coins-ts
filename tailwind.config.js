/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgLightMode: "#edf3ff",
      },
      fontFamily: {
        poppins: ["Poppins"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
