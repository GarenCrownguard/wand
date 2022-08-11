import React from "react";

import { Center, Divider, useBreakpointValue } from "@chakra-ui/react";

const MainBlock2Divider = () => {
  return (
    <Center
      w={["150px", "150px", "5px"]}
      height={["21px", "21px", "50px"]}
      alignSelf="center"
    >
      <Divider
        orientation={useBreakpointValue([
          "horizontal",
          "horizontal",
          "vertical",
        ])}
      />
    </Center>
  );
};

export default MainBlock2Divider;
