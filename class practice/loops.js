/* Example 3 contains a do-while loop that asks a user to enter her name and verify that her 
name is correct. If the user does not enter “yes” when the computer asks if her name is correct,
 then the computer will repeat the statements in the body of the loop and ask for the user’s name again.
 */

/*let response;
do{let prompt=require('prompt-sync')()
let name=prompt('pease enter your name:....... ')

response=prompt('is your name correct ')
     
 }
 while(response!='yes')
 console.log("well good")*/
 
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
