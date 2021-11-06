let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(strings) {
  return strings.reduce((prev, current) => {
    if (current.length % 2 !== 0) {
      prev.push(current.length);
    }
    return prev;
  }, []);
}

console.log(oddLengths(arr));
