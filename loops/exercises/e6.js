// Requirements
// Write a function
// Return the factorial of a positive integer provided as an argument
// Use recursion
// The factorial of a number (n) is the product of all integers between 1 and n

function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(4));
