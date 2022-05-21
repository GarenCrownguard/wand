import React from "react";
import { Row } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";
import { IconLogo } from "assets/icons";

const useStyles = createUseStyles((theme) => ({
  container: {
    // position: "absolute",
    width: 172.57,
    height: 39.61,

    // marginLeft: 32,
    // marginRight: 32,
    marginLeft: 55,
    marginRight: 87,
  },
  title: {
    ...theme.typography.cardTitle,
    color: theme.color.grayishBlue,
    opacity: 0.7,
    marginLeft: 12,
  },
}));

function LogoComponent() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Row className={classes.container} horizontal="center" vertical="center">
      <IconLogo />
      {/* <span className={classes.title}>Dashboard Kit</span> */}
    </Row>
  );
}

export default LogoComponent;
