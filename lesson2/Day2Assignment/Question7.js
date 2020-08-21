/*Write a defining table and a JavaScript program to compute and output an employee’s after tax pay.
Your program will read from the keyboard the number of regular hours that an employee worked and that employee’s wage, 
and then compute that employee’s after tax pay. Tax is 15% of the employee’s gross pay. Your program should correctly handle real numbers.*/

let prompt=require('prompt-sync')()
let RegHrwork=prompt("regular hour an employee worked is: ")
RegHrwork=parseInt(RegHrwork)
let EmpWag=prompt("an employee wage is: ")
EmpWag=parseFloat(EmpWag)

let grossPay=RegHrwork*EmpWag

let tax=(15/100)*grossPay

let netPay=grossPay-tax

console.log(netPay)


