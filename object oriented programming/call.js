function setUsername(username){
    this.username=username
    console.log("called")
}
function createUser(username,email,password){
    setUsername.call(this,username)
    this.email=email,
    this.password=password
}
const newUser=new createUser("chai","chai@gmail.com",123)
console.log(newUser)
//1.here username is not printed because where this points towards the global execution context it does not call
//2.we put .call on 2nd function to use it.By the way our function get called but it wont print because after calling the execution context will be removed from the call stack and won't be printed
//3.so we need to hold the reference.After the call must include this it will take all the parameter from the above function and execute