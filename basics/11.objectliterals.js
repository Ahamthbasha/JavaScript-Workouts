//object created by litersls
//put symbol key in [keyname]
const mysym=Symbol("key1")
const user={
    name:"ironman",
    "full name":"Tony stark",
    [mysym]:"mykey1"
}
// console.log(user["full name"])
// console.log(user["name"])
// console.log(typeof mysym)
// user.name="ahamathbasha";
// console.log(user["name"])
//freeze is used to make object won't be changeable
//Object.freeze(user)
//user.name="ironman";
//console.log(user["name"])
//
/*adding function to the object
1.user.greeting=function(){
     console.log("hi");
}
console.log(user.greeting)
output:undefined when object freeze*/
/*
2.user.greeting=function(){
    console.log("hi");
}
console.log(user.greeting())
output:not a function*/
user.greeting=function(){
    console.log("hi");
}
console.log(user.greeting())
//function annonymous which means function reference has returned but function is not executed
//function reference with the name of the object
user.greeting2=function(){
    console.log(`hi,${this.name}`)
}
console.log(user.greeting())
console.log(user.greeting2())