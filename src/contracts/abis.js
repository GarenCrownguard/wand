import * as AVAXTestnetabis from './abi/AVAX/Testnet'
import * as BSCTestnetabis from './abi/BSC/Testnet'
import * as BSCMainnetabis from './abi/BSC/Mainnet'

let abis = {}

if (process.env.REACT_APP_NETWORK === 'AVAX') {
  abis = AVAXTestnetabis
} else if (process.env.REACT_APP_NETWORK === 'BSC') {
  if (process.env.REACT_APP_CHAIN === 'Testnet') {
    abis = BSCTestnetabis
  } else if (process.env.REACT_APP_CHAIN === 'Mainnet') {
    abis = BSCMainnetabis
  } else {
    console.log('[abis] Check Environment variables for REACT_APP_CHAIN')
  }
} else {
  console.log('[abis] Check Environment variables for REACT_APP_NETWORK')
}


export default abis
