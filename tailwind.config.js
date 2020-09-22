const textPrimaryPurple = "#42316C"
const textPrimaryGray = "#FCF3EF"
const textSecondaryPurple = "#554087"
const textSecondaryGray = "#FCF3EF"
const textPrimaryCyan = "#2AA9A9"
const backgroundCyan = "#2AA9A9"
const backgroundWhite = "#F2F2F2"
const backgroundWhiteTwo = "#F9F9F9"
const backgroundGray = "#F0F0F0"
const lineGray = "#E7E7E7"

module.exports = {
  important: true,
  theme: {
    fontFamily: {
      primary: ["Montserrat"],
      secondary: ["Inconsolata"],
    },
    colors: {
      title_purple: {
        primary: textPrimaryPurple,
        secondary: textSecondaryPurple,
      },
      title_gray: {
        primary: textPrimaryGray,
        secondary: textSecondaryGray,
      },
      subtitle_purple: {
        primary: textPrimaryPurple,
        secondary: textSecondaryPurple,
      },
      subtitle_gray: {
        primary: textPrimaryGray,
        secondary: textSecondaryGray,
      },
      text_cyan: {
        primary: textPrimaryCyan,
      },
      text_purple: {
        primary: textPrimaryPurple,
        secondary: textSecondaryPurple,
      },
      text_gray: {
        primary: textPrimaryGray,
        secondary: textSecondaryGray,
      },
      white: "#ffffff",
      background_gray: backgroundGray,
      background_white: backgroundWhite,
      background_cyan: backgroundCyan,
      line_gray: lineGray,
      background_card: backgroundWhiteTwo,
    },
    extend: {
      fontSize: {
        mainTitle: "3.75rem",
        post_title: "4.5rem",
      },
      height: {
        card: "22.1rem",
        tag: "21.25rem",
        user_card: "16.625rem",
        user_section: "18.6rem",
        user_section_mobile: "56rem",
      },
      width: {
        card: "18rem",
        user_card: "20.1rem",
        tag: "34.125rem",
      },
      boxShadow: {
        card: "8px 8px 0px rgba(55,210,210, 0.5)",
        card_user: "8px 8px 0px (66, 49,108, 0.3)",
      },
      inset: {
        user_avatar: "-2.5rem",
      },
    },
  },
  variants: {},
}
