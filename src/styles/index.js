import { extendTheme } from "@chakra-ui/react";

const typography = {
  fontFamily: "Azo Sans, Fallback, Sofia",
  fontStyle: "normal",
  wt400: 400,
  wt500: 500,
  wt700: 700,
  fsizesmall: 16,
  fsizemedium: 19,
  fsizebig: 26
};

const color = {
  transparent: "transparent",
  white: "white",
  black: "black",

  red: "#AE3C51",
  green: "#2AE0BF",
  grey: "#b1afcd",
};

export default extendTheme({
  breakpoints: {
    sm: "320px",
    md: "768px",
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
  typography: {
    atomicText: {
      fontStyle: typography.fontStyle,
      fontWeight: typography.wt500,
      fontSize: typography.fsizemedium,
      letterSpacing: "0.02em",
      color: color.white,
    },
    atomicCard: {
      // background: "rgb(165,239,255)",
      // background:
      //   "-moz-radial-gradient(circle, rgba(165,239,255,0.2024160005799195) 0%, rgba(110,191,244,0.2) 82%, rgba(70,144,212,0.2) 100%)",
      // background:
      //   "-webkit-radial-gradient(circle, rgba(165,239,255,0.2024160005799195) 0%, rgba(110,191,244,0.2) 82%, rgba(70,144,212,0.2) 100%)",
      // background:
      //   "radial-gradient(circle, rgba(165,239,255,0.2024160005799195) 0%, rgba(110,191,244,0.2) 82%, rgba(70,144,212,0.2) 100%)",
      // filter:
      //   'progid:DXImageTransform.Microsoft.gradient(startColorstr="#a5efff",endColorstr="#4690d4",GradientType=1)',
      background:
        "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)",
      borderRadius: 5,
      padding: 31,
      border: "2px solid rgba(165, 239, 255, 0.2)",
    },
    title: {
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: "0.02em",
      marginTop: 60,
      marginBottom: 30,
      // letterSpacing: 0.2,
    },
    smallgreytitle: {
      color: "#B1AFCD",
      marginBottom: 6,
      fontSize: 12,
      textAlign: "center",
    },
    boldamountvalue: {
      color: "#FFFFFF",
      fontWeight: "700",
      fontSize: 24,
      letterSpacing: "0.02em",
      lineHeight: "29px",
      textAlign: "center",
    },
  },
});
