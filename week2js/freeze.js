const person={
    name:"abin",
    role:"mern developer",
    address:{
        city:"palakkaadu",
        village:"alapuzham"
    }
}
Object.freeze(person)
Object.freeze(person.address)//explicitly we freeze it
person.name="nangopan"
console.log(person)
const frozenOrNot=Object.isFrozen(person)
console.log(frozenOrNot);