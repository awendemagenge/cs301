//Write a defining table and a program that reads a phrase and an integer n from the keyboard and then displays that phrase n times in a div.
const prompt=require('prompt-sync')()
let phrase=prompt(":- ")
let Int=prompt("insert num here: ")
let i=0
while(i<Int){
    console.log(phrase);i++
}

