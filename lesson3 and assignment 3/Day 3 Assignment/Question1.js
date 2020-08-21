let prompt =require('prompt-sync')()
let num1=prompt("the first number is: ")
let num2=prompt("the second number is: ")
num1=parseFloat(num1)
num2=parseFloat(num2)

let result=num2-num1

if(result<0){
console.log(result*-1)
}
else{
    console.log(result)
}
