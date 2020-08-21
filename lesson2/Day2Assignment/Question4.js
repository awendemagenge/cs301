let prompt=require('prompt-sync')();
let Sclass=prompt('Total number of students in class: ')
Sclass=parseInt(Sclass)
let Teams=prompt('Total number of teams in class: ')
Teams=parseInt(Teams)
let ExtraS=Sclass%Teams

let FullS=Teams-ExtraS

let MteamS=Math.floor(Sclass/Teams)


console.log(ExtraS+" teams with "+(MteamS+1)+" members and "+ FullS +" Teams with "+MteamS+" members")