import "./wallet.scss";
// import metamask_icon_wallet from "./images/metamask_icon_wallet.svg";
import wallet_icon from "./images/generic-wallet.svg";
import { useState } from "react/cjs/react.production.min";
// import drop from "./images/drop.svg";

const Wallet = () => {
  let iswalletconnected = false;



  const abc = () => {
    console.log('aa');
    iswalletconnected = !iswalletconnected;
  };

  return (
    <button onClick={() => abc()} className="walletdiv">
      {iswalletconnected && (
        <>
          <img className="wallet-icon-connected" src={wallet_icon} alt="" />
          <p className="walletaddress">0x32423...42c8</p>
          <p className="walletstatus">Disconnect</p>
        </>
      )}
      {!iswalletconnected && (
        <>
          <img className="wallet-icon-disconnected" src={wallet_icon} alt="" />
          <p className="walletconnect">Connect Wallet</p>
        </>
      )}
    </button>
  );
};

export default Wallet;
