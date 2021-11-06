let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(stringArray) {
  let charCounts = stringArray.map((string) => string.length);

  return charCounts.filter((count) => count % 2 !== 0);
}

console.log(oddLengths(arr));
