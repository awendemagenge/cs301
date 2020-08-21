/*Exercise•Write a program that asks user to enter number between 
1 to 5 and prints out how the number is spelled.
•First, write using else if •Then, refactor it to use switch*/

let prompt=require('prompt-sync')()
let number = prompt("Please enter number ");
number=parseFloat(number)

if(number===1){
    console.log("one")
}
else if(number===2){
    console.log("two")
}
else if(number===3){
console.log("three")
}
else if(number===4){
    console.log("four")
}
else if(number===5){
    console.log("five")
}

