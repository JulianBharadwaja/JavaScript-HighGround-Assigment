const item = [
    { name: "Milk Bottle", price: 30, discountPercent: 10},
    { name: "Cheese", price: 10, discountPercent: 0},
    { name: "Packaged Meat (1kg)", price: 100, discountPercent: 5},
  ]


// METHOD WAY

const calculatePrices = (itemArr) => {
    let totalPriceArray = itemArr.map(item => item.price - (item.price * (item.discountPercent/100)));
    let total = 0;
    let totalPrice = totalPriceArray.forEach(price => {
        total += price;
    });
    let result = total + " USD";
    return result;
}


// LOOPING WAY
const calculateNormalPrices = (itemArr) => {
    
    let total = 0;
    for (let i = 0; i < itemArr.length; i++) {
        total = total + itemArr[i].price - (itemArr[i].price * itemArr[i].discountPercent/100);
    }
    let result = total + " USD"
    return result;
}

console.log(calculatePrices(item));
console.log(calculateNormalPrices(item));
console.log(typeof(calculatePrices(item)))
console.log(typeof(calculateNormalPrices(item))); 
console.log("Hello");
console.log("Wold");