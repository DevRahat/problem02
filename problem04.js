function canPay(changeArray,totalDue){
    if(changeArray.length ==0){
        return 'Invalid Array';
    }
    let sum=0;
    for(let i=0;i<changeArray.length;i++){
        const element=changeArray[i];
        sum=sum+element;
    }
    if(sum>=totalDue){
        return true;
    }else{
        return false;
    }
}
console.log(canPay([],10));