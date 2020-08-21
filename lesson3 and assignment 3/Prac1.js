let prompt=require('prompt-sync')()
let number = prompt("Please enter number ");
number=parseFloat(number)
let spelling=""

switch(number){
    case 1:
    spelling="one"
    break
    case 2:
    spelling="two"
    break
    case 3:
    spelling="three"
    break
    case 4:
    spelling="four"
    break
    case 5:
        spelling="five"
}

console.log(spelling)