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
    "@media (max-width: 1080px)": {
      maxHeight: 726,
    },
    "@media (min-width: 1080px)": {
      maxHeight: 363,
    },
  },
  InfoContainer: {
    marginTop: 23,
  },
  miniInfoCardContainer: {
    flexGrow: 1,

    // marginRight: 30,
    // "@media (max-width: 768px)": {
    //   marginTop: 30,
    //   maxWidth: "none",
    // },
  },
}));

const DashboardComponent = (props) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  var scepterPriceGrowth = 278;
  var airdropsToBaton = 2345000;
  var riskTreasuryGrowth = 23845000;

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
          value={prettifyamounts(airdropsToBaton)}
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
      <FooterComponent />
    </Column>
  );
};

export default DashboardComponent;
