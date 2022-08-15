import React from 'react'

import { Link, Flex, SimpleGrid, chakra } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import { prettifyamounts } from 'resources/utilities'
import TableHead from 'components/2modular/Treasury1InvestmentTable/TableHead'

const Treasury1InvestmentItem = (props) => {
  /* EXAMPLE */
  /* 
        date: '12/08/2022',
        chain: 'ONE',
        expectedAPY: 150,
        investedAmount: 49000,
        protocolName: 'Hundred Finance',
        protocolURL: 'https://hundred.finance/',
        transactionLink: 'https://snowtrace.io/transaction/0x2984795872635885'   
    */
  const {
    // chain,
    protocolName,
    protocolUrl,
    investmentAmount,
    date,
    expectedApy,
    transactionLink,
    isMobile,
  } = props

  return (
    <Flex
      direction={{
        base: 'row',
        md: 'column',
      }}
    >
      {isMobile && <TableHead isMobile={isMobile} />}
      <SimpleGrid
        spacingY={3}
        columns={{
          base: 1,
          md: 5,
        }}
        w="full"
        py={2}
        px={10}
        fontWeight="hairline"
      >
        <chakra.span
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
          color="black"
        >
          <Link color="wandGreen" href={protocolUrl} isExternal>
            {protocolName}
            <ExternalLinkIcon mx="5px" mt="-5px" />
          </Link>
        </chakra.span>
        <chakra.span
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
        >
          {prettifyamounts(investmentAmount)}
        </chakra.span>
        <Flex>{date}</Flex>
        <Flex>{expectedApy} %</Flex>
        <Flex
          justify={{
            md: 'start',
          }}
        >
          <Link color="wandGreen" href={transactionLink} isExternal>
            {isMobile ? 'View' : 'View Transaction'}

            <ExternalLinkIcon mx="5px" mt="-5px" />
          </Link>
        </Flex>
      </SimpleGrid>
    </Flex>
  )
}

export default Treasury1InvestmentItem
