//Write a defining table and a JavaScript program that asks a user for a volume in quarts and then converts that value into liters.
//Your program should correctly handle real numbers such as 7.54.

//Barzee, Rex A.. Programming Fundamentals in JavaScript (p. 57). Maia LLC. Kindle Edition. 
let prompt=require('prompt-sync')();
let VolumeInQuarts=prompt('Enter Liquid quart: ')
VolumeInQuarts=parseFloat(VolumeInQuarts)
let liters=3.7854
console.log(liters*VolumeInQuarts)