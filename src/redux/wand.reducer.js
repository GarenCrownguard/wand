import * as actions from "../redux/action.types";

// job of reducer is to perform 'action' on the 'currentState' and return the newState
// Reducer is pure function. This code should never change. Make all the API calls and everything outside and only pass the data here.

// We are mutating the currentState everywhere. Need to create new state everytime by using library like immutability.js
// for array use concat / push/ pop
const initialState = {
  stats: [
    {
      scepterCirculatingSupply: 10000000.2345,
      scepterBackingPrice: 34.1234,
      airdrops3Months: 500000000.4567,
      scepterTreasuryValue: 500450000.8475,
      batonTreasuryValue: 250001.2093,
      riskTreasuryValue: 250000.4857,
      growthFactor: 0.287,
      scepterBuyPrice: 12.43,
      scepterSellPrice: 11.20,
      sellFactor: 0.3,
      batonRedeemingPrice: 5.4234,
      currentWalletScepterAmount: 100.00,
      addmore: [],
    },
  ],
  localwalletstats: [{
    walletAddress: "0x9326C9c0214FFC973dA3bd13fF95c297bd0A1234",
    tokenlist: ["sceptertoken","BATON","USDC"],
    sceptertoken:{
      name: "SCEPTER",
      balance: 2000000
    },
    batontoken:{
      name: "BATON",
      balance: 3400000
    },
    usdctoken:{
      name: "USDC",
      balance: 2000000
    },
    
  }],
  investmentList: [
    {
      date: "31/05/2022",
      protocolName: "Anchor",
      protocolUrl: "https://app.anchorprotocol.com/",
      investedAmount: 1000000,
      expectedAPY: 20,
      transactionLink:
        "https://finder.terra.money/classic/tx/AC53B6A60009CE3AAFE147505C4235F5A1BC6EC5C56A7EF59D3C21839C3E25C3",
      chain: "terra",
    },
  ],
};

const postReducer = (currentState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.GET_FE_STATS:
      // This is the new State after the action is performed.
      return {
        stats: [...currentState.stats, ...payload.allposts],
        investmentList: [...currentState.investmentList],
      };
    case actions.UPDATE_AIRDROP_AMOUNT:
      return {
        stats: [...currentState.stats],
        investmentList: [...currentState.investmentList],
      };
    case actions.GET_TRANSACTION_LIST:
      return {
        ...currentState,
      };
    default:
      return currentState;
  }
};

export default postReducer;
