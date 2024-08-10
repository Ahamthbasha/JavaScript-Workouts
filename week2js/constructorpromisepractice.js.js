let promise1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        const achieve=true;
        if(achieve){
            resolve("success")
        }
        else{
            reject("restart")
        }
    },1000)
})
promise1
.then((res)=>{
    console.log(res)
})
.catch((rej)=>{
    console.log(rej)
})
.finally(()=>{
    console.log("always print something")
})