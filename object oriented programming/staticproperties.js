class User{
    constructor(username){
        this.username=username
    }
    logme(){
       console.log(`${this.username} is logged`) 
    }
    static createId(){
        return `123`
    }
}
const hitesh=new User("choudhry")
//console.log(hitesh.createId())
//static keyword 
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const NewPerson=new Teacher("hellobhai","abcd@fmail.com")
NewPerson.logme()
console.log(NewPerson.createId())