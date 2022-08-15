import React from 'react'
import { connect } from 'react-redux'
import { ethers } from 'ethers'
import * as reducer from 'redux/reducerCalls'
import contracts from 'contracts/contracts'
import { Button, Box } from '@chakra-ui/react'
import { BigNumberFormat } from 'resources/utilities'

const ContractInteractionPage = (props) => {
  const { localwalletstats } = props
  const account = localwalletstats.walletAddress

  const handleConnectWallet = async () => {
    const { ethereum } = window

    if (!ethereum) {
      console.log('no wallet detected')
    } else {
      try {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        })

        if (accounts.length !== 0) {
          const account = accounts[0]
          console.log('Found an authorized account: ', account)

          reducer.UPDATE_ADDRESS({ walletAddress: account })
        } else {
          console.log('No authorized account found')
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
  const handleDisconnectWallet = () => {
    reducer.WALLET_DISCONNECT()
  }

  const getContracts = async () => {
    let mockUSDCbalance =
      (await contracts.mockUSDCContract?.balanceOf(account)) ??
      'mockUSDC getting balance error'
    console.log(BigNumberFormat(mockUSDCbalance, 'mockUSDC'))
    let SPTRbalance =
      (await contracts.SPTRContract?.balanceOf(account)) ??
      'SPTR getting balance error'
    console.log(BigNumberFormat(SPTRbalance, 'SPTR'))
  }
  getContracts()

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
      <Box bg="transparent" h="10px" />
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
