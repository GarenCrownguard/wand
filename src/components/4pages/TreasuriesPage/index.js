import React from 'react'

import {
  Flex,
  Box,
} from '@chakra-ui/react'

import Treasury1InvestmentTable from 'components/2modular/Treasury1InvestmentTable'

import MainBlock3HeaderText from 'components/1atomic/MainBlock3HeaderText'
import Treasury2IndividualDetails from 'components/2modular/Treasury2IndividualDetails'
import GraphEvolutionOfTreasuriesStacked from 'components/1atomic/Graphs/GraphEvolutionOfTreasuriesStacked'
import GraphTreasuryAllocationDonut from 'components/1atomic/Graphs/GraphTreasuryAllocationDonut'

const TreasuriesPage = () => {

  return (
    <>
      <MainBlock3HeaderText text="Treasury Overview" />
      <Flex flexDirection={['column', 'column', 'row']}>
        <GraphEvolutionOfTreasuriesStacked />
        <GraphTreasuryAllocationDonut />
      </Flex>
      <MainBlock3HeaderText text="Individual Treasury Details" />
      <Treasury2IndividualDetails />

      <MainBlock3HeaderText text="Treasury Investments" />

      <Treasury1InvestmentTable />

      {/* <Newtable /> */}
      <Box h="70px" /* Only for spacing*/ />
    </>
  )
}

export default TreasuriesPage
