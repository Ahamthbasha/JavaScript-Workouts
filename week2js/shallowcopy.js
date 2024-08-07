//arr
const arr=[1,2,3,4,5];
const newArr=arr.slice()
console.log(newArr)
//spread
const originalArray=[1,2,3,4,5]
const newOriginal=[...originalArray]
console.log(newOriginal)
//array.from
const newArray=Array.from(arr)
console.log(newArray)
//object by assign
const person={name:"sharik",role:"developer"}
const copyPerson=Object.assign({},person)
console.log(copyPerson)
const newPerson={name:"sharik",role:"developer"}
const person2={...newPerson}
console.log(person2)