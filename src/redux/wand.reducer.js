import * as actions from "./action.types";

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
      scepterSellPrice: 11.2,
      sellFactor: 0.3,
      batonRedeemingPrice: 5.4234,
      currentWalletScepterAmount: 100.0,
      addmore: [],
    },
  ],
  localwalletstats: [
    {
      walletAddress: null,
      tokenlist: ["sceptertoken", "BATON", "USDC"],
      sceptertoken: 2000,
      batontoken: 34000,
      usdctoken: 2000000,
      remainingSwapTime: 1660507700,
      amountOfSptrSwapped: 10000,
      SptrSellPrice: 12.46,
    },
  ],
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
    case actions.UPDATE_ADDRESS:
      return {
        stats: [...currentState.stats],
        localwalletstats: [
          {
            walletAddress: payload.address,
            ...currentState.localwalletstats[0],
          },
        ],
        investmentList: [...currentState.investmentList],
      };
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
