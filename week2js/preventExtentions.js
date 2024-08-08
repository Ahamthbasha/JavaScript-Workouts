const car={
    name:"toyota",
    brand:"tvs",
    year:2024,
}
Object.preventExtensions(car)
car.price=150000
console.log(car)
car.name="tata indica"
console.log(car)
const extensibleornot=Object.isExtensible(car)
console.log(extensibleornot)