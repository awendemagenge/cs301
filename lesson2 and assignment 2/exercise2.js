let prompt=require('prompt-sync')();
let tempInFahrenheit=prompt('Enter value in Fahrenheit:')
let tempInCelcius=5/9*(parseFloat(tempInFahrenheit)-32);
console.log(tempInCelcius)
