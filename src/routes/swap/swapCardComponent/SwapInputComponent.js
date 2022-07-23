import React from "react";
import { Row, Column } from "simple-flexbox";
import { createUseStyles } from "react-jss";
// import { prettifytolocalstring } from "resources/utilities";

import iconBaton from "../../../assets/images/iconBaton.png";
import iconScepter from "../../../assets/images/iconScepter.png";

const useStyles = createUseStyles((theme) => ({
  container: {
    minHeight: 59.58,
    marginTop: 13.17,

    background:
      "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */",
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "rgba(165, 239, 255, 0.2)",
    padding: 5,
    marginRight:0,
    marginBottom: 17,
    // maxHeight: 111,
    // padding: 28,
// .flex-grid-item:nth-child(11) {background-color: #85144b; color: white;}
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
    color: "#B1AFCD",
    marginBottom: 6,
    fontSize: 12,
    textAlign: "center",
    minWidth: 102,
  },
  value: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 24,
    letterSpacing: "0.02em",
    lineHeight: "29px",
    textAlign: "center",
  },
  tokenname: {
    fontSize: 10,
    color: "#2ae0bf",
    letterSpacing: 1,
    fontWeight: 700,
  },
  balance: {
    color: "#B1AFCD",
    marginBottom: 6,
    fontSize: 12,
    textAlign: "center",
    // fontSize: 8,
    letterSpacing: 1,
  },
  input: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 24,
    letterSpacing: "0.02em",
    lineHeight: "29px",
    textAlign: "center",
    background: "none",
    // textAlign: "left",
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
  
  const classes = useStyles();

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
            alt="Baton icon"
            className={classes.token}
          ></img>
        )}
        {tokenName === "BATON" && (
          <img src={iconBaton} alt="Baton icon" className={classes.token}></img>
        )}
        {tokenName === "USDC" && (
          <img
            src={iconScepter}
            alt="Baton icon"
            className={classes.token}
          ></img>
        )}
      </Row>
    </Column>
  );
}

export default SwapInputComponent;
