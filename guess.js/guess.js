let prompt=require('prompt-sync')()
function Guess(){
    let userNum=prompt("write your number")
    userNum=parseInt(userNum)
    console.log(userNum);
    let bingo=5
    
    // do{
    // if(userNum>bingo){
    //     console.log("the number is too high")
    // }
    // else if(userNum<bingo){
    // console.log("the number is too low")
    // }
    
    // }
    // while(userNum!==bingo)
    if(userNum>bingo){
        console.log("higher ")
    }else if(userNum<bingo){
        console.log("lower")
    }else{
        console.log("congra")
    }
   
    
    }
    Guess()