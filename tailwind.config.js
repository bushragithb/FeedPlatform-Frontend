/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        // sm: "2rem",
        // lg: "4rem",
        // xl: "5rem",
        // "2xl": "6rem",
      },
    },

    extend: {
      screens: {
        "xs": "430px",
        "sm": "640px",
        "md": "768px",
        "lg": "968px",
        "xl": "1024px",
        "2xl": "1320px",
      },
      
    },
  },
  plugins: [],
}

