function fetchdata(dataId,getdata){
    setTimeout(()=>{
    console.log(dataId)
    if(getdata){
        getdata()
    }
    },2000)
}
fetchdata(1,()=>{
    fetchdata(2,()=>{
        fetchdata(3,()=>{
            fetchdata(4);
        })
    })
})