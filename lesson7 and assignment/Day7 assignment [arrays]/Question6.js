let list=[1,2,3,4]
function rotateleft(List){
let newlist=[]
let j=0
for(let i=0;i<List.length;i++){
    newlist[j]=list[i+1]
    j++
}
newlist.pop()
newlist.push(list[0])

return newlist
}
console.log(rotateleft(list))