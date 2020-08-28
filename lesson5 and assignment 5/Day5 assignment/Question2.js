function Convert() {
    let prompt = require('prompt-sync')()
    let f = parseFloat(prompt("write temprature in degree farhanite:--"))
    let temp = farhToCels(f)
    console.log(temp)
}



function farhToCels(value) {
    let result = 5 / 9 * (value - 32)
    return result

}

Convert()