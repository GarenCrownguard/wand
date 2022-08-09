import React from "react";
import { connect } from "react-redux";
import MainBlock1Card from "../../1atomic/MainBlock1Card";

import StatsCardComponent from "components/cards/StatsCardComponent";
import MainBlock2StatsText from "components/1atomic/MainBlock2StatsText";

import { prettifytolocalstring } from "resources/utilities";

import { Center, Divider, Flex, Wrap, WrapItem } from "@chakra-ui/react";

const statsstyle = {
  bg: "tranparent",
  flexGrow: 1,
  "@media (max-width: 450px)": {
    maxWidth: "none",
    minWidth: 200,
  },
};

const DashboardPage = (props) => {
  const { stats } = props;

  return (
    <>
      <MainBlock1Card direction="column">
        <Wrap spacing="30px" align="center" justify="center">
          <WrapItem>
            <MainBlock2StatsText
              title="Circulating Supply (total $SCEPTER)"
              value={prettifytolocalstring(stats.scepterCirculatingSupply)}
              growthDirection="positive"
              percentageValue="10"
            />
          </WrapItem>
          <WrapItem>
            <MainBlock2StatsText
              title="Circulating Supply (total $SCEPTER)"
              value={prettifytolocalstring(stats.scepterCirculatingSupply)}
              growthDirection="positive"
              percentageValue="10"
            />
          </WrapItem>
          <WrapItem>
            <MainBlock2StatsText
              title="Circulating Supply (total $SCEPTER)"
              value={prettifytolocalstring(stats.scepterCirculatingSupply)}
              growthDirection="positive"
              percentageValue="10"
            />
          </WrapItem>
        </Wrap>
        {/* <Center height="50px">
              <Divider orientation="vertical" />
            </Center> */}
        <Wrap>
          <WrapItem>
            <MainBlock2StatsText
              title="Circulating Supply (total $SCEPTER)"
              value={prettifytolocalstring(stats.scepterCirculatingSupply)}
              growthDirection="positive"
              percentageValue="10"
            />
          </WrapItem>
          <WrapItem>
            <MainBlock2StatsText
              title="Circulating Supply (total $SCEPTER)"
              value={prettifytolocalstring(stats.scepterCirculatingSupply)}
              growthDirection="positive"
              percentageValue="10"
            />
          </WrapItem>
          <WrapItem>
            <MainBlock2StatsText
              title="Circulating Supply (total $SCEPTER)"
              value={prettifytolocalstring(stats.scepterCirculatingSupply)}
              growthDirection="positive"
              percentageValue="10"
            />
          </WrapItem>

          {/* <Center height="50px">
              <Divider orientation="vertical" />
            </Center> */}
        </Wrap>
      </MainBlock1Card>
      <MainBlock1Card></MainBlock1Card>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    stats: state.stats[0],
    investmentList: state.investmentList[0],
  };
};
export default connect(mapStateToProps)(DashboardPage);
