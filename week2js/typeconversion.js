/*let n="ahamathbasha"
console.log(n)
let num=5
num=String(num)
console.log(typeof num)
let n="5"
n=Number(n)
console.log(typeof n)
console.log(5=='5')
console.log(5==='5')
//type conversion
let name="alice";
let age=20;
let greeting=` hello ${name} ou are ${age} years old`
console.log(greeting)*/
//nan
function safeDivide(a,b)
{
    if(b===0){
     console.log("it is nan")
    }
    else{
        let result=a/b;
        console.log(result)
    }
}
safeDivide(20,0)

