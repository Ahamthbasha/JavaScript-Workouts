/*const promise1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("promise 1")
        resolve("success 1");
    },2500)
})
const promise2=new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("promise 2")
        resolve("success 2")
    },1500)
})
const promise3=new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("promise 3")
        resolve("success 3")
    },1000)
})
const promise4=new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("promise 4")
        reject("failure")
    },500)
})
Promise.all([promise1,promise2,promise3,promise4])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})*/
const interval=setInterval(()=>{
    console.log("hi");
},1000)
setTimeout(()=>{
clearInterval(interval)
},2500)