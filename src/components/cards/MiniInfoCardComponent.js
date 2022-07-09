/* 

this card has following:
1. left alignment
2. growth/ sell %
3. title
4. value

*/

import React from "react";
import { Row, Column } from "simple-flexbox";
import { createUseStyles } from "react-jss";

import { prettifyGrowthPercentage } from "resources/utilities";

const useStyles = createUseStyles((theme) => ({
  container: {
    ...theme.typography.cardBackground,
    maxHeight: 106,
    maxWidth: 350,
    padding: 28,

    "@media (min-width: 450px)": {
      marginTop: 13,
      // desktop
      marginBottom: 20,
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

    color: "#2ae0bf",
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
  
  const classes = useStyles();
  const composedClassName = [classes.container, className].join(" ");
  return (
    <Column flexGrow={1} className={composedClassName} vertical="center">
      <span className={classes.title}>{title}</span>
      <Row wrap flexGrow={1}>
        <span className={classes.value}>{value}</span>
        {growthDirection === "positive" && growthValue && (
          <span className={classes.growthPositvie}>
            {prettifyGrowthPercentage(growthDirection, growthValue)}
          </span>
        )}
        {growthDirection === "negative" && growthValue && (
          <span className={classes.growthNegative}>
            {prettifyGrowthPercentage(growthDirection, growthValue)}
          </span>
        )}
      </Row>
    </Column>
  );
}

export default MiniInfoCardComponent;
