/*const person={
    name:"muthu",
    age:25,
    address:{
        city:"madurai",
        place:"thoonganagaram",
    },
    hobbies:["reading","watching movies"]
}
const jsonstring=JSON.stringify(person,null,2);
console.log(jsonstring)*/
const person={
    name:"muthu",
    age:25,
    address:{
        city:"madurai",
        place:"thoonganagaram",
    },
    hobbies:["reading","watching movies"]
}
const replacer=(key,value)=>{
    if(key==='age'){
        return undefined;
    }
    return value;
}
const space=4
console.log(JSON.stringify(person,replacer,space))