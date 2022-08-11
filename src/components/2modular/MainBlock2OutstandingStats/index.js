import React from "react";
import { connect } from "react-redux";

import MainBlock1Card from "components/1atomic/MainBlock1Card";
import MainBlock2StatsText from "components/1atomic/MainBlock2StatsText";
import MainBlock4CountdownTimer from "components/1atomic/MainBlock4CountdownTimer";

import { prettifytolocalstring } from "resources/utilities";

const MainBlock2OutstandingStats = (props) => {
  const { stats, investmentList, localwalletstats } = props;

  return (
    <>
      <MainBlock1Card p="30px">
        <MainBlock4CountdownTimer
          timeUNIX={localwalletstats.remainingSwapTime}
        />
        <MainBlock2StatsText
          title="Amount of SCEPTER Swapped"
          value={prettifytolocalstring(stats.amountOfSptrSwapped)}
        />
        <MainBlock2StatsText
          title="SCEPTER Sell Price at swap (USD)"
          value={prettifytolocalstring(stats.SptrSellPrice)}
        />
      </MainBlock1Card>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    stats: state.stats[0],
    investmentList: state.investmentList[0],
    localwalletstats: state.localwalletstats[0],
  };
};
export default connect(mapStateToProps)(MainBlock2OutstandingStats);
