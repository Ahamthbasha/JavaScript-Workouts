function data(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("dataid",dataId)
            resolve()
        },2000)
    })
}
async function getdata(){
    console.log("getting data 1")
    await data(1);
    console.log("getting data 2")
    await data(2);
    console.log("getting data 3")
    await data(3)
}
getdata()