function sumPrimes(num) {
  let start = 2;
  let total = 0;

  while (start <= num) {
    if (isPrime(start)) {
      total += start;
    }
    start++;
  }

  return total;
}

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

export { sumPrimes };
