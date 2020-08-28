let list=[1,2,3,4]
function countEven(list,multiplier){
let newlist=[]
let j=0
for(let i=0;i<list.length;i++){
    newlist[j]=list[i]*multiplier
    j++
}

return newlist
}
console.log(countEven(list,2))