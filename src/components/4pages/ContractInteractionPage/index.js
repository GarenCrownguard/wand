import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ethers } from 'ethers'
import * as reducer from 'redux/reducerCalls'
import contracts from 'contracts/contracts'
import { Button, Box, Flex } from '@chakra-ui/react'
import { BigNumberFormat } from 'resources/utilities'
import contractAddresses from 'contracts/addresses'

const MAX_APPROVAL = ethers.BigNumber.from(
  '0xfffffffffffffffffffffffffffffffff'
)

const ContractInteractionPage = (props) => {
  const { localwalletstats } = props
  const account = localwalletstats.walletAddress

  const [approvalAmount, setApprovalAmount] = useState('')

  //   const getContracts = async () => {
  //     let mockUSDCbalance =
  //       (await contracts.mockUSDCContract?.balanceOf(account)) ??
  //       'mockUSDC getting balance error'
  //     console.log(BigNumberFormat(mockUSDCbalance, 'mockUSDC'))
  //     let SPTRbalance =
  //       (await contracts.SPTRContract?.balanceOf(account)) ??
  //       'SPTR getting balance error'
  //     console.log(BigNumberFormat(SPTRbalance, 'SPTR'))
  //   }
  //   getContracts()

  const batonapprove = async () => {
    try {
      console.log('Initialize BATON approval')
      let ApproveBATON =
        (await contracts.BATONContract?.approve(
          contractAddresses.wand,
            MAX_APPROVAL
        //   1000000000000
        )) ?? 'BATON approving failed'

      console.log('Approving... please wait')
      await ApproveBATON.wait()

      console.log(
        `Approved, see transaction: https://testnet.snowtrace.io/tx/${ApproveBATON.hash}`
      )
    } catch (error) {
      console.log(error.code === 4001)
    }
  }

  const checkAllowance = async () => {
    const compareTokens = '999999999999999999999999999'
    try {
      console.log('Checking BATON allowance')
      let wandAllowanceBATON =
        (await contracts.BATONContract?.allowance(
          account,
          contractAddresses.wand
        )) ?? 0

      //   console.log('Checking... please wait')
      //   await wandAllowanceBATON.wait()

      //   console.log(
      //     `Checked, see transaction: https://testnet.snowtrace.io/tx/${wandAllowanceBATON.hash}`
      //   )

      setApprovalAmount(wandAllowanceBATON.toString());

      console.log(BigNumberFormat(wandAllowanceBATON, 'BATON'))
      console.log(wandAllowanceBATON.gt(ethers.BigNumber.from(compareTokens)))
      console.log(wandAllowanceBATON.gt(compareTokens))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Flex direction="column">
      Account: {account}
      <Button onClick={checkAllowance} colorScheme="blue">
        Check Allowance
      </Button>
      Amount of Allowance: {approvalAmount}
      <Button onClick={batonapprove} colorScheme="blue">
        Approve baton spend
      </Button>
    </Flex>
  )
}

const mapStateToProps = (state) => {
  return {
    localwalletstats: state.localwalletstats,
  }
}
export default connect(mapStateToProps)(ContractInteractionPage)
