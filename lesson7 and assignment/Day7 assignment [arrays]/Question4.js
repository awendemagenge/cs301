let list=[1,2,3,4]
function countEven(list){
let newlist=[]
let j=0
for(let i=0;i<list.length;i++){
    if(list[i]%2===0){
    newlist[j]=list[i]
    j++}
}

return newlist.length
}
console.log(countEven(list,2))