import React from "react";

import { Column, Row } from "simple-flexbox";
import StatsCardComponent from "../cards/StatsCardComponent";

import { prettifyamounts } from "resources/utilities";

import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  overviewBar: {
    minHeight: 172,
    background:
      "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */",
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "rgba(165, 239, 255, 0.2)",
    padding: 5,
  },
  miniCardContainer: {
    flexGrow: 1,
    "@media (max-width: 768px)": {
      //   marginTop: 30,
      maxWidth: "none",
    },
  },
});

function OverviewBarComponent() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  var circulatingScepterSupply = 250000;
  var currentScepterPrice = 24;
  var airdropsDistributed3months = 500000000;
  var scepterTreasuryValue = 500450000;
  var riskTreasuryValue = 250000;
  var batonTreasuryValue = 250000;

  return (
    <>
      <Column wrap horizontal="space-between" className={classes.overviewBar}>
        <Row wrap flexGrow={1} horizontal="space-between">
          <StatsCardComponent
            className={classes.miniCardContainer}
            title="Circulating Supply (total $SCEPTER)"
            value={circulatingScepterSupply}
          />
          <StatsCardComponent
            className={classes.miniCardContainer}
            title="$SCEPTER Price"
            value={prettifyamounts(currentScepterPrice)}
          />
          <StatsCardComponent
            className={classes.miniCardContainer}
            title="Aidrops distributed (last 3 months)"
            value={prettifyamounts(airdropsDistributed3months)}
          />
        </Row>
        <Row wrap flexGrow={1} horizontal="space-between">
          <StatsCardComponent
            className={classes.miniCardContainer}
            title="$SCEPTER Treasury value "
            value={prettifyamounts(scepterTreasuryValue)}
          />
          <StatsCardComponent
            className={classes.miniCardContainer}
            title="Risk Treasury value "
            value={prettifyamounts(riskTreasuryValue)}
          />
          <StatsCardComponent
            className={classes.miniCardContainer}
            title="Baton treasury value"
            value={prettifyamounts(batonTreasuryValue)}
          />
        </Row>
      </Column>
    </>
  );
}

export default OverviewBarComponent;
