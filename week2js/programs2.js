const person={
    name:"nangopan",
    age:25,
    address:{
        city:"coimbatore",
        street:"nadustreet"
    }
}
const keys=Object.keys(person)
console.log(keys)
const keys2=Object.keys(person.address)
console.log(keys2)
console.log(Object.values(person))
console.log(Object.values(person.address))
console.log(person.name)