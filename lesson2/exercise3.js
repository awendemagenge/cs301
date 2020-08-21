const prompt=require('prompt-sync')()

let radius=prompt("please enter radius value")

let height=prompt("please enter height value")

radius=parseFloat(radius)

height=parseFloat(height)

let result=Math.PI*radius*radius*height


console.log(result)