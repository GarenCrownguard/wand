import USDCabi from './USDC.json'
import BUSDabi from './BUSD.json'
import DAIabi from './DAI.json'
import SPTRabi from './SPTR.json'
import BATONabi from './BATON.json'
import wandabi from './wand.json'

import TUSDCabi from './testnet/mockUSDC.json'
import TBATONabi from './testnet/BATON.json'
import TSPTRabi from './testnet/SPTR.json'
import Twandabi from './testnet/wand.json'

var abis = {}

if (process.env.REACT_APP_DEV) {
  abis = {
    USDCabi: TUSDCabi,
    BUSDabi: TUSDCabi,
    DAIabi: TUSDCabi,
    SPTRabi: TSPTRabi,
    BATONabi: TBATONabi,
    wandabi: Twandabi,
  }
} else {
  abis = {
    USDCabi,
    BUSDabi,
    DAIabi,
    SPTRabi,
    BATONabi,
    wandabi,
  }
}

export default abis
