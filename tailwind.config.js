module.exports = {
  purge: ["./{pages,components}/**/*.{js,jsx,ts,tsx}"],
  content: [],
  theme: {
    fontFamily: {
      'sans': ['Noto Sans KR', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 0.7s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1 }
        }
      }
    },
  },
  variantes: {
    extend: {
      animation: ["motion-safe"]
    }
  },
  plugins: [],
}
