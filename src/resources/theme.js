const color = {
  /* colors scheme */

  white: "#ffffff",
  black: "000000",

  red: "#AE3C51",
  green: "#2AE0BF",
  grey: "#b1afcd",
};

const constants = {
  breakpointResponsive: 450,
  fontFamily: 'Azo Sans", Fallback, Sofia',
  fwtr400: 400,
  fwtm500: 500,
  fwtb700: 700,
  fsize: 16,
};

const typography = {
  /* FontSize:
   * Big: 26
   * Medium: 19
   * Small: 12
   */

  atomicText: {
    fontFamily: "Azo Sans",
    fontStyle: "normal",
    fontWeight: constants.fwtm500,
    fontSize: 19,
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
    fontFamily: "Azo Sans",
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
};

export default {
  color,
  typography,
  constants,
};
