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
      addmore: [],
    },
  ],
  localwalletstats: [
    {
      walletAddress: null,
      sceptertoken: 5678,
      batontoken: 4567,
      usdctoken: 3456,
      usdttoken: 2345,
      busdtoken: 1234,
      remainingSwapTime: 1665507700,
      amountOfSptrSwapped: 10050,
      sptrSellPriceAtSwap: 12.46
    },
  ]
}

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
        ]
      };
    case actions.GET_FE_STATS:
      // This is the new State after the action is performed.
      return {
        stats: [...currentState.stats, ...payload.allposts]
      };
    case actions.UPDATE_AIRDROP_AMOUNT:
      return {
        stats: [...currentState.stats]
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
