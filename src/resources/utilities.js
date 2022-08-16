import { ethers } from 'ethers'

const decimals = {
  USDC: process.env.REACT_APP_CHAIN === 'Testnet' ? 6 : 18,
  DAI: 18,
  BUSD: 18,
  SPTR: 18,
  BATON: 18,
}

export const prettifytolocalstring = (amount) => {
  return amount ? amount.toLocaleString() : null
}

export const prettifyamounts = (amount) => {
  return amount ? '$' + prettifytolocalstring(amount) : null
}

export const prettifyGrowthPercentage = (direction, value) => {
  if (direction === 'positive') {
    return '+' + value + '%'
  } else if (direction === 'negative') {
    return '-' + value + '%'
  } else {
    return null
  }
}

export const BigNumberToActual = (amount, tokenDecimal) => {
  return amount && decimals[tokenDecimal]
    ? parseFloat(
        parseFloat(
          ethers.utils.formatUnits(amount, decimals[tokenDecimal])
        )?.toFixed(2)
      )
    : null
}

export const ActualToBigNumber = (amount, tokenDecimal) => {
  // console.log(ethers.BigNumber.from(10).pow(decimals[tokenDecimal]))
  // console.log(amount);
  // console.log(amount * Math.pow(10, decimals[tokenDecimal]))

  return amount && decimals[tokenDecimal]
    ? ethers.BigNumber.from(
        amount * Math.pow(10, decimals[tokenDecimal] / 2)
      ).mul(ethers.BigNumber.from(10).pow(decimals[tokenDecimal] / 2))
    : null
}
