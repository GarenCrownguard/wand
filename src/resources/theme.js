const color = {
  /* colors scheme */
  cwhite: "#ffffff",
  cgrayish: "#b1afcd",
  cbeije: "#f5f4f0",
  cpinkish: "#ff409a",
  turquoise: "#2ae0bf",
  englishred: "#AE3C51",
  darkjunglegreen: "#0B1A28",

  brightBlue: "#3498db",
  darkGrayishBlue: "#8b8d94",
  darkRed: "#a90000",
  grayishBlue: "#A4A6B3",
  grayishBlue2: "#9fa2b4",
  grayishBlue3: "#bdc3c7",
  lightBlue: "#3751FF",
  lightGrayishBlue: "#F7F8FC", // background color
  lightGrayishBlue2: "#DFE0EB",
  paleBlue: "#DDE2FF",
  paleBlueTransparent: "rgba(221, 226, 255, 0.08)",
  veryDarkGrayishBlue: "#373a47",
};

const typography = {
  //   cardTitle: {
  //     fontWeight: "bold",
  //     fontSize: 19,
  //     lineHeight: "24px",
  //     letterSpacing: "0.4px",
  //   },
  //   smallSubtitle: {
  //     fontSize: 12,
  //     lineHeight: "16px",
  //     letterSpacing: "0.1px",
  //   },
  //   link: {
  //     fontWeight: "600",
  //     fontSize: 14,
  //     lineHeight: "20px",
  //     letterSpacing: "0.2px",
  //     color: color.lightBlue,
  //     textAlign: "right",
  //     cursor: "pointer",
  //     textDecoration: "underline",
  //     "&:hover": {
  //       color: color.grayishBlue,
  //     },
  //   },
  //   itemTitle: {
  //     fontWeight: 600,
  //     fontSize: 14,
  //     lineHeight: "20px",
  //     letterSpacing: 0.2,
  //   },
  title: {
    fontFamily: '"Azo Sans", Fallback, Sofia',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 26,
    letterSpacing: "0.02em",
    marginTop: 30,
    marginBottom: 30
  },
  smallgreytitle:{
    color: "#B1AFCD",
    marginBottom: 6,
    fontSize: 12,
    textAlign: "center",
  },
  boldamountvalue:{
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 24,
    letterSpacing: "0.02em",
    lineHeight: "29px",
    textAlign: "center",
  },
  cardBackground:{
    background:
      "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */",
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "rgba(165, 239, 255, 0.2)",
    padding: 5,
    marginRight:0,
    marginBottom: 17
  }
};

export default {
  // https://www.colorhexa.com/A4A6B3
  color,
  typography,
};
