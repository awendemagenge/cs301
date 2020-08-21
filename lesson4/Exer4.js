const prompt = require("prompt-sync")();

let age = prompt("Please enter your age: ");

while (age<=18) {
  console.log("Your age is " + age);
  age = prompt("Please enter your age: ");
}
console.log("age not defined");