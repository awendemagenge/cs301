//Write a defining table and a program that outputs the first 25 numbers in this Fibonacci series: 0, 1, 1, 2, 3, 5, 8, … 46368

let num1=0
let num2=1
let Int=25
let i=1
while(i<=Int){
    console.log(num1+"");
    let sum=num1+num2
    num1=num2
    num2=sum;
    i++
}