function isTriangle(a, b, c) {
  let x = a + b;
  let y = b + c;
  let z = a + c;
  if (x > c && y > a && z > b) {
    return true;
  } else {
    return false;
  }
}

export { isTriangle };
