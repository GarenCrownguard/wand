import React from "react";

import { Button, Box } from "@chakra-ui/react";

import { IconSoon } from "./icons";

const buttonstyle = {
  bg: "tranparent",
  color: "grey",
  size: "lg",
  fontSize: "lg",
  fontWeight: 400,
  w: "100%",
  pl: "25px",
  pt: "10px",
  pb: "15px",
  _hover: {
    color: "white",
  },
};

const SideBar2MenuItem = ({ icon: Icon, onClick, title, soon }) => {
  return soon ? (
    <Button
      sx={buttonstyle}
      onClick={onClick}
      leftIcon={<Icon fill="currentColor" />}
      variant="link"
      display="flex"
      justifyContent="flex-start"
      iconSpacing="15px"
    >
      {title}
      <Box mr="30px" ml="auto">
        <IconSoon />
      </Box>
    </Button>
  ) : (
    <Box>
      <Button
        sx={buttonstyle}
        onClick={onClick}
        leftIcon={<Icon fill="currentColor" />}
        variant="link"
        iconSpacing="15px"
      >
        {title}
      </Button>
    </Box>
  );
};

export default SideBar2MenuItem;
