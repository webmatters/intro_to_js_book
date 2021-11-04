let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);
for (let yearsToAdd = 10; yearsToAdd <= 40; yearsToAdd += 10) {
  console.log(
    `In ${yearsToAdd} years, you will be ${age + yearsToAdd} years old.`
  );
}
