const sumEvenArgs = (...args) => {
  let total = 0;
  for (let item of args) {
    if (item % 2 == 0) {
      total += item;
    }
  }

  return total;
};

export { sumEvenArgs };
