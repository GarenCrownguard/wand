import React, { useState } from 'react'
import { ethers } from 'ethers'
import { connect } from 'react-redux'

import { abis } from 'contracts/abis'
import { contractAddresses } from 'contracts/addresses'
import * as reducer from 'redux/reducerCalls'

import { Button, useToast, Box } from '@chakra-ui/react'

const ContractInteractionPage = (props) => {
  const { localwalletstats } = props
  const account = localwalletstats.walletAddress
  const toast = useToast()

  const handleConnectWallet = async () => {
    const { ethereum } = window

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
          toast({
            title: 'Wallet connected!',
            status: 'success',
            duration: 1000,
            position: 'bottom-right',
            containerStyle: {
              width: '50px',
            },
          })
          reducer.UPDATE_ADDRESS({ walletAddress: account })
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
  const handleDisconnectWallet = () => {
    reducer.WALLET_DISCONNECT()
  }
  return (
    <>
      {!account && (
        <Button onClick={handleConnectWallet} colorScheme="blue">
          Connect wallet
        </Button>
      )}
      {account && (
        <Button onClick={handleDisconnectWallet} colorScheme="blue">
          Disconnect wallet
        </Button>
      )}
      {account}
      <Box bg='transparent' h='10px'/>
      <Button colorScheme="blue">Button</Button>
      <Button colorScheme="blue">Button</Button>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    localwalletstats: state.localwalletstats,
  }
}
export default connect(mapStateToProps)(ContractInteractionPage)
