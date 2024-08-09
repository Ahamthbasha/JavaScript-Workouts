const person={
    name:"ahamathbasha",
    age:20,
    greet:function(greet){
        return `${greet} ${this.name}`
    }
}
const greetToOther=person.greet.bind(person,"hello")
console.log(greetToOther());