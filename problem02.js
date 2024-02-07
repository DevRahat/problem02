function sortMaker(arr){
   const [a,b]=arr;
   if(a<0 || b<0){
    return "Invalid Input";
   }
   if(a==b){
    return "equal";
   }
   if(a>b){
    return [a,b];
   }
   else{
    return [b,a];
   }
}

console.log(sortMaker([2,4]));