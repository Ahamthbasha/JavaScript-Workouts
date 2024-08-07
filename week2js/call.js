/*const person={
    firstname:"vignesh",
    lastname:"brother",
}
function sayfullname(){
    console.log(`${this.firstname} ${this.lastname}`)
}
sayfullname.call(person)*/
const worker1={
    name:"manikkam",
}
const worker2={
    name:"basha",
}
function sayHello(greet){
    console.log(`${greet} ${this.name}`)
}
sayHello.call(worker1,"hello")
sayHello.call(worker2,"hi")
