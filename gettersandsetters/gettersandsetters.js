class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    //getter and setter will overwrite the constructor
    //getting the value
    get  email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return this._password.toUpperCase()
    }
    //setting the value
    set password(value){
        this._password=value.toUpperCase()
    }
}
const n=new User("aham@gmail.com","abc")
console.log(n.email)
console.log(n.password)
//if we put get and set method it will show maximum call stack exceeded which means constructor also set value get and set also set value