const AVAXTestnetContractAddresses = {
  USDC: '0x8f2431dcb2Ad3581cb1f75FA456931e7A15C6d43',
  SPTR: '0xD8098BE05A7d32636f806660E40451ab1df3f840',
  BATON: '0x0A0AebE2ABF81bd34d5dA7E242C0994B51fF5c1f',
  wand: '0x39920479F867C393408844DD588D3B51b960233B',
}
const BSCTestnetContractAddresses = {
  USDC: null,
  SPTR: null,
  BATON: null,
  wand: null,
}
const BSCMainnetContractAddresses = {
  USDC: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  BUSD: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  DAI: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
  FRAX: '0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40',

  SPTR: null,
  BATON: null,
  wand: null,
}

let contractAddresses = {}

if (process.env.REACT_APP_NETWORK === 'AVAX') {
  contractAddresses = AVAXTestnetContractAddresses
} else if (process.env.REACT_APP_NETWORK === 'BSC') {
  if (process.env.REACT_APP_CHAIN === 'Testnet') {
    contractAddresses = BSCTestnetContractAddresses
  } else if (process.env.REACT_APP_CHAIN === 'Mainnet') {
    contractAddresses = BSCMainnetContractAddresses
  } else {
    console.log('[addresses] Check Environment variables for REACT_APP_CHAIN')
  }
} else {
  console.log('[addresses] Check Environment variables for REACT_APP_NETWORK')
}

export default contractAddresses 
