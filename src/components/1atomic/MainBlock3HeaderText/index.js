import React from "react";

import { Text } from "@chakra-ui/react";

const MainBlock3HeaderText = (props) => {
  const { text } = props;
  return (
    <Text fontSize="26px" fontWeight={700} m="7px" mt="28px" mb="28px" {...props}>
      {text}
    </Text>
  );
};

export default MainBlock3HeaderText;
