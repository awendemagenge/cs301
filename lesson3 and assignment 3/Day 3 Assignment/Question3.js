const prompt=require('prompt-sync')()
let name=prompt("write students name: ")
let credit=prompt("the number of completed university credit is: ")
credit=parseFloat(credit)

let year_in_school=""
if(credit>=0&&credit<30){
    year_in_school="freshman"
}
else if(credit>=30&&credit<60){
    year_in_school="sophomore"
}
else if(credit>=60&&credit<90){
    year_in_school="junior"
}
else if(credit>=90){
    year_in_school="senior"
}
console.log( year_in_school)
