import React from "react";
import { connect } from "react-redux";
import { VStack, Box, Divider, Tag } from "@chakra-ui/react";

import SideBar2MenuItem from "components/1atomic/SideBar2MenuItem";
import links from "resources/links";

import {
  Icon1dashboard,
  Icon2account,
  Icon3swap,
//   Icon4bridge,
//   Icon5lending,
  Icon6treasuries,
  Icon7governance,
  Icon8vote,
  Icon9docs,
  Icon10bots
} from "./icons";

const SideBar2Menu = (props) => {
const isconnected = props.localwalletstats.isconnected;

  return (
    <Box>
      <VStack align="flex-start">
        <SideBar2MenuItem
          id={links.dashboard}
          title="Dashboard"
          icon={Icon1dashboard}
          href={links.dashboard}
          closeSidebar={props.onCloseSideBar}
        />
        {isconnected && (
          <SideBar2MenuItem
            id={links.account}
            title="Account"
            icon={Icon2account}
            href={links.account}
            closeSidebar={props.onCloseSideBar}
          />
        )}
        <Divider borderColor={'#6f6c99'} />
        <SideBar2MenuItem
          id={links.swap}
          title="Swap"
          icon={Icon3swap}
          href={links.swap}
          closeSidebar={props.onCloseSideBar}
        />
        {/* <SideBar2MenuItem
          id={links.bridge}
          title="Bridge"
          icon={Icon4bridge}
          href={links.bridge}
          soon
          closeSidebar={props.onCloseSideBar}
        />
        <SideBar2MenuItem
          id={links.lending}
          title="Lending"
          icon={Icon5lending}
          href={links.lending}
          soon
          closeSidebar={props.onCloseSideBar}
        /> */}
        <SideBar2MenuItem
          id={links.spacebots}
          title="Bots"
          icon={Icon10bots}
          href={links.spacebots}
          isexternal
          closeSidebar={props.onCloseSideBar}
        />
        <Divider borderColor={'#6f6c99'} />
        <SideBar2MenuItem
          id={links.treasuries}
          title="Treasuries"
          icon={Icon6treasuries}
          href={links.treasuries}
          closeSidebar={props.onCloseSideBar}
        />
        <SideBar2MenuItem
          id={links.governance}
          title="Governance"
          icon={Icon7governance}
          href={links.governance}
          soon
          closeSidebar={props.onCloseSideBar}
        />
        <SideBar2MenuItem
          id={links.vote}
          title="Vote"
          icon={Icon8vote}
          href={links.vote}
          isexternal
          closeSidebar={props.onCloseSideBar}
        />
        <SideBar2MenuItem
          id={links.docs}
          title="Docs"
          icon={Icon9docs}
          href={links.docs}
          isexternal
          closeSidebar={props.onCloseSideBar}
        />
        {process.env.REACT_APP_DEV && (
          <Tag colorScheme="red">Development Mode</Tag>
        )}
        {process.env.REACT_APP_API_URL.includes('uat') && (
          <Tag colorScheme="green">UAT Database</Tag>
        )}
      </VStack>
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    localwalletstats: state.localwalletstats
  }
}

export default connect(mapStateToProps)(SideBar2Menu)