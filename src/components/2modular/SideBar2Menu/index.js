import React from "react";

import { Button, VStack, Box } from "@chakra-ui/react";

import SideBar2MenuItem from "components/1atomic/SideBar2MenuItem";
import { useHistory } from "react-router-dom";
import links from "resources/links";
import { convertSlugToUrl } from "resources/utilities";

import { IconWallet } from "./icons";

const SideBar2Menu = ({ onClick }) => {
  const { push } = useHistory();
  function onClick(slug, parameters = {}) {
    push(convertSlugToUrl(slug, parameters));
  }

  return (
    <Box>
      <VStack align="flex-start">
        <SideBar2MenuItem
          id={links.dashboard}
          title="Dashboard"
          icon={IconWallet}
          onClick={() => onClick(links.dashboard)}
        />
        <SideBar2MenuItem
          id={links.dashboard}
          title="Dashboard"
          icon={IconWallet}
          onClick={() => onClick(links.dashboard)}
        />
        <Button onClick={onClick} w="100%">
          About
        </Button>
        <Button onClick={onClick} w="100%">
          Contact
        </Button>
      </VStack>
    </Box>
  );
};

export default SideBar2Menu;
