export function convertSlugToUrl(slug, parameters) {
  let url = slug;
  Object.entries(parameters).forEach(([key, value]) => {
    url = url.replace(`:${key}`, value);
  });
  return url;
}

export function prettifytolocalstring(amount) {
  return amount.toLocaleString();
}

export function prettifyamounts(amount) {
  return "$" + prettifytolocalstring(amount);
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
