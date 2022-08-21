import { ethers } from 'ethers'

const decimals = {
  USDC: process.env.REACT_APP_CHAIN === 'Testnet' ? 6 : 18,
  DAI: 18,
  BUSD: 18,
  SPTR: 18,
  BATON: 18,
  one: 1,
}

export const prettifytolocalstring = (amount) => {
  return amount != null ? amount.toLocaleString() : '...'
}

export const prettifyamounts = (amount) => {
  return amount != null ? '$' + prettifytolocalstring(amount) : '...'
}

export const prettifyGrowthPercentage = (direction, value) => {
  if (direction === 'positive') {
    return '+' + value + '%'
  } else if (direction === 'negative') {
    return '-' + value + '%'
  } else {
    return '...'
  }
}

export const BigNumberToActual = (amount, tokenDecimal) => {
  return amount && decimals[tokenDecimal]
    ? parseFloat(
        parseFloat(
          ethers.utils.formatUnits(amount, decimals[tokenDecimal])
        )?.toFixed(3)
      )
    : null
}

export const ActualToBigNumber = (amount, tokenDecimal) => {
  // console.log(ethers.BigNumber.from(10).pow(decimals[tokenDecimal]))
  // console.log(amount);

  // console.log(ethers.BigNumber.from(10).pow(decimals[tokenDecimal] / 2))
  return amount && decimals[tokenDecimal]
    ? ethers.BigNumber.from(
        `${amount * Math.pow(10, decimals[tokenDecimal] / 2)}`
      ).mul(ethers.BigNumber.from(10).pow(decimals[tokenDecimal] / 2))
    : null
}
