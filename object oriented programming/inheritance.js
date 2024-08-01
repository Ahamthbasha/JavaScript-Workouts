class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}
const chai=new Teacher("harry","harry@gmail.com",1234)
chai.addCourse()
const masalaChai=new User("hitesh")
masalaChai.logme()
console.log(chai===masalaChai)
console.log(chai===Teacher)
console.log(chai instanceof Teacher)
console.log(chai instanceof User)


