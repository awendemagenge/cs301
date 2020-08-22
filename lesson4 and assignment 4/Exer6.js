/*for(let i= 1; i<=5; i++){
    let row="";
    for (let j=1; j<=5; j++){
    row += j +"\t";
}
console.log(row);
}*/



function Guess(){
let userNum=prompt("write your number")
userNum=parseInt(userNum)
console.log(userNum);
let bingo=5

do{
if(userNum>bingo){
    console.log("the number is too high")
}
else if(userNum<bingo){
console.log("the number is too low")
}

}
while(userNum!==bingo)

console.log("congra")

}
Guess()