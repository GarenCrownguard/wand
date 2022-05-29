import React from "react";
import { Row, Column } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";

import { prettifyGrowthPercentage } from "resources/utilities";

const useStyles = createUseStyles((theme) => ({
  container: {
    maxHeight: 106,

    background:
      "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */",

    borderRadius: 5,

    margin: 0,
    // padding: "16px 32px 16px 32px",

    maxWidth: 350,

    "@media (min-width: 675px)": {
      marginTop: 10,
      "&:nth-child(n+2)": {
        // backgroundColor: 'red',
        marginRight: 0,
        marginLeft: 13,
      },
      marginBottom: 20,
    },

    "@media (min-width: 1380px)": {
      "&:nth-child(n+2)": {
        marginLeft: 'auto',
      },
    },
    
    "@media (max-width: 675px)": {
      marginRight: 0,
      marginLeft: 0,
      maxWidth: "none",
      // marginBottom: 20,
      marginTop: 30,

      "&:nth-child(n+2)": {
        marginTop: 20,
      },
    },

    borderStyle: "solid",
    borderColor: "rgba(165, 239, 255, 0.2)",
    padding: 28,
  },
  title: {
    ...theme.typography.smallgreytitle,
    minWidth: 102,
    textAlign: "flex-start",
  },
  value: {
    ...theme.typography.boldamountvalue,
    textAlign: "flex-start",
  },
  growthPositvie: {
    fontWeight: 500,
    fontSize: 12,
    marginLeft: 6,
    letterSpacing: "0.02em",

    color: "#2AE0BF",
  },
  growthNegative: {
    fontWeight: 500,
    fontSize: 12,
    marginLeft: 6,

    letterSpacing: "0.02em",
    color: "#AE3C51",
  },
}));

function MiniInfoCardComponent({
  className = "",
  title,
  value,
  growthDirection,
  growthValue,
}) {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const composedClassName = [classes.container, className].join(" ");
  return (
    <Column flexGrow={1} className={composedClassName} vertical="center">
      <span className={classes.title}>{title}</span>
      <Row wrap flexGrow={1}>
        <span className={classes.value}>{value}</span>
        {growthDirection === "positive" && (
          <span className={classes.growthPositvie}>
            {prettifyGrowthPercentage(growthDirection, growthValue)}
          </span>
        )}
        {growthDirection === "negative" && (
          <span className={classes.growthNegative}>
            {prettifyGrowthPercentage(growthDirection, growthValue)}
          </span>
        )}
      </Row>
    </Column>
  );
}

export default MiniInfoCardComponent;
