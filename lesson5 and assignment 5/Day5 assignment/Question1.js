function checkPrime(a) {
    let y = x % 2 === 0
    let z = x > 2
    if (x === 1) { return "not prime" }
    else if (y === false && z === true
        || x === 2) { return "prime" }
    else {
        return "not prime"
    }
}
let prompt = require('prompt-sync')()
let x = parseFloat(prompt("Enter number:-"))
console.log(checkPrime(x))

/*or
/*function doinputOutput() {
    let prompt = require('prompt-sync')()
    let number = parseFloat(prompt(":---   "))
    let result=isPrime(number)
  console.log(result)
}
function isPrime(value){
    let notPrime = value % 2 === 0
    let prime = value > 2
    if(value===1){return "not prime"}
    else if (notPrime === false && prime === true
        ||value===2) { return "prime" }
    else {
        return "not prime"
}
}
doinputOutput()*/
