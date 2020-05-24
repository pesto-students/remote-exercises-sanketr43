function addBigIntegers(intString) {
  let sortedIntString = intString.split("\n").sort(function (a, b) {
    return a.length - b.length;
  });

  let total = "";
  let carry = 0;

  for (
    let i = 1;
    i <= sortedIntString[sortedIntString.length - 1].length;
    i++
  ) {
    let sumDigit = 0;

    for (let j = 0; j < sortedIntString.length; j++) {
      let getDigit = sortedIntString[j].charAt(sortedIntString[j].length - i);
      sumDigit += parseInt(getDigit) ? parseInt(getDigit) : 0;
    }

    let sumDigitString = (sumDigit + carry).toString();
    carry = parseInt(sumDigitString.substr(0, sumDigitString.length - 1));
    carry = carry ? carry : 0;
    total = sumDigitString.charAt(sumDigitString.length - 1) + total;
  }

  return carry > 0 ? carry + total : total;
}

export { addBigIntegers };
