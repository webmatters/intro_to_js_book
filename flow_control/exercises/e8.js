// Function Requirements
// Log to the console whether a number is:
//  between 0 and 50 inclusive
//  51 and 100 inclusive
//  greater than 100
//  less than 0

function logNumberRange(number) {
  switch (true) {
    case number >= 0 && number < 51:
      console.log(`${number} is between 0 and 50`);
      break;
    case number > 50 && number < 101:
      console.log(`${number} is between 51 and 100`);
      break;
    case number > 100:
      console.log(`${number} is greater than 100`);
      break;
    case number < 0:
      console.log(`${number} is less than 0`);
      break;
    default:
      console.log('Not a valid number.');
      break;
  }
}

console.log(logNumberRange(25));
console.log(logNumberRange(75));
console.log(logNumberRange(125));
console.log(logNumberRange(-25));
