//Assignments•Reading Chapter 6, 7•Write a program to get an integer input from user and outputs if the entered number is even or odd.
//Programming Assignments form chapter 6 (questions 1 to 5)•Programming Assignments from chapter 7 (question 7)
let prompt=require('prompt-sync')()
let user_input=prompt("integer number is:")
user_input=parseInt(user_input)
if(user_input%2===0){
    console.log("even")
}
else{
console.log("odd")
}
