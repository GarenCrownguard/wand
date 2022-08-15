import React from 'react'
import { connect } from 'react-redux'

import MainBlock1Card from 'components/1atomic/MainBlock1Card'

import MainBlock2StatsText from 'components/1atomic/MainBlock2StatsText'
import Swap1SwapBox from 'components/2modular/Swap1SwapBox'
import MainBlock2Divider from 'components/1atomic/MainBlock2Divider'
import { prettifytolocalstring, prettifyamounts } from 'resources/utilities'
import { Flex, Box } from '@chakra-ui/react'
import MainBlock2OutstandingStats from 'components/2modular/MainBlock2OutstandingStats'
import MainBlock1OverviewStats from 'components/2modular/MainBlock1OverviewStats'
import Icon1swap from './icon1swap'

const SwapPage = (props) => {
  const { stats, localwalletstats } = props

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
          </MainBlock1Card>
          <MainBlock1Card
            minHeight={['250px', '250px', '111px']}
            flexDirection="column"
          >
            <Flex
              flexDirection={['column', 'column', 'row']}
              alignItems="center"
            >
              <MainBlock2StatsText
                title="SCEPTER Buy Price (USD)"
                value={prettifyamounts(stats.scepterBuyPrice)}
              />
              <Icon1swap />
              <MainBlock2StatsText
                title="SCEPTER Sell Price (USD)"
                value={prettifyamounts(stats.scepterSellPrice)}
              />
            </Flex>
          </MainBlock1Card>
          <Flex
            justifyContent="space-between"
            flexDirection={['column', 'column', 'row']}
            minHeight="111px"
          >
            <MainBlock1Card p="15px" flexGrow={1}>
              <MainBlock2StatsText
                title="Growth Factor"
                value={prettifytolocalstring(stats.growthFactor)}
                valueColor="wandGreen"
                tooltipLabel={'Write something here'}
              />
              <MainBlock2Divider />
              <MainBlock2StatsText
                title="Sell Factor"
                value={prettifytolocalstring(stats.sellFactor)}
                valueColor="wandRed"
                tooltipLabel={'Write something here'}
              />
            </MainBlock1Card>
            <MainBlock1Card p="15px" flexGrow={1}>
              <MainBlock2StatsText
                title="BATON Redeeming Price"
                value={prettifyamounts(stats.batonRedeemingPrice)}
                tooltipLabel={'Write something here'}
              />
            </MainBlock1Card>
          </Flex>
        </Flex>
        <Swap1SwapBox />
      </Flex>
      <Box h="70px" /* Only for spacing*/ />
      <MainBlock2OutstandingStats />
      <MainBlock1OverviewStats />
      <Box h="70px" /* Only for spacing*/ />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats,

    localwalletstats: state.localwalletstats,
  }
}
export default connect(mapStateToProps)(SwapPage)
