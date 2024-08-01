const PromiseOne = new Promise(function(resolve,reject){
 setTimeout(function(){
    console.log("async task complete")
    resolve()
 },1000)
})
PromiseOne.then(function(){
    console.log("received the async task")
})

new Promise(function(resolve,reject){
 setTimeout(function(){
    console.log("async 2 task")
    resolve()
 },3000)
}).then(function(){
    console.log("async 2 is called")
})
//give values to the then by using resolve with the resolve we put our data it will be printed by the then
const Promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("three async task")
        resolve({username:"harrish",email:"harrih@gmail.com"})
    },4000)
}).then(function(user){
    console.log(user)
})
//below code promise chain
const PromiseFour=new Promise(function (resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"hitesh",password:12})
        }
        else{
            reject('something went wrong')
        }
    },5000)
})
.then(function(user){
    return user.username
})
.then(function (username){
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("the promise is either resolved or rejected")
})
//async await it also like then and catch.It means it wait for the execution if it is wrong give output as wrong.it does not handle error directly we use try catch
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"hitesh"})
        }
        else{
            reject('wrong')
        }
    },6000)
})
async function consumePromiseFive(){
    try{
     const response=await promiseFive
     console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
consumePromiseFive()