export const convertSlugToUrl = (slug, parameters) => {
  let url = slug
  Object.entries(parameters).forEach(([key, value]) => {
    url = url.replace(`:${key}`, value)
  })
  return url
}

export const prettifytolocalstring = (amount) => {
  return amount ? amount.toLocaleString() : 'NULL'
}

export const prettifyamounts = (amount) => {
  return amount ? '$' + prettifytolocalstring(amount) : 'NULL'
}

export const prettifyGrowthPercentage = (direction, value) => {
  if (direction === 'positive') {
    return '+' + value + '%'
  } else if (direction === 'negative') {
    return '-' + value + '%'
  } else {
    return 'Nan'
  }
}
