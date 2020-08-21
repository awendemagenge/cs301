//Write a defining table and a program that asks the user for an integer n and then outputs all the integers between 1 and n, inclusive.

let prompt=require('prompt-sync')()
let Int=prompt(":- ")
Int=parseInt(Int)
let i=1
while(i<=Int){
    console.log(i);i++
}