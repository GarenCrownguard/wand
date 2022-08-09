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

import Treasury1InvestmentItem from "../../1atomic/Treasury1InvestmentItem";

import * as myConstants from "../../../resources/constants";
import axios from "axios";

const Treasury1InvestmentTable = () => {
  const [investmentList, setInvestmentList] = useState([
    {
      date: "Updating...",
      chain: "Updating...",
      expectedAPY: "Updating...",
      investedAmount: "Updating...",
      protocolName: "Updating...",
      protocolURL: "Updating...",
      transactionLink: "https://snowtrace.io/",
    },
  ]);

  useEffect(() => {
    async function getdata() {
      await axios
        .get(`${myConstants.API_URL}/investment-list-data`)
        .then((res) => {
          setInvestmentList(res.data);
        });
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
