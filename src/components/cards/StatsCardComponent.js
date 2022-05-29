import React from "react";
import { Column } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    maxWidth: 350,
    // "@media (max-width: 425px)": {
    //   alignItems: 'flex-start',
    // },

    // padding: "20px 32px 6px 32px",
  },
  title: {
    ...theme.typography.smallgreytitle,
  },
  value: {
    ...theme.typography.boldamountvalue,
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
