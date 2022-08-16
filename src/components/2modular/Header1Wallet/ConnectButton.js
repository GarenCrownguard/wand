import React, { useEffect } from 'react'
import { Button, Box, Text, Icon } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import IconWallet from './icon-wallet'
import { connect } from 'react-redux'
import * as reducer from 'redux/reducerCalls'
import { BigNumberToActual } from 'resources/utilities'
import contracts from 'contracts/contracts'

const ConnectButton = (props) => {
  const { handleOpenModal, isMobile, localwalletstats } = props

  const account = localwalletstats.walletAddress
  const isconnected = localwalletstats.isconnected
  const toast = useToast()
  const { ethereum } = window

  // console.log(ethereum.isConnected())
  if (ethereum) {
    ethereum.on('accountsChanged', (accounts) => {
      /* Disconnecting wallet from metamask acts as account change */
      // console.log('accounts change event')
      window.location.reload()
    })

    ethereum.on('chainChanged', (chainId) => {
      // console.log('chain change event')
      window.location.reload()
    })
  }

  const handleConnectWallet = async () => {
    if (!ethereum) {
      toast({
        title: 'No wallet detected!',
        status: 'warning',
        duration: 1000,
        position: 'bottom-right',
        containerStyle: {
          width: '50px',
        },
      })
    } else {
      try {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        })

        if (accounts.length !== 0) {
          const account = accounts[0]
          // console.log('Found an authorized account: ', account)

          reducer.UPDATE_ADDRESS({ walletAddress: account })

          const SPTRbalance =
            (await contracts.SPTRContract?.balanceOf(account)) ?? null
          const BATONbalance =
            (await contracts.BATONContract?.balanceOf(account)) ?? null
          const USDCbalance =
            (await contracts.USDCContract?.balanceOf(account)) ?? null
          const BUSDbalance =
            (await contracts.BUSDContract?.balanceOf(account)) ?? null
          const DAIbalance =
            (await contracts.DAIContract?.balanceOf(account)) ?? null
          const FRAXbalance =
            (await contracts.FRAXContract?.balanceOf(account)) ?? null

          reducer.WALLET_UPDATE_STATS({
            sptrbal: BigNumberToActual(SPTRbalance, 'SPTR'),
            batonbal: BigNumberToActual(BATONbalance, 'BATON'),
            usdcbal: BigNumberToActual(USDCbalance, 'USDC'),
            busdbal: BigNumberToActual(BUSDbalance, 'BUSD'),
            daibal: BigNumberToActual(DAIbalance, 'DAI'),
            fraxbal: BigNumberToActual(FRAXbalance, 'FRAX'),
          })
        } else {
          // console.log('No authorized account found')
          toast({
            title: 'Wallet detected but something went wrong!',
            status: 'error',
            duration: 1000,
            position: 'bottom-right',
            containerStyle: {
              width: '50px',
            },
          })
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    handleConnectWallet()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return account && isconnected ? (
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      py="0"
    >
      {!isMobile && localwalletstats.sceptertoken && (
        <Box px="3">
          <Text color="white" fontSize={isMobile ? 14 : 19} fontWeight="light">
            {parseFloat(localwalletstats.sceptertoken)?.toFixed(2)} SPTR
          </Text>
        </Box>
      )}
      <Button
        onClick={handleOpenModal}
        bg="gray.800"
        border="1px solid transparent"
        leftIcon={<IconWallet fill="currentColor" />}
        _hover={{
          border: '1px',
          borderStyle: 'solid',
          borderColor: 'blue.400',
          backgroundColor: 'gray.700',
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height={isMobile ? '30px' : '38px'}
      >
        <Text
          color="white"
          fontSize={isMobile ? 14 : 19}
          fontWeight="light"
          mr="8px"
          mt="5px"
        >
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Icon viewBox="0 0 200 200" color="#AE3C51">
          <path
            fill="#AE3C51"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
      </Button>
    </Box>
  ) : (
    <Button
      onClick={handleConnectWallet}
      bg="transparent"
      color="white"
      size="md"
      fontSize={isMobile ? 14 : 19}
      fontWeight="light"
      leftIcon={<IconWallet fill="currentColor" />}
      borderRadius="xl"
      border="1px solid transparent"
      _hover={{
        borderColor: 'grey',
        boxShadow:
          '-2px -4px 20px rgba(42, 224, 191, 0.2), 0px 4px 20px rgba(234, 58, 246, 0.25)',
        color: 'grey',
      }}
    >
      <Text
        color="white"
        fontSize={isMobile ? 14 : 19}
        fontWeight="light"
        mt="5px"
      >
        Connect wallet
      </Text>
    </Button>
  )
}

const mapStateToProps = (state) => {
  return {
    stats: state.stats,

    localwalletstats: state.localwalletstats,
  }
}

export default connect(mapStateToProps)(ConnectButton)
