import React from "react";

import { Column, Row } from "simple-flexbox";
import StatsCardComponent from "../cards/StatsCardComponent";

import { prettifyamounts, prettifytolocalstring } from "resources/utilities";

import { createUseStyles, useTheme } from "react-jss";
import { connect } from "react-redux";

const useStyles = createUseStyles((theme) => ({
  overviewBar: {
    ...theme.typography.cardBackground,
    minHeight: 172,
    marginBottom: 0
  },
  miniCardContainer: {
    flexGrow: 1,
    "@media (max-width: 450px)": {
      maxWidth: "none",
      minWidth: 200,
    },
  },
}));

const OverviewBarComponent = (props) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { stats, investmentList } = props;

  return (
    <Column wrap horizontal="space-between" className={classes.overviewBar}>
      <Row
        wrap
        flexGrow={1}
        horizontal="space-between"
        breakpoints={{ 675: "column" }}
      >
        <StatsCardComponent
          className={classes.miniCardContainer}
          title="Circulating Supply (total $SCEPTER)"
          value={prettifytolocalstring(stats.scepterCirculatingSupply)}
        />
        <StatsCardComponent
          className={classes.miniCardContainer}
          title="$SCEPTER Price"
          value={prettifyamounts(stats.scepterBackingPrice)}
        />
        <StatsCardComponent
          className={classes.miniCardContainer}
          title="Aidrops distributed (last 3 months)"
          value={prettifyamounts(stats.airdrops3Months)}
        />
      </Row>
      <Row
        wrap
        flexGrow={1}
        horizontal="space-between"
        breakpoints={{ 675: "column" }}
      >
        <StatsCardComponent
          className={classes.miniCardContainer}
          title="$SCEPTER Treasury value "
          value={prettifyamounts(stats.scepterTreasuryValue)}
        />
        <StatsCardComponent
          className={classes.miniCardContainer}
          title="Risk Treasury value "
          value={prettifyamounts(stats.riskTreasuryValue)}
        />
        <StatsCardComponent
          className={classes.miniCardContainer}
          title="Baton treasury value"
          value={prettifyamounts(stats.batonTreasuryValue)}
        />
      </Row>
    </Column>
  );
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats[0],
    investmentList: state.investmentList[0],
  };
};
export default connect(mapStateToProps)(OverviewBarComponent);