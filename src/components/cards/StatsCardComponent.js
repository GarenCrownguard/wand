import React from "react";
import { Column } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    maxWidth: 350,
    // padding: "20px 32px 6px 32px",
  },
  title: {
    color: "#B1AFCD",
    marginBottom: 6,
    fontSize: 12,
    textAlign: "center",
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

function StatsCardComponent({ className = "", title, value }) {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const composedClassName = [classes.container, className].join(" ");
  return (
    <Column
      flexGrow={1}
      className={composedClassName}
      horizontal="center"
      vertical="center"
    >
      <span className={classes.title}>{title}</span>
      <span className={classes.value}>{value}</span>
    </Column>
  );
}

export default StatsCardComponent;
