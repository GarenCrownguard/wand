import React from "react";

import { Box } from "@chakra-ui/react";

const MainDisplayBlock = (props) => {
  const { isMobile } = props;

  return (
    <Box
      w={isMobile ? "100%" : ""}
      ml={isMobile ? "0px" : "255px"}
      mt={isMobile ? "10px" : ""}
      h="100vh"
      top={0}
      pb="35px"
      pt="35px"
    >
      {props.children}
    </Box>
  );
};

export default MainDisplayBlock;
