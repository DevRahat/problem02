function matchFinder(string1,string2){
    if(typeof string1 !=='string' || typeof string2 !== 'string'){
        return 'please input string';
    }
    const result=string1.includes(string2);
    return result;
}
console.log(matchFinder('John Dow', 'ohn'));
console.log(matchFinder('javaScript','Code'));
console.log(matchFinder(12));