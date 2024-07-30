//singleton
//object.create
const twitterUser = {}

twitterUser.id="123abc"
twitterUser.name="nangopan"
console.log(twitterUser)

//object inside the object

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)
//adding obj and other object
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={obj1,obj2}
console.log(obj3)
//merging two arrays into one array another method
const obj4=Object.assign({},obj1,obj2)
console.log(obj4)
const obj5={...obj1,...obj2}
console.log(obj5)
console.log(Object.keys(twitterUser))
console.log(Object.values(twitterUser))
console.log(Object.entries(twitterUser))
console.log(twitterUser.hasOwnProperty('isLogged'))