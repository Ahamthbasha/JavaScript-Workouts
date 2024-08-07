/*const person={
    name:"ahamath",
    age:20,
    role:"mern developer",
    greet:function(greeting){
        console.log(`${greeting}! ${this.name} `)
    }
}
const greetperson=person.greet.bind(person,"hello");
greetperson()*/
function multiply(a,b){
    return a*b;
}
const multiplyby=multiply.bind(null,5)
console.log(multiplyby(2))
console.log(multiplyby(5))