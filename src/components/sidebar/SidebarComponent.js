import React from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
// import links from 'resources/links';
import links from "resources/links";
import {
  iconSoon,
  iconAccount,
  iconBridge,
  iconDashboard,
  iconDocs,
  iconGovernance,
  iconLending,
  iconSwapSidebar,
  iconVote,
} from "assets/icons";
import { convertSlugToUrl } from "resources/utilities";
import LogoComponent from "./LogoComponent";
import Menu from "./MenuComponent";
import MenuItem from "./MenuItemComponent";

const useStyles = createUseStyles({
  separator: {
    borderTop: () => '1px solid #6f6c99',
    width: 135,
    marginTop: 16,
    marginBottom: 16,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
});

function SidebarComponent() {
  const { push } = useHistory();

  const classes = useStyles();
  const isMobile = window.innerWidth <= 1080;

  // async function logout() {
  //   push(links.login);
  // }

  function onClick(slug, parameters = {}) {
    push(convertSlugToUrl(slug, parameters));
  }

  return (
    <Menu isMobile={isMobile}>
      <div style={{ paddingTop: 87, paddingBottom: 112.39 }}>
        <LogoComponent />
      </div>
      <MenuItem
        id={links.dashboard}
        title="Dashboard"
        icon={iconDashboard}
        onClick={() => onClick(links.dashboard)}
      />
      <MenuItem
        id={links.account}
        title="Account"
        icon={iconAccount}
        onClick={() => onClick(links.account)}
      />
      <div className={classes.separator}></div>
      <MenuItem
        id={links.swap}
        title="Swap"
        icon={iconSwapSidebar}
        onClick={() => onClick(links.swap)}
      />
      <MenuItem
        id={links.bridge}
        title="Bridge"
        icon={iconBridge}
        onClick={() => onClick(links.bridge)}
        soonicon={iconSoon}
      />
      <MenuItem
        id={links.lending}
        title="Lending"
        icon={iconLending}
        onClick={() => onClick(links.lending)}
        soonicon={iconSoon}
      />
      <div className={classes.separator}></div>
      <MenuItem
        id={links.governance}
        title="Governance"
        icon={iconGovernance}
        onClick={() => onClick(links.governance)}
        soonicon={iconSoon}
      />
      <MenuItem
        id={links.vote}
        title="Vote"
        icon={iconVote}
        onClick={() => onClick(links.vote)}
        soonicon={iconSoon}
      />
      <MenuItem
        id={links.docs}
        title="Docs"
        icon={iconDocs}
        onClick={() => onClick(links.docs)}
      />
    </Menu>
  );
}

export default SidebarComponent;
