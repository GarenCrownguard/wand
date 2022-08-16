import { ethers } from 'ethers'

const decimals = {
  mockUSDC: 6,
  USDC: 18,
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

export const BigNumberFormat = (amount, tokenDecimal) => {
  return amount && decimals[tokenDecimal]
    ? ethers.utils.formatUnits(amount, decimals[tokenDecimal])
    : null
}
