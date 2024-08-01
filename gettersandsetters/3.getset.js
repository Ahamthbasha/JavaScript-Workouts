const User ={
    _email:'abc@gmail.com',
    _password:"abc",
    get email(){
    return this._email.toUpperCase()
    },
    set email(value){
      this._email=value
    }
}
const tea=Object.create(User)
console.log(tea.email)
//getters and setters are mainly used to overwrite the values.It will get the value from the memeory and overwrite and the set function will set the value and return thhe value to the memory.