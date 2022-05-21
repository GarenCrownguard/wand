import React from "react";
import { Column, Row } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";

import { IconWallet } from "../../assets/icons";

const useStyles = createUseStyles({
  headerwalletdiv: {
    position: "absolute",
    width: "134px",
    height: "41px",
    right: "36px",
    top: "44px",
  },
  walleticon: {
    position: "absolute",
    width: "1.4rem",
    height: "1.4rem",
    left: "6.4px",
    top: "8.4px",
    bottom: "23.5px",
  },
});

function HeaderComponent() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  let iswalletconnected = true;

  return (
    <>
      {/* <div>Extra</div> */}

      <button className={classes.headerwalletdiv}>
        <Row>
          <IconWallet />
          {iswalletconnected && (
            <>
              <p className="walletaddress">0x32423...42c8</p>
              <p className="walletstatus">Disconnect</p>
            </>
          )}
        </Row>
        <Row>
          {!iswalletconnected && (
            <>
              <span className="wallet-icon-notconnected"></span>
              <p className="walletconnect">Connect Wallet</p>
            </>
          )}
        </Row>
      </button>
    </>
  );
}

export default HeaderComponent;
