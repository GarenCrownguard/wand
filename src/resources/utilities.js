export function convertSlugToUrl(slug, parameters) {
  let url = slug;
  Object.entries(parameters).forEach(([key, value]) => {
    url = url.replace(`:${key}`, value);
  });
  return url;
}

export function prettifytolocalstring(amount) {
  return amount ? amount.toLocaleString(): 'NULL';
}

export function prettifyamounts(amount) {
  return amount ? "$" + prettifytolocalstring(amount) : "NULL";
}

export function prettifyGrowthPercentage(direction, value) {
  if (direction === "positive") {
    return "+" + value + "%";
  } else if (direction === "negative") {
    return "-" + value + "%";
  } else {
    return "Nan";
  }
}
