let prompt=require('prompt-sync')()
let age=prompt("The child's age is: ")
ages=parseInt(age)
let season=prompt("The season is: ")

let BedTime=" "

if(age<=5){
    if(season==="summer"||season==="fall"){
        BedTime="8:30pm"
    }
    else if(season==="winter"||season==="spring"){
        BedTime="8:pm"
    }
}
else if(age<=12){
    if(season==="summer"){
        BedTime="9:30"
    }
    else if(season==="winter"||season==="spring"||season==="fall"){
        BedTime="8:30pm"
    }
}
else{
     if(season==="summer"){
        BedTime="10:30"
    }
    else if(season==="winter"||season==="spring"||season==="fall"){
        BedTime="9:30pm"
    }


}
console.log(BedTime)
