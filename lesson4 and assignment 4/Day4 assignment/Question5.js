/*Write a defining table and a program to output the five times table from 1 to 12 in this format: 
5 x 1 = 5
5 x 2 = 10 
5 x 12 = 60*/
let num=5

for(let i= 1; i<=12; i++){
   let row ="5 "+"*" 
    let result="="+num*i
    let count=i

console.log(row,count,result);
}