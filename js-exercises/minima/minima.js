function minima(item, array) {
  const sortedArray = array.sort((a, b) => a - b);
  return sortedArray.slice(0, item);
}

export { minima };
