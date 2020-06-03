function curry(fn) {
  const curried = (n, fn) => (...args) =>
    args.length >= n
      ? fn(...args)
      : curried(n - args.length, (...innerArgs) => fn(...args, ...innerArgs));

  return curried(fn.length, fn);
}

export { curry };
