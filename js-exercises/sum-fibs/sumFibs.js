function sumFibs(num) {
  let a = 1;
  let b = 1;
  let total = a + b;
  let c = a + b;

  while (c <= num) {
    if (c % 2 == 1) {
      total += c;
    }

    a = b;
    b = c;
    c = a + b;
  }

  return total;
}

export { sumFibs };
