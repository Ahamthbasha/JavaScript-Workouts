 const promise1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("promise 1");
        resolve("success 1");
    },2500)
 })
 const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise 2");
        resolve("success 2");
    },1000)
 })
const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise 3");
        resolve("success 3")
    },500)
})
Promise.any([promise1,promise2,promise3])
.then((resolve)=>{
    console.log("resolve ",resolve);
})
.catch((err)=>{
    console.log("error")
})