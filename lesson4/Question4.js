
let prompt=require('prompt-sync')()
let Int=prompt(':- ')
Int=parseInt(Int)
let sum=0
for(let i=0;i<=Int;i++){
if((i%2)!==0){
    sum=i+sum
}}
console.log(sum)


