function fetchno(performCalc){
    setTimeout(()=>{
     const no=5;
     console.log("fetched no value is:",no)
     performCalc(null,no);
    },500)
}
function double(no,performCalc){
    setTimeout(()=>{
        const result=no*2;
        console.log("doubling of the number is:",result)
        performCalc(null,result)
    },500)
}
function addFixed(no,performCalc){
    setTimeout(()=>{
        const result=no+10;
        console.log("no with fixed addition is:",result)
        performCalc(null,result)
    },500)
}
function subFixed(no,performCalc){
    setTimeout(()=>{
    const result=no-2;
    console.log("the result of sub is:",result)
    performCalc(null,result)
    },500)
}
function performCalc(){
    fetchno((err,no)=>{
     if(err){
        console.log("error in fetching the data",err)
        return;
     }
     double(no,(err,doubled)=>{
        if(err){
        console.log("error in double",err)
        return;
        }
    addFixed(doubled,(err,added)=>{
      if(err){
        console.log("error in added",err)
        return;
      }
    subFixed(added,(err,finalresult)=>{
        if(err){
            console.log("error in subed",err)
            return;
        }
        console.log("finalresult is",finalresult)
    })
    })    
    })
    })
}
performCalc()