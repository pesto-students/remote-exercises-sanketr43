function duplicateLetters(args) {
  const letters = args.split("");
  const count = [];

  for (let i = 0; i < letters.length; i++) {
    let total = 1;
    for (let j = 0; j < letters.length; j++) {
      if (j != i) {
        if (letters[j] == letters[i]) {
          total++;
        }
      }
    }

    if (total > 1) {
      count.push(total);
    }
  }

  let num = Math.max(...count);
  if (num > 1) {
    return num;
  } else {
    return false;
  }
}

export { duplicateLetters };
