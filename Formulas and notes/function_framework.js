function doinputOutput() {
    let prompt = require('prompt-sync')()
    let number = parseFloat(prompt(":---   "))
    let result=isEven(number)
  console.log(result)
}
function isEven(value){
    if((value%2)===0){return true}
    else{return false}
}
doinputOutput()