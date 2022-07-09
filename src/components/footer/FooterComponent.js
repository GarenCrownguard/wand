import React from "react";

import { Row } from "simple-flexbox";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  footContainer: {
    // width: '100vw',
    height: 484,
    left: 255,

    marginTop: "auto",
    marginBottom: 0,
    // background: "#061721",
    background: "white",
    opacity: 0.4,
    border: "1px solid #979797",
    display: "none",
  },
}));

function FooterComponent() {
  
  const classes = useStyles();

  return (
    <div className={classes.footContainer}>
      <Row className={classes.footContainer}>vsvsfvsfvfs</Row>
    </div>
  );
}

export default FooterComponent;
