/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        13: "repeat(13, minmax(0,1fr))",
      },
      gridRow: {
        "span-7": "span8 / span 8",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      boxShadow: {
        "custom-shadow": "0px 5px 15px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
