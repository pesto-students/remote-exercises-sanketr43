function longestWordInString(args) {
  let longestWord = args.split(" ").sort(function (a, b) {
    return b.length - a.length;
  });
  return longestWord[0];
}

export { longestWordInString };
