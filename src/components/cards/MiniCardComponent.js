/* 

this card has following:
1. middle alignment
3. title
4. value

*/

import React from "react";
import { Row, Column } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";

import { prettifyGrowthPercentage } from "resources/utilities";

const useStyles = createUseStyles((theme) => ({
  container: {
    ...theme.typography.cardBackground,
    maxHeight: 111,
    padding: 28,

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
    ...theme.typography.smallgreytitle,
    minWidth: 102,
  },
  value: {
    ...theme.typography.boldamountvalue,
  },
}));

function MiniCardComponent({ className = "", title, value }) {
  const theme = useTheme();
  const classes = useStyles({ theme });
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
