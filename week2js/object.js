const person={
    name:"ahamathbasha",
    role:"mern developer",
    age:30,
    greet:function(){
        return `hi ${this.name} you are a ${this.role}`
    }
}
console.log(person.name)
console.log(person["role"])
console.log(person.greet())
//es6 
const movie={
    name:"munna bhai mbbs",
    director:"rajkumar hirani",
    greet(){
    return `my favourite movie of all time is ${this.name} which was directed by ${this.director}`
    }
}
console.log(movie.name)
console.log(movie.director)
console.log(movie.greet())
console.log(Object.keys(movie))
console.log(Object.values(movie))