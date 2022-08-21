import actions from './action.types'

const initialState = {
  stats: {
    scepterCirculatingSupply: 99899.9999,
    scepterBackingPrice: null,
    airdrops3Months: 99899.9999,
    scepterTreasuryValue: null,
    batonTreasuryValue: null,
    riskTreasuryValue: null,
    growthFactor: null,
    scepterBuyPrice: null,
    scepterSellPrice: null,
    sellFactor: null,
    batonRedeemingPrice: null,
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
    remainingSwapTime: 1660600440,
    amountOfSptrSwapped: null,
    // sptrSellPriceAtSwap: 12.46,
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
          isconnected: true,
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

    case actions.UPDATE_STATS:
      const {
        sptrGrowthFactor,
        sptrSellFactor,
        sptrBuyPrice,
        sptrSellPrice,
        sptrBackingPrice,
        sptrTreasuryBal,
        btonTreasuryBal,
        btonRedeemingPrice,
      } = payload
      return {
        stats: {
          ...currentState.stats,
          growthFactor: sptrGrowthFactor,
          sellFactor: sptrSellFactor,
          scepterBuyPrice: sptrBuyPrice,
          scepterSellPrice: sptrSellPrice,
          scepterBackingPrice: sptrBackingPrice,
          scepterTreasuryValue: sptrTreasuryBal,
          batonTreasuryValue: btonTreasuryBal,
          batonRedeemingPrice: btonRedeemingPrice,
        },
        localwalletstats: {
          ...currentState.localwalletstats,
        },
      }

    case actions.UPDATE_OUTSTANDING_STATS:
      const { outstandingTimeLocked, outstandingSwappedAmounts } = payload
      return {
        stats: {
          ...currentState.stats,
        },
        localwalletstats: {
          ...currentState.localwalletstats,
          remainingSwapTime: outstandingTimeLocked,
          amountOfSptrSwapped: outstandingSwappedAmounts,
        },
      }

    case actions.UPDATE_RISK_TREASURY_VALUE:
      const { value } = payload
      return {
        stats: {
          ...currentState.stats,
          riskTreasuryValue: value
        },
        localwalletstats: {
          ...currentState.localwalletstats
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
