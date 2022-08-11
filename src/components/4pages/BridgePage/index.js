import React from "react";
import { connect } from "react-redux";
import { Box, Center, Text, Divider, Flex } from "@chakra-ui/react";

import MainBlock1Card from "../../1atomic/MainBlock1Card";

import MainBlock2StatsText from "components/1atomic/MainBlock2StatsText";

import { prettifytolocalstring } from "resources/utilities";

const cardCommonBackground = {
  background:
    "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)",
  borderRadius: "5px",
  border: "1px solid rgba(165, 239, 255, 0.2)",
};

const BridgePage = (props) => {
  const { stats, localwalletstats } = props;
  return (
    <>
      <Flex
        justifyContent="space-between"
        flexDirection={["column", "column", "row"]}
        m={0}
        p={0}
      >
        <Flex flexDirection="column" width="100%">
          <Flex
            m="7px"
            p="25px"
            justifyContent="space-around"
            flexDirection={["column", "column", "row"]}
            minHeight="111px"
            sx={cardCommonBackground}
          >
            <MainBlock2StatsText
              title="Circulating Supply (total $SCEPTER)"
              value={prettifytolocalstring(stats.scepterCirculatingSupply)}
            />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <MainBlock2StatsText
              title="$SCEPTER Price"
              value={prettifytolocalstring(stats.scepterBackingPrice)}
            />
          </Flex>
          <Flex
            backgroundColor="transparent"
            minHeight="222px"
            flexDirection="column"
            justifyContent="space-around"
            m="7px"
            sx={cardCommonBackground}
          >
            <Flex
              justifyContent="space-around"
              flexDirection={["column", "column", "row"]}
            >
              <MainBlock2StatsText
                title="$SCEPTER Treasury Value"
                value={prettifytolocalstring(stats.scepterTreasuryValue)}
              />
              <MainBlock2StatsText
                title="Risk Treasury Value"
                value={prettifytolocalstring(stats.riskTreasuryValue)}
              />
            </Flex>
            <Flex
              justifyContent="space-around"
              flexDirection={["column", "column", "row"]}
            >
              <MainBlock2StatsText
                title="Airdrops distributed (last 3 months)"
                value={prettifytolocalstring(stats.airdrops3Months)}
              />
              <MainBlock2StatsText
                title="Baton treasury value"
                value={prettifytolocalstring(stats.batonTreasuryValue)}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          minHeight="345px"
          minWidth={["320px", "356px", "356px"]}
          m="7px"
          sx={cardCommonBackground}
        />
      </Flex>
      <Flex
        sx={cardCommonBackground}
        flexDirection={["column", "column", "row"]}
        justifyContent="space-around"
        p="30px"
        m="7px"
      >
        <MainBlock2StatsText
          title="Your SCEPTER Balance (Tokens)"
          value={prettifytolocalstring(localwalletstats.sceptertoken)}
        />
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        <MainBlock2StatsText
          title="Your SCEPTER Balance (Value)"
          value={prettifytolocalstring(
            localwalletstats.sceptertoken * stats.scepterBackingPrice
          )}
        />
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        <MainBlock2StatsText
          title="Number of BATON tokens"
          value={prettifytolocalstring(localwalletstats.batontoken)}
        />
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
export default connect(mapStateToProps)(BridgePage);
