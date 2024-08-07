const promise1=new Promise((resolve,reject)=>{
setTimeout(()=>{
console.log("promise1");
resolve("success1")
},2000)
})
const promise2=new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("promise2")
        resolve("success2")
    },1500)
})
const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise3")
        resolve("success3")
    },1000)
})
Promise.race([promise1,promise2,promise3])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log("error",err)
})