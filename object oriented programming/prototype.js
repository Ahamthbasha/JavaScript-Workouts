let myName="hitesh     "
console.log(myName.length)
console.log(myName.truelength)
//above are properties we need  functions


let myHeroes=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderman:function(){
        console.log(`spider man power is ${this.spiderman}`)
    }
}
Object.prototype.hitesh=function(){
    console.log("hitesh present in all object")
}//object has access to all
Array.prototype.heyhitesh=function(){
    console.log("hitesh is present")
}
//array have the access array but not passed in object
heroPower.hitesh()
myHeroes.hitesh()
myHeroes.heyhitesh()
//heroPower.heyhitesh() array does not pass to the object
//inheritance
const User={
    name:"chai",
    email:"chai@gmail.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TA={
    makeAssignment:'ja assignment',
    fullTime:true
}
//old syntax
Teacher.__proto__=User
//modernsyntax propert
Object.setPrototypeOf(TeachingSupport,Teacher)
//
let anotherUsername="chaiAurCode     "
String.prototype.truelength=function(){
    console.log(`${this}`)
   // console.log(`${this.name}`)
    console.log(`true length is:${this.trim().length}`)
}
anotherUsername.truelength()