const numbers=[1,2,3,4,5]
function sum(a,b,c,d,e){
    return a+b+c+d+e
}
const add=sum(...numbers);
console.log(add)
//object
const person={
    name:"abin",
    age:20,
}
const updatedperson={...person,role:"mern developer"}
console.log(updatedperson)
//function
function showMessage(...message){
    message.forEach((message)=>{
    console.log(message)
})
}
showMessage("hi", "you", "recieved" ,"a", "job", "notification")