/*class User{
    constructor(username,email,password){
        this.username=username,
        this.email=email,
        this.password=password
    }
}*/
 /*   encrypt(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}
const regUser=new User("chai","chai@gmail.com","123")
console.log(regUser.encrypt())
console.log(regUser.changeUserName())*/
function User(username,email,password){
    
        this.username=username,
        this.email=email,
        this.password=password
}
User.prototype.encrypt=function(){
    return `${this.password}abc`
}
User.prototype.changeName=function(){
    return `${this.username.toUpperCase()}`
}
const raj=new User("chai","c@gmail.com","123")
console.log(raj.encrypt())
console.log(raj.changeName())