const person={
    name:"ahamathbasha",
    age:20,
    greet:function(greet){
        console.log(`${greet} ${this.name}`)
    }
}
const anotherPerson={
    name:"basha"
}
person.greet.call(anotherPerson,"hi")
//apply
const developer1={
    name:"ahamathbasha",
}
const developer2={
    name:"vishnuGR"
}
function role(r){
    console.log(`${this.name} you are a ${r}`)
}
role.apply(developer1,["mern developer"])
role.apply(developer2,["mern developer"])
//bind
const person5={
    name:"ahamathbasha",
    age:20,
    greet:function(greet){
        console.log(`${greet} ${this.name}`)
    }
}
const persongreet=person5.greet.bind(person5,"good morning")
persongreet();
//spread
let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
let combine=[...arr1,...arr2]
console.log(combine)
//rest parameter
function sum(...n){
    return n.reduce((acc,curr)=>{
        return acc+curr
    })
}
console.log(sum(1,2,3,4,5))