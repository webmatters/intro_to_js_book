function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('Number must be an integer.');
    return;
  }

  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

console.log(evenOrOdd(3.4));
console.log(evenOrOdd(3));
console.log(evenOrOdd(4));
