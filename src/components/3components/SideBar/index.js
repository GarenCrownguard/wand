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
      zIndex={10}
    >
      <Box pt="67px" pb="30px" ml="35px">
        <SideBar1Logo />
      </Box>
      <SideBar2Menu onClick={onClose} />
      <Box ml="25px" position="fixed" bottom={0} left={0}>
        <SideBar3Footer />
      </Box>
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} zIndex={10}>
      <DrawerOverlay bg="tranparent" backdropFilter="auto" backdropBlur="20px">
        <DrawerContent
          bg="tranparent"
          backdropFilter="auto"
          backdropBlur="20px"
        >
          <DrawerHeader pt="65px" pb="20px" ml="15px">
            <SideBar1Logo />
            <DrawerCloseButton size="lg" mt="55px" />
          </DrawerHeader>
          <DrawerBody>
            <SideBar2Menu />
          </DrawerBody>
          <DrawerFooter>
            <SideBar3Footer />
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
