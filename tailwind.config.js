/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-orbitron)"],
      },
      backgroundImage: {
        "divider-pattern":
          "linear-gradient(90deg,rgba(71,71,65,0),#474741 50%,rgba(71,71,65,0))",
        "tiles-pattern": "url('/supporting/bg-tile.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
