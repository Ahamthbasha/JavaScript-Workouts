function fetchdata(dataId,getNextData){
    setTimeout(()=>{
        console.log("dataId ",dataId)
        if(getNextData){
            getNextData();
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