const mobiles=[
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'blace'},
    {name: 'Xoami', price: 18000, camera: '12mp', color: 'blace'},
    {name: 'Oppo', price: 30000, camera: '12mp', color: 'blace'},
    {name: 'Iphone', price: 100000, camera: '12mp', color: 'blace'},
    {name: 'Walton', price: 20000, camera: '12mp', color: 'blace'},
    {name: 'HTC', price: 20000, camera: '12mp', color: 'blace'},
]

function getCheapest(phones){
    let min=phones[0];
    for(const phone of mobiles){
        if(phone.price <min.price){
            min=phone;
        }
    }return min;
}

const cheap=getCheapest(mobiles);
console.log(cheap);