import React from "react";
import { Row, Column } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";
import { prettifytolocalstring } from "resources/utilities";

import iconBaton from "../../../assets/images/iconBaton.png";
import iconScepter from "../../../assets/images/iconScepter.png";

const useStyles = createUseStyles((theme) => ({
  container: {
    minHeight: 59.58,
    padding: 15,
    background: theme.color.veryDarkGrayishBlue,
    borderRadius: 7.73771,
    marginTop: 13.17,

    // ...theme.typography.cardBackground,
    // maxHeight: 111,
    // padding: 28,

    // "@media (min-width: 450px)": {
    //   // desktop
    //   marginBottom: 20,
    //   minWidth: 225,
    //   "&:nth-child(n+2)": {
    //     // 2nd and 3rd
    //     // backgroundColor: "red",
    //     marginRight: 0,
    //     marginLeft: 15,
    //   },
    // },
    // "@media (max-width: 450px)": {
    //   // mobile
    //   marginRight: 0,
    //   marginLeft: 0,
    //   maxWidth: "none",
    //   marginBottom: 6.5,
    //   marginTop: 6.5,

    //   "&:nth-child(n+2)": {
    //     // 2nd and 3rd
    //     // backgroundColor: "blue",
    //   },
    // },
  },
  title: {
    ...theme.typography.smallgreytitle,
    minWidth: 102,
  },
  value: {
    ...theme.typography.boldamountvalue,
  },
  tokenname: {
    fontSize: 10,
    color: theme.color.turquoise,
    letterSpacing: 1,
    fontWeight: 700,
  },
  balance: {
    ...theme.typography.smallgreytitle,
    fontSize: 8,
    letterSpacing: 1,
  },
  input: {
    ...theme.typography.boldamountvalue,
    background: "none",
    textAlign: "left",
    border: "none",
    maxWidth: 160,
    marginRight: "auto",
    borderStyle: "solid",
    borderColor: "red",
  },
  token: {
    height: 22,
    marginRight: 0,
    marginLeft: 0,
  },
}));

function SwapInputComponent({ tokenName, balance, title, value }) {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <Column flexGrow={1} className={classes.container} vertical="center">
      <Row justifyContent="space-between">
        <span className={classes.tokenname}>{tokenName}</span>
        <span className={classes.balance}>
          Balance: {balance} {tokenName}
        </span>
      </Row>
      <Row vertical="center">
        <input className={classes.input} type="number" />
        <span className={classes.tokenname}>MAX</span>

        {tokenName === "SCEPTER" && (
          <img
            src={iconScepter}
            alt="Baton Icon"
            className={classes.token}
          ></img>
        )}
        {tokenName === "BATON" && (
          <img src={iconBaton} alt="Baton Icon" className={classes.token}></img>
        )}
        {tokenName === "USDC" && (
          <img
            src={iconScepter}
            alt="Baton Icon"
            className={classes.token}
          ></img>
        )}
      </Row>
    </Column>
  );
}

export default SwapInputComponent;
