function division(numerator,denominator,handleerror)
{
 setTimeout(()=>{
    if(denominator===0){
        return handleerror (new Error("we can't go with this denominator"))
    }
    const div=numerator/denominator;
    handleerror(null,div)
 },1000)   
}
function handleerror(err,result){
    if(err){
        console.log("error",err)
    }
    {
        console.log("result",result)
    }
}
division(3,0,handleerror)