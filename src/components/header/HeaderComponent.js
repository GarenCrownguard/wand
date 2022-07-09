import React, { useState, useContext } from "react";
import { string } from "prop-types";
import { Column, Row } from "simple-flexbox";
import { createUseStyles } from "react-jss";
import { SidebarContext } from "hooks/useSidebar";
import links from "resources/links";

import { IconWallet } from "assets/icons";
import { connect } from "react-redux";

const useStyles = createUseStyles((theme) => ({
  container: {
    height: 95,
  },
  title: {
    fontFamily: '"Azo Sans", Fallback, Sofia',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 26,
    letterSpacing: "0.02em",
    marginTop: 30,
    marginBottom: 30,
    "@media (max-width: 450px)": {
      marginLeft: 50,
      fontSize: 20,
    },
    display: 'none'
  },
  iconStyles: {
    cursor: "pointer",
    marginLeft: 25,
    "@media (max-width: 450px)": {
      marginLeft: 12,
    },
  },

  walletConnectButton: {
    alignItems: "center",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    padding: 0,
    outline: "none",

    width: 131,
    height: 27,
  },
  connectwalletspan: {
    textAlign: "right",
    color: "white",
    fontSize: 14,
    "@media (max-width: 768px)": {
      // display: "none",
      fontSize: 10,
    },
    paddingLeft: 12,
  },
  walletDisconnectButton: {
    alignItems: "top",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    padding: 0,
    outline: "none",

    paddingTop: 5,
    height: 41,
  },
  walletaddressspan: {
    fontSize: 14,
    "@media (max-width: 768px)": {
      fontSize: 10,
    },
    textAlign: "right",
    color: "white",
    marginLeft: "auto",
    paddingLeft: 14,
  },
  walletdisconnectstatusspan: {
    fontSize: 14,
    "@media (max-width: 768px)": {
      fontSize: 10,
    },

    color: "#EB5252",
    textAlign: "right",
  },
  spansdiv: {
    display: "flex",
    flexDirection: "column",
  },
}));

function HeaderComponent(props) {
  const { currentItem } = useContext(SidebarContext);
  
  const classes = useStyles();

  const { localwalletstats } = props;
  // const { stats, investmentList, localwalletstats } = props;

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

  const [walletaddr, setwalletaddr] = useState("");
  const [iswalletconnected, setiswalletconnected] = useState(false);

  if (walletaddr.length === 0) {
    setwalletaddr(localwalletstats.walletAddress);
  }

  function disconnectWallet() {
    console.log("Disconnecting!");
    setiswalletconnected(!iswalletconnected);
  }
  function connectWallet() {
    console.log("Disconnecting!");
    setiswalletconnected(!iswalletconnected);
    console.log(walletaddr);
  }
  let localwalletaddr = walletaddr.slice(0, 7) + '...' + walletaddr.slice(walletaddr.length-4,walletaddr.length);

  return (
    <Row
      className={classes.container}
      vertical="center"
      horizontal="space-between"
    >
      <Column>
        <span className={classes.title}>{title}</span>
      </Column>
      <Column vertical="center">
        {/* When wallet is connected */}
        {iswalletconnected && (
          <>
            <button
              className={classes.walletDisconnectButton}
              onClick={disconnectWallet}
            >
              <>
                <IconWallet />
                <div className={classes.spansdiv}>
                  <span className={classes.walletaddressspan}>
                    {localwalletaddr}
                  </span>
                  <span className={classes.walletdisconnectstatusspan}>
                    Disconnect
                  </span>
                </div>
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
                <span className={classes.connectwalletspan}>
                  Connect Wallet
                </span>
              </>
            </button>

            {/* <span className="wallet-icon-notconnected"></span>
            <p className="walletconnect">Connect Wallet</p> */}
          </>
        )}
      </Column>
    </Row>
  );
}

HeaderComponent.propTypes = {
  title: string,
};

const mapStateToProps = (state) => {
  return {
    stats: state.stats[0],
    investmentList: state.investmentList[0],
    localwalletstats: state.localwalletstats[0]
  };
};

export default connect(mapStateToProps)(HeaderComponent);
