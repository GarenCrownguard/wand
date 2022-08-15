import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Flex, Stack, useBreakpointValue, Divider } from '@chakra-ui/react'
import TableHead from './TableHead'
import Treasury1InvestmentItem from 'components/1atomic/Treasury1InvestmentItem'

const Treasury1InvestmentTable = () => {
  const variantScreenSize = useBreakpointValue({
    base: {
      isMobile: true,
    },
    md: {
      isMobile: false,
    },
  })

  const [investmentList, setInvestmentList] = useState([
    {
      date: 'Updating...',
      chain: 'Updating...',
      expectedAPY: 'Updating...',
      investedAmount: 'Updating...',
      protocolName: 'Updating...',
      protocolURL: 'Updating...',
      transactionLink: 'https://snowtrace.io/',
    },
  ])

  useEffect(() => {
    async function getdata() {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/investment-list-data`)
        .then((res) => {
          setInvestmentList(res.data)
        })
    }
    getdata()
  }, [])

  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Stack
        direction={{
          base: 'column',
        }}
        w="full"
        shadow="lg"
      >
        {!variantScreenSize.isMobile && (
          <>
            <TableHead isMobile={variantScreenSize.isMobile} />
            <Divider />
          </>
        )}
        {React.Children.toArray(
          investmentList.map((investment) => (
            <>
              <Treasury1InvestmentItem
                // chain={investment.chain}
                protocolName={investment.protocolName}
                protocolUrl={investment.protocolURL}
                investmentAmount={investment.investedAmount}
                date={investment.date}
                expectedApy={investment.expectedAPY}
                transactionLink={investment.transactionLink}
                isMobile={variantScreenSize.isMobile}
              />
              <Divider />
            </>
          ))
        )}
      </Stack>
    </Flex>
  )
}

export default Treasury1InvestmentTable
