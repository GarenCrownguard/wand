import React from "react";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((props) => ({
  p: {
    fontSize: props.size,
  },
}));

const atomicSeperator = (props) => {
  const { text, size } = props;
  const classes = useStyles(props);
  
  return <p className={classes.p}>{text}</p>;
};

export default atomicSeperator;
