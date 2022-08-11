import React from "react";
import { connect } from "react-redux";

import { Flex, Tooltip, Box } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import MainBlock1Card from "components/1atomic/MainBlock1Card";
import { prettifytolocalstring, prettifyamounts } from "resources/utilities";
import MainBlock2Divider from "components/1atomic/MainBlock2Divider";
import MainBlock2OutstandingStats from "components/2modular/MainBlock2OutstandingStats";
import MainBlock1OverviewStats from "components/2modular/MainBlock1OverviewStats";
import MainBlock2StatsText from "components/1atomic/MainBlock2StatsText";
import MainBlock3HeaderText from "components/1atomic/MainBlock3HeaderText";

const AccountPage = (props) => {
  const { stats, investmentList, localwalletstats } = props;
  return (
    <>
      <Flex
        justifyContent="space-between"
        m={0}
        p={0}
        flexDirection={["column", "column", "row"]}
      >
        <Flex flexDirection="column" flexGrow={1}>
          <MainBlock3HeaderText
            text="SCEPTER"
            mb="5px"
            fontSize="20px"
            color="wandGrey"
          />
          <MainBlock1Card p="25px" minHeight="111px" flexGrow={1}>
            <MainBlock2StatsText
              title="Amount of SCEPTER"
              value={prettifytolocalstring(localwalletstats.sceptertoken)}
            />
            <MainBlock2Divider />
            <MainBlock2StatsText
              title="Current Price"
              value={
                <>
                  {prettifyamounts(stats.scepterBackingPrice)}
                  <Tooltip
                    hasArrow
                    label={`Current Value: ${prettifyamounts(
                      localwalletstats.sceptertoken * stats.scepterBackingPrice
                    )}`}
                    bg="wandGreen"
                    color="black"
                  >
                    <InfoOutlineIcon
                      color="wandGreen"
                      sx={{ ml: "5px", fontSize: "sm" }}
                    />
                  </Tooltip>
                </>
              }
            />
          </MainBlock1Card>
        </Flex>
        <Flex flexDirection="column" flexGrow={1}>
          <MainBlock3HeaderText
            text="BATON/ Airdrops"
            mb="5px"
            fontSize="20px"
            color="wandGrey"
          />
          <MainBlock1Card p="25px" minHeight="111px" flexGrow={1}>
            <MainBlock2StatsText
              title="Amount of BATON"
              v
              value={prettifytolocalstring(localwalletstats.batontoken)}
            />
            <MainBlock2Divider />
            <MainBlock2StatsText
              title="Last Airdrop"
              value={
                <>
                  {prettifyamounts(stats.scepterBackingPrice)}
                  <Tooltip
                    hasArrow
                    label={`Total (since start): ${prettifyamounts(
                      localwalletstats.sceptertoken * stats.scepterBackingPrice
                    )}`}
                    bg="wandGreen"
                    color="black"
                  >
                    <InfoOutlineIcon
                      color="wandGreen"
                      sx={{ ml: "5px", fontSize: "sm" }}
                    />
                  </Tooltip>
                </>
              }
            />
          </MainBlock1Card>
        </Flex>
      </Flex>
      <MainBlock2OutstandingStats />
      <MainBlock1OverviewStats />
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
export default connect(mapStateToProps)(AccountPage);
