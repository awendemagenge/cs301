
let prompt=require('prompt-sync')();
let tempInCelcius=prompt('Enter value in celsius:')
let tempInFahrenheit=9/5*parseFloat(tempInCelcius)+32;
console.log(tempInFahrenheit)