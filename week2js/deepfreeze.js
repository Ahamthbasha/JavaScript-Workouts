const person={
    name:"ahamathbasha",
    age:20,
    address:{
        city:"chennai",
        street:"nadu street",
    },
    hobbies:{
        watching:"movies",
    },
}
function deepFreeze(obj){
    const propertyName=Object.getOwnPropertyNames(obj);
    propertyName.forEach(property=>{
        const value=obj[property]
        if(value && typeof value === "object" && !Object.isFrozen(value)){
            deepFreeze(value)
        }
    })
    return Object.freeze(obj)
}
deepFreeze(person)
person.address.city="TVM";
console.log(person)