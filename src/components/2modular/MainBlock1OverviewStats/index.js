import React from 'react';
import { connect } from 'react-redux';
import MainBlock1Card from 'components/1atomic/MainBlock1Card';
import MainBlock2StatsText from 'components/1atomic/MainBlock2StatsText';
import { Flex } from '@chakra-ui/react';

import { prettifytolocalstring, prettifyamounts } from "resources/utilities";

const MainBlock1OverviewStats = (props) => {
  const { stats } = props;

    return (
      <MainBlock1Card minHeight="172px" p="15px" flexDirection="column">
        <Flex flexDirection={["column", "column", "row"]}>
          <MainBlock2StatsText
            title="Circulating Supply ($SCEPTER)"
            value={prettifytolocalstring(stats.scepterCirculatingSupply)}
          />
          <MainBlock2StatsText
            title="$SCEPTER Price"
            value={prettifyamounts(stats.scepterBackingPrice)}
          />
          <MainBlock2StatsText
            title="Airdrops distributed (last 3 months)"
            value={prettifyamounts(stats.airdrops3Months)}
          />
        </Flex>
        <Flex flexDirection={["column", "column", "row"]}>
          <MainBlock2StatsText
            title="$SCEPTER Treasury Value"
            value={prettifyamounts(stats.scepterTreasuryValue)}
          />
          <MainBlock2StatsText
            title="Risk Treasury Value"
            value={prettifyamounts(stats.riskTreasuryValue)}
          />
          <MainBlock2StatsText
            title="Baton treasury value"
            value={prettifyamounts(stats.batonTreasuryValue)}
          />
        </Flex>
      </MainBlock1Card>
    );
}
 
const mapStateToProps = (state) => {
  return {
    stats: state.stats[0]
  };
};
export default connect(mapStateToProps)(MainBlock1OverviewStats);