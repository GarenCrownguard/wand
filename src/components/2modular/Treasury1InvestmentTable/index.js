import React, { useEffect, useState } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

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
    async function getdata() {}

    getdata();
  }, []);

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
            <Th>checking</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
            <Td>25.6%</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Treasury1InvestmentTable;
