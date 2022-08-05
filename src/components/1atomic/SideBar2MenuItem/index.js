import React from "react";

import { Button, Box } from "@chakra-ui/react";

import { IconSoon } from "./icons";

const buttonstyle = {
  bg: "tranparent",
  color: "grey",
  size: "lg",
  fontSize: "lg",
  fontWeight: 400,
  borderRadius: "0px",
//   w: "100%",
  pl: "25px",
  _hover: {
    borderColor: "white",
    bg: "rgba(221, 226, 255, 0.08)",
    color: "white",
  },
};

const SideBar2MenuItem = ({ icon: Icon, onClick, title, soon }) => {
  return soon ? (
    <Button
      sx={buttonstyle}
      onClick={onClick}
      leftIcon={<Icon fill="currentColor" />}
      rightIcon={<IconSoon />}
      isDisabled
    >
      {title}
    </Button>
  ) : (
    <Button
      sx={buttonstyle}
      onClick={onClick}
      leftIcon={<Icon fill="currentColor" />}
    >
      {title}
    </Button>
  );
};

export default SideBar2MenuItem;
