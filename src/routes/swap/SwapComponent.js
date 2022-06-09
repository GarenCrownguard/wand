import React from "react";
import { Column, Row } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";
// Redux
import { connect } from "react-redux";

import { IconScepterBuySell, IconSwap } from "assets/icons";

import OverviewBarComponent from "components/overview";
import SwapCardComponent from "components/cards/SwapCardComponent";
import MiniCardComponent from "components/cards/MiniCardComponent";

import { prettifyamounts, prettifytolocalstring } from "resources/utilities";

const useStyles = createUseStyles((theme) => ({
  mainContainer: {
    height: "100%",
    // display: "flex",
    // flexDirection: "column",
  },
  title: {
    ...theme.typography.title,
  },
  InfoContainer: {
    marginTop: 23,
  },
  miniInfoCardContainer: {
    flexGrow: 1,
  },
  card: {
    ...theme.typography.cardBackground,
    marginRight:13,
  },
}));

const SwapComponent = (props) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { stats, investmentList } = props;

  // console.log(stats[0].airdrops3Months);
  return (
    <Column
      wrap
      className={classes.mainContainer}
      breakpoints={{ 450: "column" }}
    >
      <Row wrap>
        <Column>
          <Row wrap>
            {/* get the number of token from the wallet */}
            <MiniCardComponent
              className={classes.miniInfoCardContainer}
              title="Your SCEPTER Balance"
              value={prettifytolocalstring(stats.scepterCirculatingSupply)}
            />
            <MiniCardComponent
              className={classes.miniInfoCardContainer}
              title="Your SCEPTER Balance (Value)"
              // value={prettifyamounts(number of tokens * backing price)}
              value={prettifyamounts(stats.scepterBackingPrice)}
            />
          </Row>
          <Row flexGrow={1} className={classes.card}>
            Buy/ Sell price
          </Row>
          <Row>
            <Column flexGrow={1} className={classes.card}>
              ttt
            </Column>
            <Column flexGrow={1} className={classes.card}>
              yyy
            </Column>
          </Row>
        </Column>
        <SwapCardComponent />

        {/* <Column flexGrow={1} className={classes.card}>
        </Column> */}
      </Row>
      <Row>Outstanding Warning</Row>
      <Row flexGrow={1} className={classes.card}>
        Outstanding lock
      </Row>
      <OverviewBarComponent />
    </Column>
  );
};

const mapStateToProps = (state) => {
  return {
    stats: state.stats[0],
    investmentList: state.investmentList[0],
  };
};

export default connect(mapStateToProps)(SwapComponent);
