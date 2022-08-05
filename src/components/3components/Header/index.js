import React from "react";

import { useDisclosure } from "@chakra-ui/react";

import ConnectButton from "components/2modular/Header1Wallet/ConnectButton";
import AccountModal from "components/2modular/Header1Wallet/AccountModal";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ConnectButton handleOpenModal={onOpen} />
      <AccountModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
