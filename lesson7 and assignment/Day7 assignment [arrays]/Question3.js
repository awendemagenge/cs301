let list=[1,2,3,4]
function getMiddle(list){
let Begining_middle=Math.floor((list.length/2)-1)
let Ending_middle=Begining_middle+1 

for(let i=0;i<list.length;i++){
    if(list.length%2===0){
    return (list[Begining_middle]+list[Ending_middle])/2
    }else{
        return list[Begining_middle+1]
    }

}


}
console.log(getMiddle(list))