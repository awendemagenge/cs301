const prompt = require("prompt-sync")();

let age;
do {
  age = prompt("Please enter age: ");
  console.log("You age is: " + age);
} while (age<=18);
console.log("age is not defined")

