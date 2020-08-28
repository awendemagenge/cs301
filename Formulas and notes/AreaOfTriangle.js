function doinputOutput() {
    let prompt = require('prompt-sync')()
    let number1 = parseFloat(prompt(":---   "))
    let number2 = parseFloat(prompt(":---   "))
    let number3 = parseFloat(prompt(":---   "))


    let result = isEven(number1,number2,number3)
    console.log(result)
}
function isEven(value1, value2, value3) {
    let s = (value1 + value2 + value3) / 2
    let a = s * (s - value1) * (s - value2) * (s - value3)


    let Area = Math.sqrt(a)
    return Area

}
doinputOutput()