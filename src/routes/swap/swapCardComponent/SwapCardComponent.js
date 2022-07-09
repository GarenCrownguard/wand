import React from "react";
import { Column, Row } from "simple-flexbox";
// import LineChart from "react-svg-line-chart";
import { connect } from "react-redux";

import { createUseStyles } from "react-jss";

import SwapInputComponent from "./SwapInputComponent";
import { IconSwap } from "assets/icons";
import { prettifytolocalstring } from "resources/utilities";

const data = [];

for (let x = 1; x <= 24; x++) {
  data.push({ x: x, y: Math.floor(Math.random() * 100) });
}

// const data = [{x:1,y:12},{x:2,y:22},{x:3,y:112},{x:4,y:2},{x:5,y:312},{x:6,y:12}];

const useStyles = createUseStyles((theme) => ({
  container: {
    background:
      "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */",
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "rgba(165, 239, 255, 0.2)",
    padding: 5,
    marginRight: 0,
    marginBottom: 17,
    minHeight: 375,
    marginLeft: 15,
    // marginRight: 0,
    // padding: 35,
    "@media (min-width: 450px)": {
      // desktop
      maxWidth: 450,
    },
    "@media (max-width: 450px)": {
      // mobile
      marginLeft: 0,
      maxWidth: "none",
      marginTop: 6.5,
    },
  },
  title: {
    color: "#2ae0bf",
    fontWeight: 700,
  },
  subtitle: {
    color: "#B1AFCD",
    marginBottom: 6,
    fontSize: 12,
    textAlign: "center",
    // textAlign: "left",
  },
  icon: {
    padding: 10,
  },
  swap: {
    marginTop: 20,
    minWidth: 284,
    height: 49.86,
    background: "#A4A6B3",
    borderRadius: 5,
    border: "none",
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 24,
    letterSpacing: "0.02em",
    lineHeight: "29px",
    textAlign: "center",
  },
}));

function SwapCardComponent(props) {
  const classes = useStyles();

  const { localwalletstats } = props;
  // const { stats, investmentList, localwalletstats } = props;

  return (
    <Column
      flexGrow={1}
      className={classes.container}
      breakpoints={{ 1024: "column" }}
    >
      <span className={classes.title}>Swap</span>
      <span className={classes.subtitle}>Choose a token to swap</span>

      <SwapInputComponent
        tokenName={localwalletstats.sceptertoken.name}
        balance={prettifytolocalstring(localwalletstats.sceptertoken.balance)}
      />

      <Row justifyContent="space-around" className={classes.icon}>
        <IconSwap />
      </Row>

      <SwapInputComponent
        tokenName={localwalletstats.batontoken.name}
        balance={prettifytolocalstring(localwalletstats.batontoken.balance)}
      />

      <button className={classes.swap}>Swap</button>
    </Column>
  );
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats[0],
    investmentList: state.investmentList[0],
    localwalletstats: state.localwalletstats[0],
  };
};

export default connect(mapStateToProps)(SwapCardComponent);
