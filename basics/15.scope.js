let a=10
const b=20
var c=30

console.log(a)
console.log(b)
console.log(c)

var n=300//it is global scope
if(true)
{
    var n=30//var n is in block scope variable is in the gloabl but value will e pinted in the block scope so it is avoided in the javascript
}
console.log(n)
//by using let global scope has global value and block scope has block value
let a1=300
if(true){
    let a1=20;
    console.log(a1)
}
console.log(a1)
//global scope will be different in the window environment
//global scope will be different in the vs code node environment.

/*************see the scope in function scope *************/ 
//one is global two is inside the global one can access everything.but two will be accessible only with the curly braces
function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username)
    }
    /*console.log(website)//it is not defined because block scope we access it from outside of the scope.so error will show due to reason we comment it out*/
    two()
}
one()
//In nested function child function can access parent variable

/* if else scope */
if(true)
{
    const username="vinoj"
    if(username==="vinoj"){
        const website="youtube"
        console.log(username+website)
    }
    //console.log(website)//47.it is not defined because block scope we access it from outside of the scope.so error will show due to reason we comment it out*/
}
//console.log(username)
/* above 49th line of code won't be executed because which is block scope we can't access outside from it */
/* we have function  */
console.log(addone(1))
function addone(num){
    return num+1
}
console.log(addone(1))
/* 52-56 we call our function before the definition phase it worked and after the definition also worked */
const addTwo=function(number){
    return number+2
}
console.log(addTwo(2))
/////////////////////////////
//console.log(addToo(2))
//const addToo=function(n){
//   return n+2;
//}
/* 58-66 in this two functions are same but here we store it in variable by the way we call before the definition of a function will throw the error.After the definition phase our call is executed it is a concept called hoisting */
/*>>Arrow function<<<*/
//THIS KEYWORD is used to refer the current context.context means values in a variable.current context refers to the current value in a variable.because variable value can be change to refer the current variable value we use this keyword.
const user={
    name:"abin",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.name}, welcome!`)
        console.log(this)
    }
}
user.welcomeMessage()
user.name="shahrukhan"
user.welcomeMessage()
/* from 70 to 78 the changes will be notified here we put this in function it show what are the changes done */
const username={
    name:"abin",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.name}, welcome!`)
        
    }
}
console.log(this)
/* 83-92 output:{} in node environment
in console output:window
1.In node environment the engine was separated from the browser we are in node environment our this will point towards the empty curlybraces which means our current context is empty curly braces or object
2.In console environment it executed on browser .In that case global object is window so it show that.
*/
function chai(){
    console.log(this);
}
chai()
/* 98-101 it gives what are in the this keyword */
function chai2(){
    let name3="hitesh"
    console.log(this.usermname);
}
chai2()
/* this keyword(103-107) is performed in the object and in the function this keyword won't perform so it give the (output :undefined)*/
const hi=function(){
    let username="harry"
    console.log(this.username)
}
hi()
/* 109 to 113 this will undefined in the function */
const bye=()=>{
    let username="harry"
    console.log(this.username)
}
bye()
/* 115 to 119 this will be undefined in this function */
const hello=()=>{
    let username="harry"
    console.log(this)
}
hello()
/* this will be here empty curly braces or object */
//Arrow function add two number
const addition=(n1,n2)=>{
 return n1+n2;
}
console.log(addition(2,3))
//implicit return means curly braces are not need you can delete and also delete the return keyword
const subtract=(n1,n2)=>(n1-n2)
console.log(subtract(5,4))
//if we need to return the object
const name4=(num1,num2)=>{username:"lokeshkanagaraj"}
console.log(name4(3,4))
/* 136-137 which shows that the object is undefined because in implicit type parenthesis must be given */
const name5=()=>({username:"lokeshkanagaraj"})
console.log(name5())
