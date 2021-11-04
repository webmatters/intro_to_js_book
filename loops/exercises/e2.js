// Requirements
// Write a function
// Return the factorial of a positive integer provided as an argument
// Use a for loop
// The factorial of a number (n) is the product of all integers between 1 and n

function factorial(n) {
  let product = 1;
  for (let i = 1; i <= n; i += 1) {
    product *= i;
  }
  return product;
}

console.log(factorial(4));
