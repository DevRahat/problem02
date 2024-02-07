function findAddress(obj){
    const street=obj.street || "__";
    const house=obj.house || "--";
    const society=obj.society || "--";

    const str=street + ',' + house + ',' + society;
    return str;
}
console.log(findAddress({street:10}));