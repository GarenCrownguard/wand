import React, { useContext } from "react";
import { string } from "prop-types";
import { Row } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";
import { SidebarContext } from "hooks/useSidebar";
import links from "resources/links";

import { IconWallet } from "assets/icons";

const useStyles = createUseStyles((theme) => ({
  container: {
    height: 40,
  },
  name: {
    ...theme.typography.itemTitle,
    textAlign: "right",
    color: "white",
    "@media (max-width: 768px)": {
      // display: "none",
      fontSize: 12,
    },
  },
  title: {
    ...theme.typography.title,
    "@media (max-width: 1080px)": {
      marginLeft: 50,
    },
    "@media (max-width: 468px)": {
      fontSize: 20,
    },
  },
  iconStyles: {
    cursor: "pointer",
    marginLeft: 25,
    "@media (max-width: 768px)": {
      marginLeft: 12,
    },
  },
  walletDisconnectButton: {
    alignItems: "center",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    padding: 0,
    outline: "none",
  },
  walletConnectButton: {
    alignItems: "center",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    padding: 0,
    outline: "none",
  },
  walletIconConnected: {
    height: 10.11,
    width: 10.79,
  },
}));

function HeaderComponent() {
  const { currentItem } = useContext(SidebarContext);
  const theme = useTheme();
  const classes = useStyles({ theme });

  let title;
  switch (true) {
    case currentItem === links.dashboard:
      title = "Dashboard";
      break;
    case currentItem === links.account:
      title = "Account";
      break;
    case currentItem === links.swap:
      title = "Swap";
      break;
    case currentItem === links.bridge:
      title = "Bridge";
      break;
    case currentItem === links.lending:
      title = "Lending";
      break;
    case currentItem === links.treasuries:
      title = "Treasuries";
      break;
    case currentItem === links.governance:
      title = "Governance";
      break;
    case currentItem === links.vote:
      title = "Vote";
      break;
    case currentItem === links.docs:
      title = "Docs";
      break;
    default:
      title = "";
  }

  function disconnectWallet() {}
  function connectWallet() {}

  let iswalletconnected = true;
  let walletaddress = "0x32423...42c8";

  return (
    <Row
      className={classes.container}
      vertical="center"
      horizontal="space-between"
    >
      <span className={classes.title}>{title}</span>
      <Row vertical="center">
        {/* When wallet is connected */}
        {iswalletconnected && (
          <>
            <button
              className={classes.walletDisconnectButton}
              onClick={disconnectWallet}
            >
              <>
                <div className={classes.walletIconConnected}>
                  <IconWallet />
                </div>

                <span className={classes.name}>{walletaddress}</span>
                <span className={classes.name}>Disconnect</span>
              </>
            </button>

            {/* <span className="wallet-icon-connected"></span>
            <p className="walletaddress">0x32423...42c8</p>
            <p className="walletstatus">Disconnect</p> */}
          </>
        )}

        {/* When wallet is not connected */}
        {!iswalletconnected && (
          <>
            <button
              className={classes.walletConnectButton}
              onClick={connectWallet}
            >
              <>
                <IconWallet />
                <span className={classes.name}>Connect Wallet</span>
              </>
            </button>

            {/* <span className="wallet-icon-notconnected"></span>
            <p className="walletconnect">Connect Wallet</p> */}
          </>
        )}
      </Row>
    </Row>
  );
}

HeaderComponent.propTypes = {
  title: string,
};

export default HeaderComponent;
