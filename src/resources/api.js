import axios from 'axios'
import * as reducer from 'redux/reducerCalls'

export const getRiskTreasuryValue = async () => {
  try {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/treasury-allocation`)
      .then((res) => {
        // console.log(res.data)

        // update state
        reducer.UPDATE_RISK_TREASURY_VALUE({ value: res.data.RISK })

        // return data
        // return res.data;
      })
  } catch (error) {
    console.log('[getRiskTreasuryValue] fetch data failed', error)
  }
}
