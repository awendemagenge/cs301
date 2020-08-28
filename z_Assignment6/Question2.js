//Write a function that returns the sum of the first and last values in 
//an array. The function must have this header: function addEnds( list)
//For example, if the addEnds function were called like this: let list = [ 17, 8, 9, 5, 20 ];
//let value = addEnds( list); the addEnds function would return 37 because 17 and
// 20 are the first and last values stored in the array, and the sum of 17 and 20 is 37.

let list=[ 17, 8, 9, 5, 20 ];

function addEnds(list){

return list[0]+list[list.length-1]

}
let value = addEnds( list)
console.log(value)