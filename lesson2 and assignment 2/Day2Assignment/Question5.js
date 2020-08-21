/*Write a defining table and a JavaScript program to compute the mileage of a vehicle.
 Your program should allow the user to enter the beginning and ending odometer readings and
  the number of gallons of gasoline used and should output the mileage in miles per gallon. Your program should correctly handle real numbers.
*/
let prompt=require('prompt-sync')()
let beg=prompt("beginning_Odometer is: ")
beg=parseFloat(beg)
let end=prompt("ending odometer is: ")
end=parseFloat(end)
let Ng=prompt("number of gallons used is: ")
Ng=parseFloat(Ng)
let Mile_per_g=(beg-end)/Ng
console.log(Mile_per_g)