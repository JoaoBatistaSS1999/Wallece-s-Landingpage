/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Orbitron: ["Orbitron", "sans-serif"],
      ChakraPetch: ["Chakra Petch", "sans-serif"],
    },
    animation: {
      border: "border 4s ease infinite",
    },
    keyframes: {
      border: {
        "0%, 100%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
