import React from "react";

import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
} from "@chakra-ui/react";

import SideBar1Logo from "components/2modular/SideBar1Logo";
import SideBar2Menu from "components/2modular/SideBar2Menu";
import SideBar3Footer from "components/2modular/SideBar3Footer";

const Sidebar = ({ isOpen, variant, onClose }) => {
  return variant === "sidebar" ? (
    <Box
      position="fixed"
      left={0}
      w="255px"
      h="100%"
      top={0}
      backdropFilter="auto"
      backdropBlur="140px"
      bg="#06141D"
      opacity={0.98}
      boxShadow="20px 0px 250px 10px rgba(234, 58, 246, 0.4)"
    >
      <Box pt="87px" pb="112px" ml="25px">
        <SideBar1Logo />
      </Box>
      <SideBar2Menu onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay bg="tranparent" backdropFilter="auto" backdropBlur="20px">
        <DrawerContent
          bg="tranparent"
          backdropFilter="auto"
          backdropBlur="20px"
        >
          <DrawerCloseButton />
          <DrawerHeader>
            <SideBar1Logo />
          </DrawerHeader>
          <DrawerBody>
            <SideBar2Menu onClick={onClose} />
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
