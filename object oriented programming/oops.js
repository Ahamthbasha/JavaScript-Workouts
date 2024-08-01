const user={
    username:"hitesh",
    count:8,
    getUser:function(){
        console.log("getUserDetail")
    }
}
console.log(user)
console.log(user.getUser()) 
//
function user1(username,id){
    this.username=username
    this.id=id
    return this
}
const profile=new user1("harrish",10)
const profile2=new user1("vignesh",20)
console.log(profile)
console.log(profile2)