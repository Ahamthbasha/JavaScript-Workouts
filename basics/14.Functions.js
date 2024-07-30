function myName(){
    console.log("a")
    console.log("b")
    console.log("i")
    console.log("n")
}
myName()

//add two number
function add(a , b)
//function definition (parameter)
{
    console.log(a+b)
}
add(2,3);//function call(argument)
/*
const result=add(2,3)
console.log("result",result)
**********MUST READ********
Above code gets undefined because the function does not return any value to store in a variable .*/
function mul(a,b){
    return a*b;
}
let multiplication=mul(3,4)
console.log(multiplication)
//user log in message
function logInMessage(userName){
    return `${userName} just logged in`
}
let userMessage=logInMessage("abinbabu")
console.log(userMessage)
function fillEmail(email){
    if(email === undefined){
        console.log("please enter the email")
        return
    }
    return `${email} has verified`
}
console.log(fillEmail())
//rest operator or spread operator
function calci(...num1)
{
  return num1;
}
//another one logic for rest operator
console.log(calci(200,300,500))
function calculate(val1,val2,...num1){
    return num1
}
console.log(calculate(20,30,40,50))
//passing an object to a function
const user={
    username:"vinoj",
    shoppingprice:123
}
function handleobject(anyobject){
    console.log(`hello ${anyobject.username} your shopping price bill is ${anyobject.shoppingprice}`)
}
handleobject(user)
//passing an array to the function
const myNewArray=[200,400,100,600]
function valuetwo(getArray)
{
     return getArray[1]
}
console.log(valuetwo(myNewArray))