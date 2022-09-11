var contractAddresses = {}

if (process.env.REACT_APP_DEV) {
  contractAddresses = {
    /* ======================= BSC TESTNET ========================== */
    USDC: '0x233406c3e4dc19B2F08341A1e77485b9e4B3936d', // BSC Testnet mock USDC
    BUSD: '0x233406c3e4dc19B2F08341A1e77485b9e4B3936d', // BSC Testnet mock USDC
    DAI: '0x233406c3e4dc19B2F08341A1e77485b9e4B3936d', // BSC Testnet mock USDC
    SPTR: '0x70CCc0AA6C114527bFB771C37224d8d220306039', // BSC Testnet SPTR
    BATON: '0xceBB185d0749eC90EC9f7fE7488Cd314cCfafb3d', // BSC Testnet BATON
    wand: '0xa79d3D33BA0C7e77101D35e8dA77B038B0E09395', // BSC Testnet WAND contract
  }
} else {
  contractAddresses = {
    /* ======================= BSC MAINNET ========================== */
    USDC: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', // BSC Original USDC original  - use this
    // USDC: '0xBA5Fe23f8a3a24BEd3236F05F2FcF35fd0BF0B5C', // BSC Proxy USDC
    BUSD: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', // BSC BUSD
    DAI: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', // BSC DAI
    SPTR: '0xdb369CB15F2630D4add8b9929c6ccc0FE5958590', // BSC SPTR
    BATON: '0x60811935f6DCE667F62FE3aDFc8C1CDDb3010389', // BSC BATON
    wand: '0x62Ca5Ca1F7A77711B1ab543E3Fab40bD5fEEd6E6', // BSC WAND contract
    WANDToken: '0x3ECc1858ead3Fb54FA0cd15C2185fC16C22dBb43', // not int use in the dapp
  }
}

export default contractAddresses
