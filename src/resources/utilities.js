import { ethers } from 'ethers'
const fixValue = (value) => {
  return parseFloat(parseFloat(value)?.toFixed(2))
}


const decimals = {
  USDC: 18,
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
    return '+' + fixValue(value) + '%'
  } else if (direction === 'negative') {
    return '-' + fixValue(value) + '%'
  } else {
    return '...'
  }
}

export const BigNumberToActual = (amount, tokenDecimal) => {
  return amount && decimals[tokenDecimal]
    ? fixValue(ethers.utils.formatUnits(amount, decimals[tokenDecimal]))
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

export const GenerateTransactionLink = (hash) => {
  return `https://testnet.bscscan.com/tx/${hash}`
}

export function convertSlugToUrl(slug, parameters) {
  let url = slug
  Object.entries(parameters).forEach(([key, value]) => {
    url = url.replace(`:${key}`, value)
  })
  return url
}
