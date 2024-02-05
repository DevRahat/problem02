//Without function
const disha=56;
const salman=95;

if(disha > salman){
    console.log("Dish will get the Cake");
}else{
    console.log("Salman will eat");
}
//Using a function
function getMax(num1,num2){
    if(num1>num2){
        return  num1;
     }else{
        return num2;
     }
}

const max1=getMax(56,95);
const max2=getMax(88,86);

const ultraMax=getMax(max1,max2);
console.log(ultraMax);
