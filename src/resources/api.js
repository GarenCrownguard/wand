import axios from 'axios'
import * as reducer from 'redux/reducerCalls'

export const getStatsNotConnected = async () => {
  try {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/stats-not-connected`)
      .then((res) => {
        reducer.UPDATE_STATS({
          sptrGrowthFactor: res.data.sptrGrowthFactor,
          sptrSellFactor: res.data.sptrSellFactor,
          sptrBuyPrice: res.data.sptrBuyPrice,
          sptrSellPrice: res.data.sptrSellPrice,
          sptrBackingPrice: res.data.sptrBacking,
          sptrTreasuryBal: res.data.sptrTreasuryValue,
          btonTreasuryBal: res.data.batonTreasuryValue,
          btonRedeemingPrice: res.data.batonRedeemingPrice,
          btonBackingPrice: res.data.batonBacking
        })
        reducer.UPDATE_RISK_TREASURY_VALUE({ value: res.data.riskTreasuryValue })
      })
  } catch (error) {
    console.log('[getStatsNotConnected] fetch data failed', error)
  }
}

export const getInvestmentListData = async () => {
  try {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/investment-list-data`)
      .then((res) => {
        reducer.UPDATE_INVESTMENT_LIST({ investmentlist: res.data })
      })
  } catch (error) {
    console.log('[getInvestmentListData] fetch data failed', error)
  }
}

export const getAirdropData = async () => {
  try {
    await axios.get(`${process.env.REACT_APP_API_URL}/airdrops`).then((res) => {
      reducer.UPDATE_AIRDROPS({
        airdropsMonthly: res.data.airdropsMonthly,
        airdropsWeekly: res.data.airdropsWeekly,
      })
    })
  } catch (error) {
    console.log('[getAirdropData] fetch data failed', error)
  }
}

export const setTreasuryOutgoing = async (walletAddr, amt, time) => {
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/setTreasuryUSDOutgoing`, {
      address: walletAddr,
      amtUSD: amt,
      timeUnlocked: time,
    })
  } catch (error) {
    console.log('[setTreasuryUSDOutgoing] post data failed', error)
  }
}
