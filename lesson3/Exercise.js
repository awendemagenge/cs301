let prompt=require('prompt-sync')()
let age=prompt("what is your age:")
age=parseInt(age)
console.log(age)

if(age<=0){
    console.log("please enter valid age")
}
else if(age<=14){
   console.log("you can't drive yet")
}
else if(age<=18){
    console.log("you can drive under supervision")
}
else{
    console.log("you can drive")
}
