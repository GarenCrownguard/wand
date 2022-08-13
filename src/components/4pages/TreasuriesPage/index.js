import React from "react";

import { Box } from "@chakra-ui/react";

import Treasury1InvestmentTable from "components/2modular/Treasury1InvestmentTable";

const TreasuriesPage = () => {
  return (
    <>
      Treasury Page
      <Treasury1InvestmentTable />
      <Box h="70px" /* Only for spacing*/ />
    </>
  )
};

export default TreasuriesPage;
