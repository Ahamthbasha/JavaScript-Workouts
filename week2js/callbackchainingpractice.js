function fetchno(performCalc){
    setTimeout(()=>{
        const no=5;
        console.log("feteched no",no)
        performCalc(null,no)
    },1000)
}
function doubled(no,performCalc){
    setTimeout(()=>{
        const result=no*2;
        console.log("doubled",result)
        performCalc(null,result)
    },1500)
}
function addFixed(no,performCalc){
    setTimeout(()=>{
        const result=no+5;
        console.log("add fixed",result);
        performCalc(null,result)
    },2000)
}
function subFixed(no,performCalc){
    setTimeout(()=>{
        const result=no-5;
        console.log("sub fixed",result)
        performCalc(null,result)
    },2500)
}
function performCalc(){
    fetchno((err,no)=>{
        if(err){
        console.log("error");
        return;
        }
    doubled(no,(err,doubled)=>{
        if(err){
            console.log("error found in doubled")
            return;
        }
    addFixed(doubled,(err,add)=>{
        if(err){
            console.log("error found in addfixed")
            return;
        }
    subFixed(add,(err,finalresult)=>{
        if(err){
            console.log("error found in subfixed")
            return;
        }
    console.log("final result is",finalresult);    

    })
    })
    })
    })
}
performCalc()