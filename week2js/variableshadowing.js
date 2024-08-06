/*let a=10;
function print(){
    let a=20;
    console.log(a)
}
print()
console.log(a)
let x=10
function outer(){
    let x=20;
     console.log(x,"outer");
     function inner(){
        let x=30;
        console.log(x,"inner function")
     }
     inner()
}
outer()
console.log(x)
//shadow
let y=100;
if(true)
{
    let y=200;
    console.log(y)
}
console.log(y)
//function parameter shadowing
let z=1;
function printz(z)
{
    console.log(z)
}
printz(2);
console.log(z)*/
//with in the function scope what are the variables we redeclared it affects the value with in the function scope
var a=10;
function print(){
    var a=20;
    if(true){
        var a=30;
        console.log(a,"if within func");
    }
    console.log(a,"with in function")
}
print()
console.log(a,"global")