/*async function getUser(){
try{
const response=await fetch('https://jsonplaceholder.typicode.com/users')
const data=await response.json()
console.log(data)
}
catch(error){
    console.log("error")
}
}
getUser()*/
fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(user){
    return user.json()
})
.then(function(data){
console.log(data)
})
.catch(function(){
    console.log("error")
})
