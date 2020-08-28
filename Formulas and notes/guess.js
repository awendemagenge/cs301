let prompt=require('prompt-sync')()
let alias,response;
do{alias=prompt("what is your name")
response=prompt("are you sure"+alias+"is your name" );}
while(response!="yes")

console.log("hello +alias")