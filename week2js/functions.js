/*function add(a,b){
    return a+b;
}
console.log(add(2,3))
//recursive func
function fact(n){
    if(n==0){
        return 1;
    }
    return n*fact(n-1)
}
console.log(fact(5))
//first class function
function op(arr,anyop){
    return arr.map(anyop)
}
const add=function(sum){
    return sum+1;
}
const multi=function(mul){
    return mul*2;
}
let a=[1,2,3,4,5]
console.log(op(a,multi))
//arrow functions
const b=((a)=>{
    console.log(a)
})
b(a)
//IIFE
(function(){
    let message="who are you";
    console.log(message) 
})();
let counter=(function(){
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
        getcount:function(){
            return count;
        }
    }
})();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getcount());
//annonymous function
setTimeout(()=>{
    console.log("hi");
},1000)
//annonynmous function
let arr=[1,2,3,4,5]
arr.forEach(function(val){
    console.log(val)
})*/
//named function
const fact=function factorial(n){
    if(n==0){
        return 1;
    }
    return n*fact(n-1);
}
console.log(fact(5))
//map
let arr=[1,2,3,4,5]
let newArr=arr.map((n)=>{
    return n*2;
})
console.log(newArr)
arr.forEach((val)=>{
    console.log(val)
})
let filter=arr.filter((val)=>{
    return val%2==0;
})
 console.log(filter)
let sum=arr.reduce((acc,curr)=>{
    return acc+curr;
})
console.log(sum)
let some=arr.some((val)=>{
    return val%2==0
})
console.log(some)
let every=arr.every((val)=>{
    return val%2==0
})
console.log(every)
let find=arr.find((val)=>{
    return val%2==0
})
console.log(find)
let findindex=arr.findIndex((val)=>{
    return val%2==1
})
console.log(findindex)