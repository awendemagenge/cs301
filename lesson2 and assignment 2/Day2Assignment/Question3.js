let prompt=require('prompt-sync')();
let TBox=prompt('Total number of boxes: ')
TBox=parseFloat(TBox)
let boxS=prompt('num_of_box_in_eachstacks: ')
boxS=parseFloat(boxS)

let stacks=TBox/boxS

stacks=Math.ceil(stacks)

console.log(stacks)
