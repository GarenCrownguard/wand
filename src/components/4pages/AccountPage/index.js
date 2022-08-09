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

import OverviewBarComponent from "components/overview";

const AccountPage = () => {
  return (
    <>
      <Wrap spacing="30px" align="center" justify="center">
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="40px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="120px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="40px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.500">
            Box 5
          </Center>
        </WrapItem>
      </Wrap>
      <Grid
        h="365px"
        templateRows={{ base: "repeat(9, 1fr)", md: "repeat(3, 1fr)" }}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
        gap="17px"
      >
        <GridItem
          rowSpan={3}
          colSpan={1}
          h={{ base: "365px" }}
          minWidth={{ base: "", md: "365px" }}
          bg="tomato"
        />
        <GridItem rowSpan={1} colSpan={2} bg="papayawhip" />
        <GridItem rowSpan={1} colSpan={2} bg="papayawhip" />
        <GridItem rowSpan={1} colSpan={2} bg="tomato" />
        <GridItem rowSpan={1} colSpan={2} bg="tomato" />
        <GridItem rowSpan={1} colSpan={2} bg="papayawhip" />
        <GridItem rowSpan={1} colSpan={2} bg="tomato" />
      </Grid>

      <Grid
        templateAreas={`
            "stat stat graph"
            "stat stat graph"
            "stat stat graph"`}
        gridTemplateRows={{ base: "repeat(9, 1fr)", md: "repeat(50px, 1fr)" }}
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(150px, 1fr)",
        }}
        gap={{ md: "0px", lg: "17px" }}
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem bg="pink.300" area={"stat"}>
          Nav
        </GridItem>
        <GridItem
          bg="orange.300"
          h={{ base: "365px" }}
          minWidth={{ base: "", md: "365px" }}
          area={"graph"}
        >
          Graph
        </GridItem>
      </Grid>
      <Box p={4} display={{ md: "flex" }}>
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            Marketing
          </Text>
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            Finding customers for your new business
          </Link>
          <Text mt={2} color="gray.500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </Text>
        </Box>
        <Box
          flexShrink={0}
          w={{ md: "363px", lg: 60 }}
          h="363px"
          bg="green.200"
        ></Box>
      </Box>
      <OverviewBarComponent />
    </>
  );
};

export default AccountPage;
