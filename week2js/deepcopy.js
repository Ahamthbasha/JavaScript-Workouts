const person={
    name:"ahamath",
    age:20,
    role:"mern developer",
}
const copyPerson=JSON.parse(JSON.stringify(person));
console.log(copyPerson)