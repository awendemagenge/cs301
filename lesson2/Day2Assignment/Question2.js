let prompt=require('prompt-sync')();
let Km=prompt('Enter Distance In Kilometers: ')
Km=parseFloat(Km)
let miles=Km/1.609344

console.log(miles)