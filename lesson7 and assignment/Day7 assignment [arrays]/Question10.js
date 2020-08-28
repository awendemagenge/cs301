let prompt=require('prompt-sync')();
let user=prompt('please choose between one up to 12: ')
let arr=[1,2,3,4,5,6,7,8,9,10,11,12]
let arr1=[
"a partridge in pear tree",
"two turtle doves",
"three french hens",
"four calling birds",
"five golden rings",
"six geese a laying",
"seven swans a swimming",
"eight maids a milking",
"nine ladies dancing",
"ten lords a leaping",
"eleven pipers piping",
"twelve drummers drumming"]

function lyrics(arr,arr1){
    for(let i=0;i<arr.length;i++){
     if(user==arr[i]){console.log(â € œOn the first day of Christmas, my true love gave to me:

 arr1[i])}
    }
}
lyrics(arr,arr1)