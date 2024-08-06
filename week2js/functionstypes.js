/*function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
const sum=add(2,3)
const subt=sub(3,2)
console.log(sum)
console.log(subt)
function filterEven(arr)
{
    return arr.filter(num=>num%2==0)
}
let arr=[1,2,3,4,5]
let newArr=filterEven(arr)
console.log(newArr)
function reverse(str){
    return str.split('').reverse().join('')
}
let name="mammooty";
let newName=reverse(name)
console.log(newName)
//recursion function
function fact(n)
{
    if(n===0)
    {
        return 1;
    }
    return n*fact(n-1)
}
console.log(fact(5))
//fibonacci
function fibo(n){
    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    return fibo(n-1)+fibo(n-2);
}
console.log(fibo(6))
//first class function
function operation(arr,anyOp)
{
    return arr.map(anyOp)
}
const add=function(sum){
    return sum+1
}
const mul=function(mul){
    return mul*2
}
let arr=[1,2,3,4,5]
console.log(operation(arr,add))
//arrow function
const addition=(a,b)=>{
    return a+b;
}
const sumOfN=addition(2,3)
console.log(sumOfN)
//iife
(function(){
    let message="who are you";
    console.log(message) 
})();
//iife count
const counter=(function(){
    let count=0;
    return{
        increment:function(){
            count++;
            return count;
        },
        decrement:function(){
             count--;
             return count;
        },
        getCount:function(){
            return count;
        }
    };
})();
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.getCount())
console.log(counter.decrement())
//annonymous function
setTimeout(function(){
    console.log("hi")
},2000)
//annonymous function
const numbers=[1,2,3,4,5]
numbers.forEach(function(val){
    console.log(val*2);
})
//annonymous function
(function(){
    let message="hi my name is christopher nolan"
    console.log(message)
})();
//annonymous function in object
const myPerson={
    greet:function(name){
        console.log(`hi ${name}`)
    }
}
myPerson.greet('vignesh')
//named function expression
const factorial=function calcFact(n){
    if(n===0){
        return 1;
    }
     return n * calcFact(n-1)
}
console.log(factorial(5))
const sumArr=function sum(arr){
    return arr.reduce(function accumulator(acc,cur){
        return acc+cur
    })
}
console.log(sumArr([1,2,3,4,5]))*/
//functional programming
const add=(a, b)=>a+b;
const calculate=(operation, x, y)=>operation(x, y);
console.log(calculate(add,2,3));
//immutability
const arr=[1,2,3,4,5]
const newArr=arr.map((n)=>{
    return n*2;
})
console.log(newArr)
//higher order function taken as argument
let n=[1,2,3,4,5];
let double=(x)=>x*2;
let newN=n.map(double)
console.log(newN)
//higher order function return from another function
const multi=(a)=>{
   return n=>n*a
}
const double2=multi(2)
console.log(double2(5))
