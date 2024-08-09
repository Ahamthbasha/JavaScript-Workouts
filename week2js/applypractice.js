const person1={
    name:"ahamathbasha",
}
const person2={
    name:"abin",
}
function role(role){
    console.log(`${this.name} you are the ${role}`)
}
role.apply(person1,["mern developer"])
role.apply(person2,["mern developer"])
