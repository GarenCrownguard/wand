import axios from 'axios'
import * as reducer from 'redux/reducerCalls'

export const getRiskTreasuryValue = async () => {
  try {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/treasury-allocation`)
      .then((res) => {
        reducer.UPDATE_RISK_TREASURY_VALUE({ value: res.data.RISK })
      })
  } catch (error) {
    console.log('[getRiskTreasuryValue] fetch data failed', error)
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