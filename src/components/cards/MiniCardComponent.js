/* 

this card has following:
1. middle alignment
3. title
4. value

*/

import React from "react";
import { Row, Column } from "simple-flexbox";
import { createUseStyles } from "react-jss";

// import { prettifyGrowthPercentage } from "resources/utilities";

const useStyles = createUseStyles((theme) => ({
  container: {
    background:
      "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */",
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "rgba(165, 239, 255, 0.2)",
    padding: 5,
    marginRight:0,
    marginBottom: 17,
    maxHeight: 111,
    // padding: 28,

    "@media (min-width: 450px)": {
      // desktop
      marginBottom: 20,
      minWidth: 225,
      "&:nth-child(n+2)": {
        // 2nd and 3rd
        // backgroundColor: "red",
        marginRight: 0,
        marginLeft: 15,
      },
    },
    "@media (max-width: 450px)": {
      // mobile
      marginRight: 0,
      marginLeft: 0,
      maxWidth: "none",
      marginBottom: 6.5,
      marginTop: 6.5,

      "&:nth-child(n+2)": {
        // 2nd and 3rd
        // backgroundColor: "blue",
      },
    },
  },
  title: {
    color: "#B1AFCD",
    marginBottom: 6,
    fontSize: 12,
    textAlign: "center",
    minWidth: 102,
  },
  value: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 24,
    letterSpacing: "0.02em",
    lineHeight: "29px",
    textAlign: "center",
  },
}));

function MiniCardComponent({ className = "", title, value }) {
  
  const classes = useStyles();
  const composedClassName = [classes.container, className].join(" ");
  return (
    <Column flexGrow={1} className={composedClassName} vertical="center">
      {title && <span className={classes.title}>{title}</span>}
      <Row flexGrow={1} justifyContent="center">
        {value && <span className={classes.value}>{value}</span>}
      </Row>
    </Column>
  );
}

export default MiniCardComponent;
