function Sum(a,b){
    return a+b
}
function Mult(a,b){
    return a*b
}
function Div(a,b){
    return a/b
}
function Min(a,b){
    return a-b
}


const prompt=require('calculate: ')()
let opertaion=parseFloat(operation)
let c1=parseFloat(prompt(c1))
let c2=parseFloat(prompt(c2))

if(operation==="+"){
    console.log(Sum(a,b))
}
else if(operation==="*"){
    console.log(Mult(a,b))
}
else if(operation==="/"){
    console.log(Div(a,b))
}
else if(operation==="+"){
    console.log(Min(a,b))
}



