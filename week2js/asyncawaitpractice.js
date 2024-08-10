function getdata(dataId){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log(dataId)
        resolve()
    },1000)
})
}
async function getAllData(){
    console.log("data 1 is fetching")
    await getdata(1);
    console.log("data 2 is getting")
    await getdata(2)
    console.log("data 3 is getting")
    await getdata(3)
}
getAllData()