import actions from './action.types'

const initialState = {
  stats: {
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
  localwalletstats: {
    isconnected: false,
    walletAddress: null,
    sceptertoken: null,
    batontoken: null,
    usdctoken: null,
    busdtoken: null,
    daitoken: null,
    fraxtoken: null,
    remainingSwapTime: 1665507700,
    amountOfSptrSwapped: 3333,
    sptrSellPriceAtSwap: 12.46,
  },
}

const postReducer = (currentState = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case actions.UPDATE_ADDRESS:
      return {
        stats: { ...currentState.stats },
        localwalletstats: {
          ...currentState.localwalletstats,
          walletAddress: payload.address,
          isconnected: true
        },
      }

    case actions.WALLET_DISCONNECT:
      return {
        stats: { ...currentState.stats },
        localwalletstats: {
          ...currentState.localwalletstats,
          walletAddress: null,
          isconnected: false,
        },
      }

    case actions.WALLET_UPDATE_STATS:
      const { sptrbal, batonbal, usdcbal, busdbal, daibal, fraxbal } = payload
      return {
        stats: { ...currentState.stats },
        localwalletstats: {
          ...currentState.localwalletstats,
          sceptertoken: sptrbal,
          batontoken: batonbal,
          usdctoken: usdcbal,
          busdtoken: busdbal,
          daitoken: daibal,
          fraxtoken: fraxbal,
        },
      }
    case actions.GET_FE_STATS:
      // This is the new State after the action is performed.
      return {
        stats: [...currentState.stats, ...payload.allposts],
      }
    case actions.UPDATE_AIRDROP_AMOUNT:
      return {
        stats: [...currentState.stats],
      }
    case actions.GET_TRANSACTION_LIST:
      return {
        ...currentState,
      }
    default:
      return currentState
  }
}

export default postReducer
