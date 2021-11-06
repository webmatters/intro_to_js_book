function isMinusZero(num) {
  return 1 / num === -Infinity;
}

console.log(isMinusZero(-0));
