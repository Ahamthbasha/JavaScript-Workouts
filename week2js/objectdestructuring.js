const person={
    name:"abin",
    age:20,
    address:{
    city:"chennai",
    street:"thuraipaakkam",
    }
};
/*const {name:fullname,age:Age}=person;
console.log(fullname);
console.log(Age);
const {name,age, address: {city,street}}=person;
console.log(person.address.city)*/
//destructuring in function parameters
function display({name,age}){
    console.log(`Name:${name}`)
    console.log(`Age:${age}`)
}
const workers={
    name:"basha",
    age:20
};
display(workers)
const colors=['red','green','yellow']
const [firstColor ,secondColor]=colors;
console.log(firstColor)
console.log(secondColor)
//object destructuring is nothing but assigning the ibject values into the variable
const developer={
    name:"ahamath",
    role:"mern developer"
}
 const{name,role}=developer;
 console.log(name)
 console.log(role)