import React from 'react'
import { connect } from 'react-redux'
import { ethers } from 'ethers'
import * as reducer from 'redux/reducerCalls'
import contracts from 'contracts/contracts'
import { Button, Box, Flex } from '@chakra-ui/react'
import { BigNumberFormat } from 'resources/utilities'

const ContractInteractionPage = (props) => {
  const { localwalletstats } = props
  const account = localwalletstats.walletAddress

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
    <Flex direction='column' justifyContent='space-around' h='100vh'>
      Account: {account}
      <Button colorScheme="blue">Button</Button>
      <Button colorScheme="blue">Button</Button>
    </Flex>
  )
}

const mapStateToProps = (state) => {
  return {
    localwalletstats: state.localwalletstats,
  }
}
export default connect(mapStateToProps)(ContractInteractionPage)
