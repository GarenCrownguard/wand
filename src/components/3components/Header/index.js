import React from "react";

import { useDisclosure, Flex, Box, IconButton } from "@chakra-ui/react";

import ConnectButton from "components/2modular/Header1Wallet/ConnectButton";
import AccountModal from "components/2modular/Header1Wallet/AccountModal";

import IconLogo from "./icon/icon-logo";
import IconBurger from "./icon/icon-burger";

const Header = ({ isMobile, onBurgerButtonClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(isSidebarOpen);
  return (
    <Flex
      h="96px"
      top="20px"
      flexDirection="row"
      alignContent="flex-start"
      alignItems="center"
      justifyContent="flex-end"
    >
      <Box ml={0} mr="auto">
        <IconLogo />
      </Box>
      <ConnectButton handleOpenModal={onOpen} isMobile={isMobile} />
      <AccountModal isOpen={isOpen} onClose={onClose} isMobile={isMobile} />
      {isMobile && (
        <IconButton
          colorScheme="tranparent"
          icon={<IconBurger />}
          onClick={onBurgerButtonClick}
          size="sm"
        />
      )}
    </Flex>
  );
};

export default Header;
