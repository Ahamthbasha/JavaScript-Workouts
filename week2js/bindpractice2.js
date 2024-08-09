const person={
    name:"ahamathbasha",
    greet:function(greet){
    console.log(`${greet} ${this.name}`)
    }
}
const message=person.greet.bind(person,"hello")
message();