function reversestr(str){
    return str.split('')
              .reverse()
              .join("")
}
let str="abin"
str=reversestr(str)
console.log(str)
//prototype
function person(name,role){
    this.name=name;
    this.role=role;
}
person.prototype.greet=function(){
    return `hello ${this.name} you are a ${this.role} we taken you as a sde3 at google`
}
const person1=new person("ahamathbasha","MERN developer")
console.log(person1.greet())
