const person1={
    name:"abin"
}
const person2={
    name:"satish"
}
function work(role){
    console.log(`${this.name} is ${role}`)
}
work.apply(person1,["mern developer"]);
work.apply(person2,["mern developer"]);