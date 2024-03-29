import actions from './action.types'

const initialState = {
  stats: {
    scepterCirculatingSupply: 99899.9999, // not being used
    scepterBackingPrice: null,
    airdrops3Months: 99899.9999, // not being used
    airdropDaily: null, // not being used
    airdropMonthly: null,
    airdropWeekly: null, // not being used
    scepterTreasuryValue: null,
    batonTreasuryValue: null,
    riskTreasuryValue: null,
    growthFactor: null,
    scepterBuyPrice: null,
    scepterSellPrice: null,
    sellFactor: null,
    batonRedeemingPrice: null,
    btonBackingPrice: null,
    investmentlist: [
      {
        date: 'Updating...',
        chain: 'Updating...',
        expectedAPY: 'Updating...',
        investedAmount: 'Updating...',
        protocolName: 'Updating...',
        protocolURL: 'Updating...',
        transactionLink: 'https://bscscan.com/',
      },
    ],
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
      const { sptrbal, batonbal, usdcbal, busdbal, daibal} = payload
      return {
        stats: { ...currentState.stats },
        localwalletstats: {
          ...currentState.localwalletstats,
          sceptertoken: sptrbal,
          batontoken: batonbal,
          usdctoken: usdcbal,
          busdtoken: busdbal,
          daitoken: daibal,
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
        btonBackingPrice,
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
          btonBackingPrice: btonBackingPrice
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
          riskTreasuryValue: value,
        },
        localwalletstats: {
          ...currentState.localwalletstats,
        },
      }

    case actions.UPDATE_INVESTMENT_LIST:
      const { investmentlist } = payload
      return {
        stats: {
          ...currentState.stats,
          investmentlist: investmentlist,
        },
        localwalletstats: {
          ...currentState.localwalletstats,
        },
      }

    case actions.UPDATE_AIRDROPS:
      const { airdropsMonthly, airdropsWeekly } = payload
      return {
        stats: {
          ...currentState.stats,
          airdropMonthly: airdropsMonthly,
          airdropWeekly: airdropsWeekly,
        },
        localwalletstats: {
          ...currentState.localwalletstats,
        },
      }

    default:
      return currentState
  }
}

export default postReducer
