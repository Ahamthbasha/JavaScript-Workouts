const promise1=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("promise1")
    resolve("success1")
   },1000) 
})
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise2")
    reject("success2")
},2000)
})
const promise3=new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("promise3")
        resolve("success3")
    },2000)
})
Promise.allSettled([promise1,promise2,promise3])
.then((res)=>{
    res.forEach((result,index)=>{
        if(result.status==="fulfilled")
        {
            console.log(`yoour promise ${index+1} is executed successfully ${result.value}`)
        }
        else{
            console.log(`your promise ${index+1} is rejected ${result.reason}`)
        }
    })
})
