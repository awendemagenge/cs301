let prompt=require('prompt-sync')()
let status=prompt("the status is ")
let overDueBooks=prompt("overDueBooks: ")
overDueBooks=parseInt(overDueBooks)
let Loan;

if(status==="student"){
if(overDueBooks===0){
    Loan=6
}
else if(overDueBooks<3){
    Loan=4
}
else if(overDueBooks>=3){
    Loan=2
}
}

else if(status==="faculty"){
    if(overDueBooks===0){
        Loan=16
    }
    else if(overDueBooks<3){
        Loan=12
    }
    else if(overDueBooks>=3){
        Loan=8
    }

}
else if(status==="other"){
    if(overDueBooks===0){
        Loan=4
    }
    else if(overDueBooks<3){
        Loan=3
    }
    else if(overDueBooks>=3){
        Loan=2
    }

}
console.log(Loan)
