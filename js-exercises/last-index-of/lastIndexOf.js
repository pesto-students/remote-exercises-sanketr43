function lastIndexOf(item, array) {
  let lastIndex = -1;

  if (!array.includes(item)) {
    return lastIndex;
  }

  array.forEach(function (element, index) {
    if (item == element) {
      lastIndex = index;
    }
  });

  return lastIndex;
}

export { lastIndexOf };
