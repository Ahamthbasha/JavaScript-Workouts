const person={
    name:"ahamathbasha",
    greet:function(greeting){
        return `${greeting} ${this.name}`
    }
}
const anotherPerson={
    name:"muthuthasan"
}
let message=person.greet.call(anotherPerson,"hi")
console.log(message)