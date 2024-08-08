const person={}
Object.defineProperty(person,"name",{
    value:"harrish",
    writable:true,
    enumerable:true,
    configurable:true
})
console.log(person.name)
person.name="ahamathbasha"
console.log(person.name)
Object.defineProperty(person,"age",{
    value:21,
    writable:false,
    enumerable:true,
    configurable:true,
})
console.log(person.age)
person.age=40;
console.log(person.age)
delete person.age;
console.log(person);