import React from "react";

import { Tr, Link, Td } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { prettifyamounts } from "resources/utilities";

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
  } = props;

  return (
    <Tr>
      {/* <Td>{chain}</Td> */}
      <Td>
        <Link color="wandGreen" href={protocolUrl} isExternal>
          {protocolName}
          <ExternalLinkIcon mx="5px" mt="-5px" />
        </Link>
      </Td>
      <Td>{prettifyamounts(investmentAmount)}</Td>
      <Td>{date}</Td>
      <Td>{expectedApy}%</Td>
      <Td>
        <Link color="wandGreen" href={transactionLink} isExternal>
          View Transaction
          <ExternalLinkIcon mx="5px" mt="-5px" />
        </Link>
      </Td>
    </Tr>
  )
};

export default Treasury1InvestmentItem;
