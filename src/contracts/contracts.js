import { ethers } from 'ethers'
import abis from './abi/abis'
import contractAddresses from './addresses'

const { ethereum } = window

var contracts = {}

if (ethereum) {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()

  var SPTRContract = null
  var BATONContract = null
  var wandContract = null
  var USDCContract = null
  var BUSDContract = null
  var DAIContract = null
  var FRAXContract = null

  if (contractAddresses.SPTR && abis.SPTRabi) {
    SPTRContract = new ethers.Contract(
      contractAddresses.SPTR,
      abis.SPTRabi,
      signer
    )
  }
  if (contractAddresses.BATON && abis.BATONabi) {
    BATONContract = new ethers.Contract(
      contractAddresses.BATON,
      abis.BATONabi,
      signer
    )
  }
  if (contractAddresses.wand && abis.wandabi) {
    wandContract = new ethers.Contract(
      contractAddresses.wand,
      abis.wandabi,
      signer
    )
  }
  if (contractAddresses.USDC && abis.USDCabi) {
    USDCContract = new ethers.Contract(
      contractAddresses.USDC,
      abis.USDCabi,
      signer
    )
  }
  if (contractAddresses.BUSD && abis.BUSDabi) {
    BUSDContract = new ethers.Contract(
      contractAddresses.BUSD,
      abis.BUSDabi,
      signer
    )
  }
  if (contractAddresses.DAI && abis.DAIabi) {
    DAIContract = new ethers.Contract(
      contractAddresses.DAI,
      abis.DAIabi,
      signer
    )
  }
  if (contractAddresses.FRAX && abis.FRAXabi) {
    FRAXContract = new ethers.Contract(
      contractAddresses.FRAX,
      abis.FRAXabi,
      signer
    )
  }

  contracts = {
    SPTRContract,
    BATONContract,
    wandContract,
    USDCContract,
    BUSDContract,
    DAIContract,
    FRAXContract,
  }

  // console.log(contracts);
} else {
  console.log('No wallet found. Cannot create contracts.')
}

export default contracts
