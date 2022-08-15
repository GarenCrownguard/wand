import React from 'react'

import { SimpleGrid, Text, chakra, Divider } from '@chakra-ui/react'

const TableHead = ({ isMobile }) => {
  return (
    <SimpleGrid
      spacingY={3}
      columns={{
        base: 1,
        md: 5,
      }}
      w={{
        base: 200,
        md: 'full',
      }}
      textTransform="uppercase"
      color={'gray.500'}
      py={1}
      px={{
        base: 2,
        md: 10,
      }}
      fontSize={isMobile ? 'sm' : 'md'}
      fontWeight="hairline"
    >
      <span>
        <Text variant="investment-heading-text">Protocol</Text>
      </span>

      <span>
        <Text variant="investment-heading-text">Investment</Text>
      </span>

      <span>
        <Text variant="investment-heading-text">Date</Text>
      </span>

      <span>
        {isMobile ? (
          <Text variant="investment-heading-text">APY</Text>
        ) : (
          <Text variant="investment-heading-text">Expected APY</Text>
        )}
      </span>

      <chakra.span
        textAlign={{
          md: 'left',
        }}
      >
        {isMobile ? (
          <Text variant="investment-heading-text">Transaction</Text>
        ) : (
          <Text variant="investment-heading-text">Transaction Details</Text>
        )}
      </chakra.span>
    </SimpleGrid>
  )
}

export default TableHead
