const symbol=Symbol('hi')
console.log(symbol)
const symkey=Symbol()
const person={
    name:"ahamathbasha",
    age:20,
    [symkey]:"hi",
}
console.log(person.name)
console.log(person[symkey])