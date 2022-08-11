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

const color = {
  transparent: "transparent",
  white: "white",
  black: "black",

  red: "#AE3C51",
  green: "#2AE0BF",
  grey: "#b1afcd",
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
  color,
  typography,
  styles: {
    global: () => ({
      body: {
        bg: color.black,
        color: color.white,
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
        color: color.white,
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
          color: "#2ae0bf",
        },
        negativeGrowth: {
          fontWeight: 500,
          fontSize: 12,
          marginLeft: "6px",
          color: "#AE3C51",
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
