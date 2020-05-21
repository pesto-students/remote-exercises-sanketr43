function sumAll([a, b]) {
  let total = 0;

  if (a < b) {
    while (a <= b) {
      total += a;
      a++;
    }
  } else {
    while (b <= a) {
      total += b;
      b++;
    }
  }

  return total;
}

export { sumAll };
