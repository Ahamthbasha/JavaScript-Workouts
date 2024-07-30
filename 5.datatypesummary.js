/*
 In which way our value will be stored and retrieved from the memory based on that we categorize datatype into two type 
1.primitive
7 types:string,boolean,number,null,undefined,symbol,BigInt(scientific values)
 and 
2.non-primitive (or) reference type
reference allocated in memory
types:array, objects,Functions
 
Non primitive data types will return its type like "OBJECT OR FUNCTIONS"
specially function for "FUNCTION OBJECT"
In other language we should define datatype but javascript is a dynamically typed language here we dont need to define the datatype before the variable.
*/
//symbol used
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id)
console.log(anotherId)
console.log(id===anotherId)
//both are not same because symbol is given for uniqueness

//ARRAY
const heroes=["shaktiman","naagraj","doga"];
console.log(heroes)
console.log(typeof heroes)

//OBJECT
let myobj={
    name: "rangan",
    age:22,
}
console.log(myobj)
console.log(typeof myobj)

//function
const myfunction=function(){
    console.log("hello world");
}
console.log( typeof myfunction)