import React from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  span: (props) => ({
    ...props.theme.typography.atomicText,
    color: props.props.color,
    fontSize: parseFloat(props.props.size),
  }),
});

const AtomicText = (props) => {
  const theme = useTheme();
  const classes = useStyles({ props, theme });
  return <span className={classes.span}>{props.text}</span>;
};

export default AtomicText;
