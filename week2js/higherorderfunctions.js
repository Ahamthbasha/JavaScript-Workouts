/*let n=[1,2,3,4,5]
n.forEach((num)=>{
    console.log(num*2)
})
let N=n.map((number)=>{
    return number*5
})
console.log(N)
let c=n.filter((n)=>{
      return n%2==0
})
console.log()
let odd=n.some((num)=>{
    return num%2!=0;
})
console.log(odd)
let even=n.every((num)=>{
    return num%2==0;
})
console.log(even)
let add=n.reduce((acc,curr)=>{
    return acc+curr;
})
console.log(add)
let noFound=n.find((n))
//higher order functions
console.log("start")
setTimeout(()=>{
    console.log("hi")
},2000)
console.log("stop")
//higher order function in set interval
console.log("start")
let count=0;
const intervalvalid=setInterval(()=>{
    count++;
    console.log(`${count} time`)
    if(count>=5){
        clearInterval(intervalvalid)
        console.log("interval cleared")
    }
},1000)
//promise.all
const promise1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("result 1")
    },3000)
})
const promise2=new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve("result 2")
     },2000)
})
const promise3=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("result 3")
    },1000)
})
Promise.all([promise1,promise2,promise3])
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log("error",error)
})*/
const promise1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("result 1")
    },2000)
})
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("result 2")
    },1000)
})
const promise3=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("result 3")
    },3000)
})
Promise.race([promise1,promise2,promise3])
.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log("error",error)
})










