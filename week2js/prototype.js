const person={
    name:"ahamath",
    greet:function(){
        console.log(`hi ${this.name}`)
    }
}
const newPerson=Object.create(person)
newPerson.name="basha"
newPerson.greet()