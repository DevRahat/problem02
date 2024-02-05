const jim=56;
const tim=69;
const kim=55;

if(jim > tim && jim > kim){
    console.log("Jim is the Boss");
}else if(tim > jim && tim > kim){
    console.log("Tim is the Boss");
}else{
    console.log('Kim is the Boss');
}

//with function
function max(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num1 && num2 > num3){
        return num2;
    }else{
        return num3;
    }
}
// console.log(max(67,88,45));

const max2=Math.max(23,45,67,34,33,46);
console.log(max2);