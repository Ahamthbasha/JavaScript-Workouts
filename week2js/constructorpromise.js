const promise1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        const achieve=false;
        if(achieve){
        resolve("success")
        }
        else{
            reject("failure")
        }
    },1000)
})
promise1
.then((res)=>{
    console.log("result is",res)
})
.catch((rej)=>{
    console.log("reject",rej)
})