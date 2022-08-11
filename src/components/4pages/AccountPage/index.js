import React from "react";

import {
  Grid,
  GridItem,
  Wrap,
  WrapItem,
  Center,
  Box,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

import MainBlock2OutstandingStats from "components/2modular/MainBlock2OutstandingStats";
import MainBlock1OverviewStats from "components/2modular/MainBlock1OverviewStats";

const AccountPage = () => {
  return (
    <>
      <MainBlock2OutstandingStats />
      <MainBlock1OverviewStats />
    </>
  );
};

export default AccountPage;
