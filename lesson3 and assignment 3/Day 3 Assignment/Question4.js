let prompt=require('prompt-sync')()
let cost=prompt("cost of house is: ")
cost=parseInt(cost)
let dow;
if(cost<=49999.99){
    downPayment=0.05*cost
}
else if(cost>=50000&&cost<=99999.99){
    downPayment=2000+0.1*(cost-50000)
}
else if(cost>=100000&&cost<=199999.99){
    downPayment=7500+0.2*(cost-100000)
}
else if(cost>=200000){
    downPayment=27500+0.25*(cost-200,000)
}
console.log(downPayment)