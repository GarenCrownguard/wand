import React from 'react'
// Everything is AVAX interaction

import mockUSDCabi from 'contracts/abi/AVAXChainTestnet/mockUSDC.json'
import SPTRabi from 'contracts/abi/AVAXChainTestnet/SPTR.json'
import BATONabi from 'contracts/abi/AVAXChainTestnet/BATON.json'
import wandabi from 'contracts/abi/AVAXChainTestnet/wand.json'

import { Button } from '@chakra-ui/react'

const ContractInteractionPage = (props) => {

    /* AVAX Testnet Contract Addresses */
    const mockUSDC = '0x8f2431dcb2Ad3581cb1f75FA456931e7A15C6d43';
    const SPTR = '0xD8098BE05A7d32636f806660E40451ab1df3f840'
    const BATON = '0x0A0AebE2ABF81bd34d5dA7E242C0994B51fF5c1f'
    const wand = '0x39920479F867C393408844DD588D3B51b960233B'


  return (
    <>
      <Button colorScheme="blue">Button</Button>
    </>
  )
}

export default ContractInteractionPage
