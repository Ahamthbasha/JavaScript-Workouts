const movie={
    name:"munna bhai mbbs",
    director:"rajkumar hirani",
}
Object.defineProperty(movie,"rating",{
    value:10,
    writable:true,
    enumerable:false,
    configurable:true
})
const allProperty=Object.getOwnPropertyNames(movie)
console.log(allProperty)
const property=Object.getOwnPropertyDescriptor(movie,"name")
console.log("name",property)