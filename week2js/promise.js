/*function data(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            //const success=true;
            const success=false;
            if(success){
                resolve("data retrieved")
            }
            else{
                reject("data is not retrieved")
            }
        },500)
    })
}
data()
.then((res)=>{
    console.log(res)
})
.catch((res)=>{
    console.log(res)
})
.finally(()=>{
     console.log("operation completed")
})
const promise=Promise.resolve("hello javascript")
promise.then((res)=>{
   console.log(res)
})
const existingpromise=new Promise((resolve) => {
    setTimeout(()=>{
        resolve("problem solved")
    },2000)
})
const createPromise=Promise.resolve(existingpromise);
createPromise.then((res)=>{
    console.log(res)
})*/
//promise.reject
const rejectPromise=Promise.reject("error:operatation failed")
rejectPromise
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
})
const promise=new Promise((reject) => {
    reject("it is an error")
})
const promise2=Promise.reject(promise);
promise2
.then((res)=>{
    console.log(res)
})
.catch((res)=>{
    console.error()
})