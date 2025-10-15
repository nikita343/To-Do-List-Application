export default {
  theme: {
    extend: {
      fontFamily: {
        aspekta: ['"Aspekta"', "sans-serif"],
      },
      colors: {
        neutral: {
          100: "#f8fafc", // white/off-white (similar to Slate 50)
          200: "#f8fafa", // light grey (using f8fafa from image)
          300: "#ecf1fa", // very light blue-grey
          400: "#cbd4e1",
          500: "#9aa4b1",
          600: "#737883",
          700: "#52555b",
          800: "#2b2b3b",
          900: "#000000", // black
        },

        primary: {
          1: "#1fa2b3",
          2: "#031c8c", // Deep Indigo
          3: "#0f1053", // Very Dark Navy
          4: "#a6d8fd", // Pale Blue
        },

        accent: {
          yellow: "#fed700", // Bright Yellow
          "yellow-light": "#fef8cf", // Light Yellow
          red: "#fe0201", // Pure Red
          "red-light": "#fff4f4", // Very Light Red/Pink
        },
      },
    },
  },
};
