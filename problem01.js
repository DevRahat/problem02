function cubeNumber(number){
    if(typeof number =='number'){
        const cube=Math.pow(number,3);
        return cube;
        
}
return "please provide a number";
    

        
        
    
}

    
const cube=cubeNumber(3);
const cube1=cubeNumber("hello");
console.log(cube);
console.log(cube1);

// other way

function cubeNumber(number){
    if(typeof number =='number'){
        return "please provide a number";
        
}
const cube=Math.pow(number,3);
return cube;

}
const cube=cubeNumber(3);
const cube1=cubeNumber("hello");
console.log(cube);
console.log(cube1);