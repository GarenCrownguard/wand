import React, { useEffect, useState } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  TableContainer,
} from "@chakra-ui/react";

import Treasury1InvestmentItem from "components/1atomic/Treasury1InvestmentItem";

const Treasury1InvestmentTable = () => {
  const [investmentList, setInvestmentList] = useState([
    {
      date: "23/05/2022",
      chain: "BSC",
      expectedAPY: 0.3,
      investedAmount: 40000,
      protocolName: "BANCOR",
      protocolURL: "bancor.com",
      transactionLink: "https://snowtrace.io/transaction/0x2984795872945876",
    },
    {
      date: "27/07/2022",
      chain: "FTM",
      expectedAPY: 15,
      investedAmount: 40000,
      protocolName: "Tarot Finance",
      protocolURL: "tarot.com",
      transactionLink: "https://snowtrace.io/transaction/0x2984795872945885",
    },
    {
      date: "12/08/2022",
      chain: "ONE",
      expectedAPY: 150,
      investedAmount: 49000,
      protocolName: "Hundred Finance",
      protocolURL: "https://hundred.finance/",
      transactionLink: "https://snowtrace.io/transaction/0x2984795872635885",
    },
  ]);

  useEffect(() => {
    async function getdata() {
      // console.log(investmentList);
    }
    getdata();
  }, []);

  return (
    <TableContainer>
      <Table variant="simple" size="md" colorScheme="Red.400">
        <Thead>
          <Tr>
            {/* <Th>Chain</Th> */}
            <Th>
              <Text variant="investment-heading-text">Protocol</Text>
            </Th>
            <Th>Investment</Th>
            <Th>Date</Th>
            <Th>Expected APY</Th>
            <Th>Transaction Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {investmentList.map((investment) => (
            <Treasury1InvestmentItem
              key={investment.date}
              // chain={investment.chain}
              protocolName={investment.protocolName}
              protocolUrl={investment.protocolURL}
              investmentAmount={investment.investedAmount}
              date={investment.date}
              expectedApy={investment.expectedAPY}
              transactionLink={investment.transactionLink}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Treasury1InvestmentTable;
