import { extendTheme } from "@chakra-ui/react";

const typography = {
  fontFamily: "Azo Sans, Fallback, Sofia",
  fontStyle: "normal",
  wt400: 400,
  wt500: 500,
  wt700: 700,
  fsizesmall: 16,
  fsizemedium: 19,
  fsizebig: 26,
};
const colors = {
  transparent: "transparent",
  white: "white",
  black: "black",

  wandRed: "#AE3C51",
  wandGreen: "#2AE0BF",
  wandGrey: "#b1afcd",
};

const theme = extendTheme({
  breakpoints: {
    md: "770px",
    lg: "1024px",
    xl: "1440px",
    "2xl": "1536px",
  },
  fonts: {
    heading: typography.fontFamily,
    body: typography.fontFamily,
  },
  colors,
  typography,
  styles: {
    global: () => ({
      body: {
        bg: colors.black,
        color: colors.white,
      },
    }),
  },
  components: {
    Text: {
      baseStyle: {
        letterSpacing: "0.02em",
        fontFamily: typography.fontFamily,
        fontStyle: "normal",
        fontSize: 19,
        color: colors.white,
      },
      variants: {
        "investment-heading-text": {
          color: "white",
          fontWeight: 700,
          fontSize: "17px",
        },
        title: {
          color: "#B1AFCD",
          mb: "6px",
          fontSize: 12,
          textAlign: "center",
        },
        value: {
          color: "#FFFFFF",
          fontWeight: "700",
          fontSize: 24,
          lineHeight: "29px",
          textAlign: "center",
        },
        positiveGrowth: {
          fontWeight: 500,
          fontSize: 12,
          marginLeft: "6px",
          color: colors.wandGreen,
        },
        negativeGrowth: {
          fontWeight: 500,
          fontSize: 12,
          marginLeft: "6px",
          color: colors.wandRed,
        },
      },
    },
    Divider: {
      baseStyle: {
        borderColor: "#6f6c99",
      },
    },
  },
});

export default theme;
