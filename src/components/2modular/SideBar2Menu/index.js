import React from "react";

import { VStack, Box, Divider } from "@chakra-ui/react";

import SideBar2MenuItem from "components/1atomic/SideBar2MenuItem";
import { useHistory } from "react-router-dom";
import links from "resources/links";
import { convertSlugToUrl } from "resources/utilities";

import {
  Icon1dashboard,
  Icon2account,
  Icon3swap,
  Icon4bridge,
  Icon5lending,
  Icon6treasuries,
  Icon7governance,
  Icon8vote,
  Icon9docs,
} from "./icons";

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
          icon={Icon1dashboard}
          onClick={() => onClick(links.dashboard)}
        />
        <SideBar2MenuItem
          id={links.account}
          title="Account"
          icon={Icon2account}
          onClick={() => onClick(links.account)}
        />
        <Divider borderColor={"#6f6c99"} />
        <SideBar2MenuItem
          id={links.swap}
          title="Swap"
          icon={Icon3swap}
          onClick={() => onClick(links.swap)}
        />
        <SideBar2MenuItem
          id={links.bridge}
          title="Bridge"
          icon={Icon4bridge}
          onClick={() => onClick(links.bridge)}
          soon
        />
        <SideBar2MenuItem
          id={links.lending}
          title="Lending"
          icon={Icon5lending}
          onClick={() => onClick(links.lending)}
          soon
        />
        <Divider borderColor={"#6f6c99"} />
        <SideBar2MenuItem
          id={links.treasuries}
          title="Treasuries"
          icon={Icon6treasuries}
          onClick={() => onClick(links.treasuries)}
        />
        <SideBar2MenuItem
          id={links.governance}
          title="Governance"
          icon={Icon7governance}
          onClick={() => onClick(links.governance)}
          soon
        />
        <SideBar2MenuItem
          id={links.vote}
          title="Vote"
          icon={Icon8vote}
          onClick={() => onClick(links.vote)}
          soon
        />
        <SideBar2MenuItem
          id={links.docs}
          title="Docs"
          icon={Icon9docs}
          onClick={() => onClick(links.docs)}
        />
      </VStack>
    </Box>
  );
};

export default SideBar2Menu;
