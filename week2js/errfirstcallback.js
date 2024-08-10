function division(numerator,denominator,handleError){
    setTimeout(()=>{
        if(denominator===0){
            return handleError(new Error(" zero wont allowed in denominator")) 
        }
        else{  
         const result=numerator/denominator
         handleError(null,result)
        }  
    },1000)
}
function handleError(err,result){
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
    }
}
    (division(1,1,handleError))