//synchronous
/*console.log("start")
function sync(){
    for(let i=1;i<=10;i++){
        console.log(i)
    }
}
sync()
console.log("stop")
//asynchronous
console.log("start")
setTimeout(()=>{
    console.log("set time out")
},1000)
console.log("stop")
//asynchronous promise
console.log("start")
Promise.resolve().then(()=>{
    console.log("i am promise")
})
console.log("Stop")
function fetchdata(callback){
    setTimeout(()=>{
        callback("datafetched")
    },1000);
}
fetchdata((data)=>{
    console.log(data);
})
function fetchdata(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("data fetched")
        },1000)
    })
}
fetchdata().then((data)=>{
    console.log(data)
})*/
//async await
function fetchdata(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        resolve("data fetched")
    },1000);
    });
}
async function getdata(){
    const data=await fetchdata()
    console.log(data)
}
getdata()