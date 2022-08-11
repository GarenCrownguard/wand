import React from "react";
import { connect } from "react-redux";
import MainBlock1Card from "../../1atomic/MainBlock1Card";

import StatsCardComponent from "components/cards/StatsCardComponent";
import MainBlock2StatsText from "components/1atomic/MainBlock2StatsText";

import MainBlock2Divider from "components/1atomic/MainBlock2Divider";
import MainBlock3HeaderText from "components/1atomic/MainBlock3HeaderText";
import { prettifytolocalstring } from "resources/utilities";

import {
  Center,
  Divider,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const cardCommonBackground = {
  background:
    "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)",
  borderRadius: "5px",
  border: "1px solid rgba(165, 239, 255, 0.2)",
};

const DashboardPage = (props) => {
  const { stats, localwalletstats } = props;

  // console.log(useBreakpointValue(["base", "sm screen", "large screen"]));

  return (
    <>
      <Flex
        justifyContent="space-between"
        m={0}
        p={0}
        flexDirection={["column", "column", "row"]}
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
              value={prettifytolocalstring(stats.scepterBackingPrice)}
            />
          </MainBlock1Card>
          <MainBlock1Card minHeight="222px" flexDirection="column">
            <Flex flexDirection={["column", "column", "row"]}>
              <MainBlock2StatsText
                title="$SCEPTER Treasury Value"
                value={prettifytolocalstring(stats.scepterTreasuryValue)}
              />
              <MainBlock2StatsText
                title="Risk Treasury Value"
                value={prettifytolocalstring(stats.riskTreasuryValue)}
              />
            </Flex>
            <Flex flexDirection={["column", "column", "row"]}>
              <MainBlock2StatsText
                title="Airdrops distributed (last 3 months)"
                value={prettifytolocalstring(stats.airdrops3Months)}
              />
              <MainBlock2StatsText
                title="Baton treasury value"
                value={prettifytolocalstring(stats.batonTreasuryValue)}
              />
            </Flex>
          </MainBlock1Card>
        </Flex>
        <MainBlock1Card
          minHeight="345px"
          minWidth={["320px", "356px", "356px"]}
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
          value={prettifytolocalstring(
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
      <Flex flexDirection={["column", "column", "row"]}>
        <MainBlock1Card minHeight="345px" flexGrow={1}>
          Chart 1
        </MainBlock1Card>
        <MainBlock1Card
          minHeight="345px"
          minWidth={["320px", "356px", "356px"]}
        >
          Chart 2
        </MainBlock1Card>
      </Flex>
      <Flex
        justifyContent="space-between"
        flexDirection={["column", "column", "row"]}
      >
        <MainBlock1Card p="30px" flexGrow={1}>
          <MainBlock2StatsText
            title="Your SCEPTER Balance (Tokens)"
            value={prettifytolocalstring(localwalletstats.sceptertoken)}
            align="left"
            growthDirection="positive"
            percentageValue="10.2"
          />
        </MainBlock1Card>
        <MainBlock1Card p="30px" flexGrow={1}>
          <MainBlock2StatsText
            title="Your SCEPTER Balance (Tokens)"
            value={prettifytolocalstring(localwalletstats.sceptertoken)}
            align="left"
            growthDirection="negative"
            percentageValue="10.2"
          />
        </MainBlock1Card>
        <MainBlock1Card p="30px" flexGrow={1}>
          <MainBlock2StatsText
            title="Your SCEPTER Balance (Tokens)"
            value={prettifytolocalstring(localwalletstats.sceptertoken)}
            align="left"
            growthDirection="positive"
            percentageValue="1000.2"
          />
        </MainBlock1Card>
      </Flex>
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
export default connect(mapStateToProps)(DashboardPage);
