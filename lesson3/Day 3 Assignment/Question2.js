let prompt=require('prompt-sync')()
let weatherType=prompt("The weather today is: ")

let result="shoe"
if(weatherType==="hot"){
    result="sandals"
}
else if(weatherType==="rain"){
    result="galoshes"
}
else if(weatherType==="snow"){
    result="boots"
}
console.log(result)
