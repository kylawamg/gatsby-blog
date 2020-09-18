module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ["Staatliches", "sans-serif"],
      body: ["Staatliches", "sans-serif"],
    },
    colors: {
      primary: "#000000",
      secondary: "#ff00ff"
    },
    extend: {
      colors: {
        indigo: {
          lighter: "#b3bcf5",
          default: "#5c6ac4",
          dark: "#202e78",
        },
      },
      margin: {
        "96": "24rem",
        "128": "32rem",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover"],
  },
}
