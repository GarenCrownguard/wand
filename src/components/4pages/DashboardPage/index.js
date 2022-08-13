import React from "react";
import { connect } from "react-redux";
import MainBlock1Card from "components/1atomic/MainBlock1Card";

import MainBlock2StatsText from "components/1atomic/MainBlock2StatsText";

import MainBlock2Divider from "components/1atomic/MainBlock2Divider";
import MainBlock3HeaderText from "components/1atomic/MainBlock3HeaderText";
import { prettifytolocalstring, prettifyamounts } from "resources/utilities";

import {Flex, Box} from "@chakra-ui/react";

const DashboardPage = (props) => {
  const { stats, localwalletstats } = props;

  // console.log(useBreakpointValue(["base", "sm screen", "large screen"]));

  return (
    <>
      <Flex
        justifyContent="space-between"
        m={0}
        p={0}
        flexDirection={['column', 'column', 'row']}
      >
        <Flex flexDirection="column" width="100%">
          <MainBlock1Card p="25px" minHeight="111px">
            <MainBlock2StatsText
              title="Circulating Supply ($SCEPTER)"
              value={prettifytolocalstring(stats.scepterCirculatingSupply)}
            />
            <MainBlock2Divider />
            <MainBlock2StatsText
              title="$SCEPTER Price"
              value={prettifyamounts(stats.scepterBackingPrice)}
            />
          </MainBlock1Card>
          <MainBlock1Card minHeight="222px" flexDirection="column">
            <Flex flexDirection={['column', 'column', 'row']}>
              <MainBlock2StatsText
                title="$SCEPTER Treasury Value"
                value={prettifyamounts(stats.scepterTreasuryValue)}
              />
              <MainBlock2StatsText
                title="Risk Treasury Value"
                value={prettifyamounts(stats.riskTreasuryValue)}
              />
            </Flex>
            <Flex flexDirection={['column', 'column', 'row']}>
              <MainBlock2StatsText
                title="Airdrops distributed (last 3 months)"
                value={prettifyamounts(stats.airdrops3Months)}
              />
              <MainBlock2StatsText
                title="Baton treasury value"
                value={prettifyamounts(stats.batonTreasuryValue)}
              />
            </Flex>
          </MainBlock1Card>
        </Flex>
        <MainBlock1Card
          minHeight="345px"
          minWidth={['320px', '356px', '356px']}
        >
          Chart 1
        </MainBlock1Card>
      </Flex>
      <MainBlock3HeaderText text="Account Overview" />
      <MainBlock1Card p="30px">
        <MainBlock2StatsText
          title="Your SCEPTER Balance (Tokens)"
          value={prettifytolocalstring(localwalletstats.sceptertoken)}
        />
        <MainBlock2Divider />
        <MainBlock2StatsText
          title="Your SCEPTER Balance (Value)"
          value={prettifyamounts(
            localwalletstats.sceptertoken * stats.scepterBackingPrice
          )}
        />
        <MainBlock2Divider />
        <MainBlock2StatsText
          title="Number of BATON tokens"
          value={prettifytolocalstring(localwalletstats.batontoken)}
        />
      </MainBlock1Card>
      <MainBlock3HeaderText text="Treasuries Overview" />
      <Flex flexDirection={['column', 'column', 'row']}>
        <MainBlock1Card minHeight="345px" flexGrow={1}>
          Chart 1
        </MainBlock1Card>
        <MainBlock1Card
          minHeight="345px"
          minWidth={['320px', '356px', '356px']}
        >
          Chart 2
        </MainBlock1Card>
      </Flex>
      <Flex
        justifyContent="space-between"
        flexDirection={['column', 'column', 'row']}
      >
        <MainBlock1Card p="15px" flexGrow={1}>
          <MainBlock2StatsText
            title="SCEPTER Price Growth since day 1 (USD)"
            value={prettifyamounts(localwalletstats.sceptertoken)}
            align="left"
            growthDirection="positive"
            percentageValue="10.2"
          />
        </MainBlock1Card>
        <MainBlock1Card p="15px" flexGrow={1}>
          <MainBlock2StatsText
            title="Airdrops to BATON holders (since day 1 (USD)"
            value={prettifyamounts(localwalletstats.sceptertoken)}
            align="left"
            growthDirection="negative"
            percentageValue="10.2"
          />
        </MainBlock1Card>
        <MainBlock1Card p="15px" flexGrow={1}>
          <MainBlock2StatsText
            title="RISK Treasury Growth since day 1"
            value={prettifyamounts(localwalletstats.sceptertoken)}
            align="left"
            growthDirection="positive"
            percentageValue="1000.2"
          />
        </MainBlock1Card>
      </Flex>
      <Box h="70px" /* Only for spacing*/ />
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    stats: state.stats[0],
    investmentList: state.investmentList[0],
    localwalletstats: state.localwalletstats[0],
  };
};
export default connect(mapStateToProps)(DashboardPage);