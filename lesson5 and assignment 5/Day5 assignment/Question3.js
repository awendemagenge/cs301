function doinputOutput() {
    let prompt = require('prompt-sync')()
    let number1 = parseFloat(prompt("width:---   "))
    let number2 = parseFloat(prompt("depth:---   "))
    let number3 = parseFloat(prompt("sweep:---   "))
    let number4 = parseFloat(prompt("height:---   "))


    let result = houseVolume(number1, number2, number3, number4)
    console.log(result)
}

function houseVolume(width, depth, sweep, height) {
    let liveVolume_Result = livingVolume(width, depth, height)
    let roofVolume_Result = roofVolume(sweep, depth, width)
    let houseVolume_Result = liveVolume_Result + roofVolume_Result
    return houseVolume_Result
}


function livingVolume(width, depth, height) {
    let liviVolume = width * depth * heightf
    return liviVolume

}


function roofVolume(sweep, depth, width) {
    let treArea = triangleArea(sweep, sweep, depth)
    let roofV = treArea * width
    return roofV

}


function triangleArea(sweep, sweep, depth) {
    let s = (sweep + sweep + depth) / 2
    let a = s * (s - sweep) * (s - sweep) * (s - depth)


    let Area = Math.sqrt(a)
    return Area

}
doinputOutput()