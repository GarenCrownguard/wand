import * as reducer from 'redux/reducerCalls'
import contracts from './contracts'
import { BigNumberToActual } from 'resources/utilities'

const { ethereum } = window

export const getDataFromContract = async () => {
  const accounts = await ethereum.request({
    method: 'eth_requestAccounts',
  })

  if (accounts.length !== 0) {
    const account = accounts[0]
    // console.log('Found an authorized account: ', account)

    reducer.UPDATE_ADDRESS({ walletAddress: account })

    /* Getting localwallet stats */
    const SPTRbalance = contracts.SPTRContract?.balanceOf(account) ?? null
    const BATONbalance = contracts.BATONContract?.balanceOf(account) ?? null
    const USDCbalance = contracts.USDCContract?.balanceOf(account) ?? null
    const BUSDbalance = contracts.BUSDContract?.balanceOf(account) ?? null
    const DAIbalance = contracts.DAIContract?.balanceOf(account) ?? null
    const FRAXbalance = contracts.FRAXContract?.balanceOf(account) ?? null

    const AllBalances = await Promise.all([
      SPTRbalance,
      BATONbalance,
      USDCbalance,
      BUSDbalance,
      DAIbalance,
      FRAXbalance,
    ])
    // console.log(AllBalances[0])
    // console.log(localwalletstats.remainingSwapTime)

    reducer.WALLET_UPDATE_STATS({
      sptrbal: BigNumberToActual(AllBalances[0], 'SPTR'),
      batonbal: BigNumberToActual(AllBalances[1], 'BATON'),
      usdcbal: BigNumberToActual(AllBalances[2], 'USDC'),
      busdbal: BigNumberToActual(AllBalances[3], 'BUSD'),
      daibal: BigNumberToActual(AllBalances[4], 'DAI'),
      fraxbal: BigNumberToActual(AllBalances[5], 'FRAX'),
    })

    /* Getting FE stats */
    const wandScepterData = contracts.wandContract?.scepterData() ?? null

    const btonData = contracts.wandContract?.batonData() ?? null

    const AllStats = await Promise.all([wandScepterData, btonData])

    if (!process.env.REACT_APP_ISWL) {
      reducer.UPDATE_STATS({
        sptrGrowthFactor: BigNumberToActual(
          AllStats[0].sptrGrowthFactor,
          'SPTR'
        ),
        sptrSellFactor: BigNumberToActual(AllStats[0].sptrSellFactor, 'SPTR'),
        sptrBuyPrice: BigNumberToActual(AllStats[0].sptrBuyPrice, 'SPTR'),
        sptrSellPrice: BigNumberToActual(AllStats[0].sptrSellPrice, 'SPTR'),
        sptrBackingPrice: BigNumberToActual(
          AllStats[0].sptrBackingPrice,
          'SPTR'
        ),
        sptrTreasuryBal: BigNumberToActual(AllStats[0].sptrTreasuryBal, 'SPTR'),
        btonTreasuryBal: BigNumberToActual(
          AllStats[1].btonTreasuryBal,
          'BATON'
        ),
        btonRedeemingPrice: BigNumberToActual(
          AllStats[1].btonRedeemingPrice,
          'BATON'
        ),
        btonBackingPrice: BigNumberToActual(
          AllStats[1].btonBackingPrice,
          'BATON'
        ),
      })
    }
  }else{
    console.log('intentionally stopping update stats');
  }
}
