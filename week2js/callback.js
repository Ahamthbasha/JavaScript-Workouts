/*function usergreet(name,wish)
{
    console.log(`hello ${name}`)
    wish()
}
function wish(){
    console.log("good morning");
}
usergreet("abin-babu",wish)*/
//asynchronous callback
function data(fetchdata){
    setTimeout(()=>{
        console.log("data are in the process of fetching")
        fetchdata()
    },2000)
}
function fetchdata(){
    console.log("data fetching process is over");
}
data(fetchdata)