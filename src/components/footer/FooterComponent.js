import React from "react";

import { Column, Row } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  footContainer: {
    // width: '100vw',
    height: 484,
    left: 255,

    marginTop: "auto",
    marginBottom: 0,
    background: "#061721",
    opacity: 0.4,
    border: "1px solid #979797",
    display: "none",
  },
}));

function FooterComponent() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.footContainer}>
      <Row className={classes.footContainer}></Row>
    </div>
  );
}

export default FooterComponent;
