import React from "react";

import { Column, Row } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    position: "absolute",
    // width: "98vw",
    height: "484px",
    left: "0px",
  },
});

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <>
      <div className={classes.footer}>
        <Row>
          <Column flexGrow={1}>start investing</Column>
          <Column flexGrow={1}>security</Column>
          <Column flexGrow={1}>about</Column>
          <Column flexGrow={1}>help</Column>
        </Row>
        <Row>
          <Column>tc and pp</Column>
          <Column>socials</Column>
        </Row>
      </div>
    </>
  );
};

export default Footer;
