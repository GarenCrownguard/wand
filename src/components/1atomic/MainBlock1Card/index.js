import React from "react";

import { Flex } from "@chakra-ui/react";

const BoxStyle = {
  background:
    "radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%)",
  borderRadius: 5,
  border: "1px solid rgba(165, 239, 255, 0.2)",
  padding: 5,
  minHeight: 172,
  alignItems: "center",
};

const MainBlock1Card = (props) => {
  return (
    <Flex sx={BoxStyle} direction={props.direction}>
      {props.children}
    </Flex>
  );
};

export default MainBlock1Card;
