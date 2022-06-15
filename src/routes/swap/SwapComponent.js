import React from "react";
import { Column, Row } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";
// Redux
import { connect } from "react-redux";

import { IconVerticalseperator, IconSwap } from "assets/icons";
import iconScepterBuySell from "../../assets/images/iconScepterBuySell.png";

import OverviewBarComponent from "components/overview";
import SwapCardComponent from "routes/swap/swapCardComponent/SwapCardComponent";
import MiniCardComponent from "components/cards/MiniCardComponent";

import { prettifyamounts, prettifytolocalstring } from "resources/utilities";

const useStyles = createUseStyles((theme) => ({
  mainContainer: {
    height: "100%",
    // display: "flex",
    // flexDirection: "column",
  },
  title: {
    ...theme.typography.smallgreytitle,
  },
  InfoContainer: {
    marginTop: 23,
  },
  miniInfoCardContainer: {
    flexGrow: 1,
  },
  card: {
    ...theme.typography.cardBackground,
    maxHeight: 111,
    minWidth: 225,
    padding: 28,
    "@media (max-width: 450px)": {
      // mobile
      marginTop: 6.5,
      marginBottom: 6.5,
    },
  },
  value: {
    ...theme.typography.boldamountvalue,
  },
  buyfactorsubtitle: {
    ...theme.typography.boldamountvalue,
    color: theme.color.turquoise,
  },
  sellfactorsubtitle: {
    ...theme.typography.boldamountvalue,
    color: theme.color.englishred,
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
        <Column wrap flexGrow={1}>
          <Row wrap flexGrow={1}>
            {/* get the number of token from the wallet */}
            <MiniCardComponent
              className={classes.miniInfoCardContainer}
              title="Your SCEPTER Balance"
              value={prettifytolocalstring(stats.currentWalletScepterAmount)}
            />
            <MiniCardComponent
              className={classes.miniInfoCardContainer}
              title="Your SCEPTER Balance (Value)"
              // value={prettifyamounts(number of tokens * backing price)}
              value={prettifyamounts(
                stats.currentWalletScepterAmount * stats.scepterBackingPrice
              )}
            />
          </Row>

          <Row
            flexGrow={1}
            className={classes.card}
            justifyContent="space-around"
            vertical="center"
          >
            <Column horizontal="center">
              <span className={classes.title}>SCEPTER Buy price</span>
              <span className={classes.value}>
                {`${prettifyamounts(stats.scepterBuyPrice)}`}
              </span>
            </Column>
            <img
              src={iconScepterBuySell}
              alt="Buy Sell Icon"
              height="65px"
            ></img>

            <Column horizontal="center">
              <span className={classes.title}>SCEPTER Sell price</span>
              <span className={classes.value}>
                {`${prettifyamounts(stats.scepterSellPrice)}`}
              </span>
            </Column>
          </Row>


          <Row wrap>
            <Row
              flexGrow={1}
              className={classes.card}
              justifyContent="space-between"
              vertical="center"
            >
              <Column horizontal="center">
                <span className={classes.title}>Growth Factor</span>
                <span className={classes.buyfactorsubtitle}>
                  {stats.growthFactor}
                </span>
              </Column>
              <IconVerticalseperator />

              <Column horizontal="center">
                <span className={classes.title}>Sell Factor</span>
                <span className={classes.sellfactorsubtitle}>
                  {stats.sellFactor}
                </span>
              </Column>
            </Row>

            <MiniCardComponent
              className={classes.miniInfoCardContainer}
              title="BATON Redeeming Price"
              value={prettifyamounts(stats.batonRedeemingPrice)}
            />
          </Row>
        </Column>
        <SwapCardComponent />
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
