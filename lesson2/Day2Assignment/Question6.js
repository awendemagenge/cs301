/*When you exercise to strengthen your heart, you should maintain your heart rate within a range.
 To find that range, subtract your age from 220.
  This difference is your maximum heart rate per minute.
   Your heart simply will not beat faster than this maximum (220 − age).
    When exercising to strengthen your heart, you should keep your heart rate between 65% and 85% of your heart’s maximum.
     Write a defining table and a JavaScript program that asks for a person’s age and
      computes and outputs the slowest and fastest rates necessary to strengthen his heart.

*/
let prompt=require('prompt-sync')()
let age=prompt("your age is: ")
age=parseInt(age)
let heartBt=220-age
let maxheartRate=heartBt
let heartrate1="the slowest rate is: "+(65/100)*maxheartRate
let heartrate2="the fastest rate is: "+(85/100)*maxheartRate
console.log(heartrate1)
console.log(heartrate2)
