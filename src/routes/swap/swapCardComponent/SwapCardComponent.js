import React from "react";
import { Column, Row } from "simple-flexbox";
import LineChart from "react-svg-line-chart";
import { connect } from "react-redux";

import { createUseStyles } from "react-jss";

import SwapInputComponent from "./SwapInputComponent";
import iconSwap from "assets/icons";
import { prettifytolocalstring } from "resources/utilities";

const data = [];

for (let x = 1; x <= 24; x++) {
  data.push({ x: x, y: Math.floor(Math.random() * 100) });
}

// const data = [{x:1,y:12},{x:2,y:22},{x:3,y:112},{x:4,y:2},{x:5,y:312},{x:6,y:12}];

const useStyles = createUseStyles((theme) => ({
  container: {
    ...theme.typography.cardBackground,
    minHeight: 375,
    marginLeft: 15,
    marginRight: 0,
    padding: 35,
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
    color: '#2ae0bf',
    fontWeight: 700,
  },
  subtitle: {
    ...theme.typography.smallgreytitle,
    textAlign: "left",
  },
  icon: {
    padding: 10,
  },
  swap: {
    marginTop: 20,
    minWidth: 284,
    height: 49.86,
    background: '#A4A6B3',
    borderRadius: 5,
    border: 'none',
    ...theme.typography.boldamountvalue,
  },
}));

function SwapCardComponent(props) {
  
  const classes = useStyles();

  const { stats, investmentList, localwalletstats } = props;

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
        <iconSwap />
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
