function cacheFunction(cb) {
  let cache = {};
  return function (arg) {
    if (arg in cache) {
      return cache[arg];
    } else {
      return (cache[arg] = cb(arg));
    }
  };
}

export { cacheFunction };
