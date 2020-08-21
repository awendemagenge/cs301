const prompt = require("prompt-sync")();

let n = prompt("Please enter number: ");
n=parseInt(n)
let raw=""+"\t"

let i=2
while(i<=n){
    raw="n *"+(i)
console.log(raw);i++
}

