/*const person=`{
    "name":"basha",
    "age":"25",
    "address":{
        "city":"tiruvannamalai",
        "street":"nadustreet"
    },
    "hobbies":["reading","movies"]
}`;
const parsing=JSON.parse(person)
console.log(parsing)*/
const person=`{
    "name":"basha",
    "age":25,
    "address":{
        "city":"tiruvannamalai",
        "street":"nadustreet"
    },
    "hobbies":["reading","movies"]
}`;
const reviewer=(key,value)=>{
    if(key==='age'){
        return value+1;
    }
    return value
}
const parsing=JSON.parse(person,reviewer)
console.log(parsing)