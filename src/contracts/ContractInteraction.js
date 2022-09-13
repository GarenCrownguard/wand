import * as reducer from 'redux/reducerCalls'
import { ethers } from 'ethers'
import contracts from './contracts'
import { BigNumberToActual } from 'resources/utilities'

export const chainIdMainnet = '0x38' // mainnet -> 56 == 0x38
export const chainIdTestnet = '0x61' // testnet -> 97 == 0x61

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

    const AllBalances = await Promise.all([
      SPTRbalance,
      BATONbalance,
      USDCbalance,
      BUSDbalance,
      DAIbalance,
    ])
    // console.log(AllBalances[0])
    // console.log(localwalletstats.remainingSwapTime)

    reducer.WALLET_UPDATE_STATS({
      sptrbal: BigNumberToActual(AllBalances[0], 'SPTR'),
      batonbal: BigNumberToActual(AllBalances[1], 'BATON'),
      usdcbal: BigNumberToActual(AllBalances[2], 'USDC'),
      busdbal: BigNumberToActual(AllBalances[3], 'BUSD'),
      daibal: BigNumberToActual(AllBalances[4], 'DAI'),
    })

    /* Getting FE stats */
    const wandScepterData = contracts.wandContract?.scepterData() ?? null

    const btonData = contracts.wandContract?.batonData() ?? null

    const AllStats = await Promise.all([wandScepterData, btonData])

    reducer.UPDATE_STATS({
      sptrGrowthFactor: BigNumberToActual(AllStats[0].sptrGrowthFactor, 'SPTR'),
      sptrSellFactor: BigNumberToActual(AllStats[0].sptrSellFactor, 'SPTR'),
      sptrBuyPrice: BigNumberToActual(AllStats[0].sptrBuyPrice, 'SPTR'),
      sptrSellPrice: BigNumberToActual(AllStats[0].sptrSellPrice, 'SPTR'),
      sptrBackingPrice: BigNumberToActual(AllStats[0].sptrBackingPrice, 'SPTR'),
      sptrTreasuryBal: BigNumberToActual(AllStats[0].sptrTreasuryBal, 'SPTR'),
      btonTreasuryBal: BigNumberToActual(AllStats[1].btonTreasuryBal, 'BATON'),
      btonRedeemingPrice: BigNumberToActual(
        AllStats[1].btonRedeemingPrice,
        'BATON'
      ),
      btonBackingPrice: BigNumberToActual(
        AllStats[1].btonBackingPrice,
        'BATON'
      ),
    })
  } else {
    console.log('intentionally stopping update stats')
  }
}

export const checkChainId = async () => {
  const currentConnectedChainId = await ethereum.request({
    method: 'eth_chainId',
  })

  var chainId
  if (process.env.REACT_APP_DEV) {
    // testnet -> 91 == 0x61
    chainId = chainIdTestnet
  } else {
    // mainnet -> 91 == 0x38
    chainId = chainIdMainnet
  }

  if (currentConnectedChainId !== chainId) {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId }],
      })
    } catch (err) {
      // This error code indicates that the chain has not been added to MetaMask
      if (err.code === 4902) {
        if (process.env.REACT_APP_DEV) {
          // testnet
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainName: 'Binance Smart Chain Testnet',
                chainId: chainId,
                nativeCurrency: {
                  name: 'BNB',
                  decimals: 18,
                  symbol: 'tBNB',
                },
                rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
              },
            ],
          })
        } else {
          // mainnet
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainName: 'Binance Smart Chain Mainnet',
                chainId: chainId,
                nativeCurrency: {
                  name: 'BNB',
                  decimals: 18,
                  symbol: 'BNB',
                },
                rpcUrls: ['https://bsc-dataseed1.binance.org'],
              },
            ],
          })
        }
      } else {
        console.log('error adding the network to metamask')
      }
    }
  }
}