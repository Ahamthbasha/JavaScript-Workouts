//methods in object literals
/*const person={
    Name:"abin",
    role:"developer",
    greet:function(){
        return `hi ${this.Name} you are a ${this.role}`
    }
}
console.log(person.greet())
//methods in class
class car{
    constructor(company,name){
        this.company=company;
        this.name=name;
    }
    details(){
        console.log("company name",this.company)
        console.log("car name",this.name)
    }
    getStart(){
        console.log("car is started")
    }
}
const myCar=new car("tata","suzuki")
myCar.details()
myCar.getStart()
//prototype it is a constructor function
function developer(name,role)
{
 this.Name=name;
 this.role=role;
}
developer.prototype.design=function(){
    console.log(`i am ${this.Name} i was a ${this.role}`)
}
const creator=new developer("ahamathbasha","webdeveloper")
console.log(creator)
creator.design()*/
//arrow function
const movie={
    name:"thupparivaalan",
    director:"mysskin",
    details:(()=>{
        return `movie name is ${movie.name} directed by ${movie.director}`
    })
}
console.log(movie)
console.log(movie.details())