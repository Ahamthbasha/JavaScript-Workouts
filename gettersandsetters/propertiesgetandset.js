function User(email,password){
    this._email=email
    this._password=password
   // defineproperty is the property of get and set

Object.defineProperty(this,'email',{
    get:function(){
       return this._email.toUpperCase()
    },
    set:function(value){
         this._email=value
    }
})
Object.defineProperty(this,'password',{
    get:function(){
        return this._password.toUpperCase()
    },
    set:function(value){
         this._password=value
    }
})
}
const chai=new User("aha@gmail.com","abc")
console.log(chai.email)