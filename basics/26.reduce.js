//REDUCE it returns with single value initial value will be put in accumulator
const myNums=[1,2,3]
const myTotal=myNums.reduce(function (acc, currval) {
    console.log(` accumulator value is ${acc} currentval is ${currval}`)
    return acc+currval
},0)//,number which is accumulator initial value
console.log(myTotal)
const myNumbers = [1, 2, 3];
const newNumber = myNumbers.reduce((acc, curr) => acc + curr, 0);
console.log(newNumber);
const shoppingCart=[
{
   itemName:"jscourse",
   price:300
},
{
    itemName:"pythoncourse",
    price:400
},
{
    itemName:"mobiledevelopmentcourse",
    price:500
}
]
const totalPrice=shoppingCart.reduce((acc,curr) => acc+curr.price, 0)
console.log(totalPrice)