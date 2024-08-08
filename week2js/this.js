const person={
    name:"basha",
    age:20,  
    greet:function(){
        console.log(`hello ${this.name}`)
    }
}
person.greet()
//constructor
function printName(name){
    this.name=name;
}
const basha=new printName("basha")
console.log(basha.name)
//arrow function
const newperson={
    name:"harrish",
    age:20,
    greet:function(){
        const innergreet=()=>{
        console.log(`hi my name is ${this.name}`)
        }
        innergreet();
    }
}
newperson.greet();