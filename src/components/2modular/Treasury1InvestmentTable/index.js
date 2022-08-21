import React, { useEffect } from 'react'
import { Flex, Stack, useBreakpointValue, Divider } from '@chakra-ui/react'
import TableHead from './TableHead'
import Treasury1InvestmentItem from 'components/1atomic/Treasury1InvestmentItem'
import { connect } from 'react-redux'

const Treasury1InvestmentTable = (props) => {

    const { investmentlist } = props.stats

  const variantScreenSize = useBreakpointValue({
    base: {
      isMobile: true,
    },
    md: {
      isMobile: false,
    },
  })

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
        {investmentlist &&
          React.Children.toArray(
            investmentlist.map((investment) => (
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

const mapStateToProps = (state) => {
  return {
    stats: state.stats,
  }
}

export default connect(mapStateToProps)(Treasury1InvestmentTable)