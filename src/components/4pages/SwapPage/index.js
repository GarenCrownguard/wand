import React from 'react'
import { connect } from 'react-redux'

import MainBlock1Card from 'components/1atomic/MainBlock1Card'

import MainBlock2StatsText from 'components/1atomic/MainBlock2StatsText'

import MainBlock2Divider from 'components/1atomic/MainBlock2Divider'
import { prettifytolocalstring, prettifyamounts } from 'resources/utilities'
import {
  Flex,
  Image,
  Text,
  Box,
  Button,
  IconButton,
  Input,
} from '@chakra-ui/react'
import MainBlock2OutstandingStats from 'components/2modular/MainBlock2OutstandingStats'
import MainBlock1OverviewStats from 'components/2modular/MainBlock1OverviewStats'

import Icon1swap from './icons/icon-1swap'
import Icon2downarrow from './icons/icon-4usdt'

const SwapPage = (props) => {
  const { stats, investmentList, localwalletstats } = props

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
              <Image
                mt="20px"
                mb="20px"
                boxSize="60px"
                src="/assets/images/icon1swap.png"
              />
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
                value={
                  <Text color="wandGreen">
                    {prettifytolocalstring(stats.growthFactor)}
                  </Text>
                }
              />
              <MainBlock2Divider />
              <MainBlock2StatsText
                title="Sell Factor"
                value={
                  <Text color="wandRed">
                    {prettifytolocalstring(stats.sellFactor)}
                  </Text>
                }
              />
            </MainBlock1Card>
            <MainBlock1Card p="15px" flexGrow={1}>
              <MainBlock2StatsText
                title="BATON Redeeming Price"
                value={prettifyamounts(stats.batonRedeemingPrice)}
              />
            </MainBlock1Card>
          </Flex>
        </Flex>
        <MainBlock1Card
          minHeight="345px"
          minWidth={['320px', '356px', '356px']}
          flexDirection="column"
          alignItems="flex-start"
          p="25px"
        >
          <Text variant="value" textAlign="left" color="wandGreen">
            Swap
          </Text>
          <Text variant="title" textAlign="left">
            Choose the tokens to swap
          </Text>
          <Flex
            alignItems="stretch"
            flexDirection="column"
            minWidth="100%"
            backgroundColor="#0B1A28"
            borderRadius="7px"
            maxHeight="60px"
            pl="10px"
            pr="10px"
            pt="5px"
          >
            <Flex p="0px" justifyContent="space-between" alignItems="center">
              <Text
                color="#2AE0BF"
                fontSize="10px"
                lineHeight="12px"
                fontWeight="bold"
                letterSpacing="0.5px"
                display="block"
              >
                SCEPTER
              </Text>
              <Button
                variant="link"
                size="xs"
                color="#8C8C8C"
                display="block"
                p="0px"
                colorScheme="#8C8C8C"
                _hover={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                Balance: 23232 SPTR
              </Button>
            </Flex>
            <Flex p="0px">
              <Input
                color="#DFDFDF"
                border="none"
                fontSize="14px"
                letterSpacing="tighter"
                fontWeight="bold"
                size="sm"
                isFullWidth
                p="0px"
              />
              <Button
                variant="solid"
                size="xs"
                background="tranparent"
                rightIcon={<Icon2downarrow />}
                _hover={{
                  background: '#B1AFCD',
                }}
              >
                <Image boxSize="20px" src="/assets/images/icon2sptr.png" />
              </Button>
            </Flex>
          </Flex>
          <Flex width="100%" justifyContent="center" p="8px">
            <IconButton icon={<Icon1swap />} size="xs" width={0} height={0} />
          </Flex>
          <Flex
            alignItems="stretch"
            flexDirection="column"
            minWidth="100%"
            backgroundColor="#0B1A28"
            borderRadius="7px"
            maxHeight="60px"
            pl="10px"
            pr="10px"
            pt="5px"
          >
            <Flex p="0px" justifyContent="space-between" alignItems="center">
              <Text
                color="#2AE0BF"
                fontSize="10px"
                lineHeight="12px"
                fontWeight="bold"
                letterSpacing="0.5px"
                display="block"
              >
                BUSD
              </Text>
              <Button
                variant="link"
                size="xs"
                color="#8C8C8C"
                display="block"
                p="0px"
                colorScheme="#8C8C8C"
                _hover={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                Balance: 23232 BUSD
              </Button>
            </Flex>
            <Flex p="0px">
              <Input
                color="#DFDFDF"
                border="none"
                fontSize="14px"
                letterSpacing="tighter"
                fontWeight="bold"
                size="sm"
                isFullWidth
                p="0px"
              />
              <Button
                variant="solid"
                size="xs"
                background="tranparent"
                rightIcon={<Icon2downarrow />}
                _hover={{
                  background: '#B1AFCD',
                }}
              >
                <Image boxSize="20px" src="/assets/images/icon3baton.png" />
              </Button>
            </Flex>
          </Flex>
          <Button
            variant="solid"
            size="md"
            width="100%"
            mt="20px"
            backgroundColor="#06141D"
            color="#FFFFFF;"
            fontSize="12px"
            fontWeight="bold"
            letterSpacing="0.5px"
          >
            Swap
          </Button>
        </MainBlock1Card>
      </Flex>
      <Box h="70px" /* Only for spacing*/ />
      <MainBlock2OutstandingStats />
      <MainBlock1OverviewStats />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats[0],
    investmentList: state.investmentList[0],
    localwalletstats: state.localwalletstats[0],
  }
}
export default connect(mapStateToProps)(SwapPage)
