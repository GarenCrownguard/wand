import React from "react";

import OverviewBarComponent from "components/overview";
import { UserScepterHoldingsComponent } from "components/useraccount";
import { TotalValueDepositComponent } from "components/graphs";
import { EvolutionOfTreasuryComponent } from "components/treasury";
import { TreasuryAllocationComponent } from "components/treasury";
import MiniInfoCardComponent from "components/cards/MiniInfoCardComponent";
import { FooterComponent } from "components/footer";

import { Column, Row } from "simple-flexbox";

import { prettifyamounts } from "resources/utilities";

import { createUseStyles, useTheme } from "react-jss";

// Redux
import { connect } from 'react-redux';

const useStyles = createUseStyles((theme) => ({
  mainContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    ...theme.typography.title,
  },
  graphcontainer: {
    "@media (max-width: 450px)": {
      maxHeight: 750,
    },
    "@media (min-width: 450px)": {
      maxHeight: 365,
    },
  },
  InfoContainer: {
    // marginTop: 23,
  },
  miniInfoCardContainer: {
    flexGrow: 1,
  },
}));

const DashboardComponent = (props) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  var scepterPriceGrowth = 278;
  var airdropsToBaton = 2345000;
  var riskTreasuryGrowth = 23845000;

  const {stats ,investmentList} = props;

  // console.log(stats[0].airdrops3Months);
  return (
    <Column wrap className={classes.mainContainer}>
      <OverviewBarComponent />
      <h2 className={classes.title}>Account Overview</h2>
      <Row
        flexGrow={1}
        className={classes.graphcontainer}
        breakpoints={{ 1080: "column" }}
      >
        <UserScepterHoldingsComponent />
        <TotalValueDepositComponent />
      </Row>
      <h2 className={classes.title}>Treasuries Overview</h2>
      <Row
        flexGrow={1}
        className={classes.graphcontainer}
        breakpoints={{ 1080: "column" }}
      >
        <EvolutionOfTreasuryComponent />
        <TreasuryAllocationComponent />
      </Row>

      {/* growth value is in % */}
      <Row className={classes.InfoContainer} breakpoints={{ 675: "column" }}>
        <MiniInfoCardComponent
          className={classes.miniInfoCardContainer}
          title="SCEPTER Price Growth since day 1 (USD)"
          value={prettifyamounts(scepterPriceGrowth)}
          growthDirection="positive"
          growthValue="9.37"
        />
        <MiniInfoCardComponent
          className={classes.miniInfoCardContainer}
          title="Airdrops to BATON holders (since day 1 (USD)"
          // value={prettifyamounts(airdropsToBaton)}
          value={prettifyamounts(stats.airdrops3Months)}
          growthDirection="negative"
          growthValue="9.37"
        />
        <MiniInfoCardComponent
          className={classes.miniInfoCardContainer}
          title="RISK Treasury Growth since day 1"
          value={prettifyamounts(riskTreasuryGrowth)}
          growthDirection="positive"
          growthValue="1.44"
        />
      </Row>
      {/* <FooterComponent /> */}
    </Column>
  );
};

const mapStateToProps = (state) => {
  return {
    stats: state.stats[0],
    investmentList: state.investmentList[0],
  };
};

export default connect(mapStateToProps)(DashboardComponent);