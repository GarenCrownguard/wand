import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Column, Row } from "simple-flexbox";


const useStyles = createUseStyles((props) => ({
  container: (props) => ({
    ...props.theme.typography.atomicCard,
    padding: props.props.padding
      ? parseFloat(props.props.padding)
      : props.theme.typography.atomicCard.padding,
    minHeight: parseFloat(props.props.minHeight),
  }),
}));

const AtomicCard = (props) => {

  const theme = useTheme();
  const classes = useStyles({ props, theme });
  return(
  <Row
    wrap
    flexGrow={1}
    className={classes.container}
    horizontal="center"
    breakpoints={{ 450: "column" }}
  >
    {props.children}
  </Row>);
};

export default AtomicCard;
