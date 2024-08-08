function Person(name,role){
    this.name=name;
    this.role=role;
    Person.prototype.greet=function(){
    return `hi ${this.name} working as a ${this.role}`
    }
}
//creating instances for the constructor function
const person1=new Person("ahamathbasha","mern developer")
//access their properties
console.log(person1.name)
console.log(person1.role)
console.log(person1.greet())