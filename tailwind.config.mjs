/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D9AB1",
        secondary: "#EDD1BB",
        white: "#FFFFFF",
        black: "#000000",
        textColor: "#807778",
        textSec: "#2D394B",
      },
    },
  },
  plugins: [],
};
