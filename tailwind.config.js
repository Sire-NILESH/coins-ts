/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgLightMode: "#edf3ff",
        primaryTheme: "var(--color-primary)",
        primaryThemeHover: "var(--color-primaryHover)",
      },
      fontFamily: {
        poppins: ["Poppins"],
        inter: ["Inter"],
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        accent: "rgb(var(--color-bg-accent) / 50)",
        button: "var(--color-bg-button)",
        btnHover: "var(--color-bg-button-hover)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        tertiary: "var(--color-text-tertiary)",
        quaternary: "var(--color-text-quaternary)",
        textLighter: "var(--color-text-textLighter)",
        textLightest: "var(--color-text-textLightest)",
        btnText: "var(--color-bg-secondary)",
      },
      borderColor: {
        primary: "var(--color-borderColor)",
        // secondary: "var(--color-bg-secondary)",
        // input: "var(--color-bg-input)",
        // accent: "var(--color-text-accent)",
      },
    },
  },
  plugins: [],
};
