/*Write a defining table and a program that asks the user to enter a month name (January, February, etc.) and
then outputs the number of days in the month. For February, output “28 or 29 days”.

Barzee, Rex A.. Programming Fundamentals in JavaScript (p. 106). Maia LLC. Kindle Edition. */
let prompt=require('prompt-sync')()
let month=prompt("the month: ")
let day=""
if(month==="February"){
day="28 or 29 days"
}
else if(month==="September"||"April"||"June"||"November"){
    day="30 days"
}
else if(month==="january"||"March"||"May"||"july"||"August"||"october"||"December"){
    day="31 days"
}
console.log(day)