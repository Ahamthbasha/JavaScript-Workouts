(function chai(){
    console.log("DB connected")
})();
//iife is used to avoid global scope pollution or neglecting global scope variable polltionit will be done by covering entore function with () function defition and atlast put () execution.
/* ( () => {
   console.log("DBConnected")
   })()
  
( function code(){
    console.log("Database Connected")
})()
both function will give intermediate value error 
*/
//immediately invoked function will start its execution but it does not know where to stop the context.Here it affects other functions also.so here to end the context we use semicolon; by the way another function will also get executed
(function code(){
    //named iife
    console.log("Database Connected")
})();
( () => {
    //simple iife
    console.log("fahad fazil")
})();
//passing parameters and argument
((name) =>{
 console.log(`name is ${name}`)
})('ahamath');