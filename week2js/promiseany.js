const promise1=new Promise((resolve, reject) => {
    setTimeout(()=>{
    console.log("promise 1");
    resolve("success1")
    },1000)
})
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise 2")
    },2000)
})
const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise 3")
    },3000)
})
Promise.any([promise1,promise2,promise3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log("error",err)
})