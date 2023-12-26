/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%": { transform: "translate(0, 0) rotate(0)" },
          "20%": { transform: "translate(-10px, 0) rotate(-20deg)" },
          "30%": { transform: "translate(10px, 0) rotate(20deg)" },
          "50%": { transform: "translate(-10px, 0) rotate(-10deg)" },
          "60%": { transform: "translate(10px, 0) rotate(10deg)" },
          "100%": { transform: "translate(0, 0) rotate(0)" },
        },
      },
      animation: {
        shake: "shake 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
