import React from 'react'
import { prettifyamounts } from 'resources/utilities'
import MainBlock1Card from '../MainBlock1Card'
import MainBlock2StatsText from '../MainBlock2StatsText'

const GraphTreasuryAllocationDonut = (props) => {
  return (
    <MainBlock1Card
      minHeight="345px"
      minWidth={['320px', '356px', '356px']}
      p="25px"
    >
      <MainBlock2StatsText
        title="Treasury Allocation"
        value={prettifyamounts(200000)}
        align="left"
      />
    </MainBlock1Card>
  )
}

export default GraphTreasuryAllocationDonut
