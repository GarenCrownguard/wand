import React from "react";

import { VStack, Box, Divider } from "@chakra-ui/react";

import SideBar2MenuItem from "components/1atomic/SideBar2MenuItem";
import links from "resources/links";

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

const SideBar2Menu = () => {

  return (
    <Box>
      <VStack align="flex-start">
        <SideBar2MenuItem
          id={links.dashboard}
          title="Dashboard"
          icon={Icon1dashboard}
          href={links.dashboard}
        />
        <SideBar2MenuItem
          id={links.account}
          title="Account"
          icon={Icon2account}
          href={links.account}
        />
        <Divider borderColor={'#6f6c99'} />
        <SideBar2MenuItem
          id={links.swap}
          title="Swap"
          icon={Icon3swap}
          href={links.swap}
        />
        <SideBar2MenuItem
          id={links.bridge}
          title="Bridge"
          icon={Icon4bridge}
          href={links.bridge}
          soon
        />
        <SideBar2MenuItem
          id={links.lending}
          title="Lending"
          icon={Icon5lending}
          href={links.lending}
          soon
        />
        <Divider borderColor={'#6f6c99'} />
        <SideBar2MenuItem
          id={links.treasuries}
          title="Treasuries"
          icon={Icon6treasuries}
          href={links.treasuries}
        />
        <SideBar2MenuItem
          id={links.governance}
          title="Governance"
          icon={Icon7governance}
          href={links.governance}
          soon
        />
        <SideBar2MenuItem
          id={links.vote}
          title="Vote"
          icon={Icon8vote}
          href={links.vote}
          soon
        />
        <SideBar2MenuItem
          id={links.docs}
          title="Docs"
          icon={Icon9docs}
          href={links.docs}
          isexternal
        />
      </VStack>
    </Box>
  )
};

export default SideBar2Menu;
