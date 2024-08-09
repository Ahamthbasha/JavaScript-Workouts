const person={
    name:"abin",
    age:20,
    greet:function(greet){
        return `${greet} ${this.name}`

    }
}
const anotherPerson={
    name:"ahamathbasha"
}
const message=person.greet.call(anotherPerson,"hi")
console.log(message)