import React from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles((props) => ({
  vertical: (props) => ({
    borderRight: "1px solid #6f6c99",
    alignSelf: 'center',
    width: 1,
    height: props.props.length ? parseFloat(props.props.length) : 135,
    // margin top right bottom left
    margin: props.props.margin ? parseFloat(props.props.margin) : "0 0 0 0",
  }),
  horizontal: (props) => ({
    borderTop: "1px solid #6f6c99",
    alignSelf: 'center',
    height: 1,
    width: props.props.length ? parseFloat(props.props.length) : 135,
    // margin top right bottom left
    margin: props.props.margin ? parseFloat(props.props.margin) : "0 0 0 0",
  }),
}));

const AtomicSeperator = (props) => {
  const theme = useTheme();
  const classes = useStyles({ props, theme });

  return (
    <>
      {props.vertical && <div className={classes.vertical} />}
      {props.horizontal && <div className={classes.horizontal} />}
    </>
  );
};

export default AtomicSeperator;
