module.exports = {
  purge: ["./{pages,components}/**/*.{js,jsx,ts,tsx}"],
  content: [],
  theme: {
    fontFamily: {
      'sans': ['Noto Sans KR', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
        horizontalExpand: "horizontalExpand 1s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        horizontalExpand: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" }
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
