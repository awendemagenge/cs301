//Write a defining table and program that reads an integer n from the keyboard and then displays the word “sunshine” n times in a div.

const prompt = require("prompt-sync")();

let n = prompt("Please enter number: ");
n=parseInt(n)

let i=0

while (i<n) {
  console.log("sunshine");i++
 
}
