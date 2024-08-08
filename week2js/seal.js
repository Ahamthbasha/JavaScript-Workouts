const car={
    name:"lambhorgini",
    price:"20000000",
    model:2024,
}
Object.seal(car)
car.price="3"
car.owner="terminal"
const sealOrNOt=Object.isSealed(car)
console.log(sealOrNOt)
console.log(car)