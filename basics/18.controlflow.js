console.log(1<=2)
console.log(1>=2)
//implicit condition
if ( 3 > 2) console.log((3>2))
//else if condition(multiple condition)  
let balance=1000
if(balance<500){
    console.log("you dont have enough money")
}
else if(balance>=1000){
    console.log("you have enough money")
}
else{
    console.log("you dont have money")
}
//logical operator will check two or multiple condition in a line
const gpay=true
const mb=false
if(gpay || mb ){
    console.log("both the options are allowed")
}
let tenth=true
let twelfth=true
if(tenth && twelfth){
    console.log("you are eligible to a degree")
}
//switch case we have key based on the key our code will executed from the options
/* 
swithch(key)
{
case value:
    break;
    default: 
    break;
} 
*/
const month=3
switch(month){
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("february")
        break;//Here i remove break. the condition will be match but it wont stop in that position it will print all the statement except default condition
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")        
        break;
default:
    console.log("value is not found")        
}
//truthy value and falsy value

//false values are 0,-0,BigInt 0n, "",null,undefined Nan
//truthy values are "0",'false'," ",[],{},function(){}
let name=0
if( name ){
    console.log("empty")
}
/* above 0 is false value so it won't be executed */
let username="0"
if( username ){
    console.log("empty")
}
//above program will be executed because it is truth value

/*checking the array*/
const useremail=[]
if(useremail.length === 0)
{
    console.log("Array is empty")
}
/* checking object*/
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty")
}
//NULLISH COALESCING OPERATOR (??):NULL UNDEFINED
let val1;
val1=5 ?? 10
console.log(val1)
//84-86 it will get the first value
let val2;
val2=null ?? 10
console.log(val2)
//This operator designed carefully if we get null assign null or if we get value will be assingned
let val3;
val3=undefined ?? 10
console.log(val3)
//This operator is designed carefully if we geet undefined assign undefined or if we get value will be assigned.
let val4;
val4=undefined ?? 10 ??20
console.log(val4)
//it takes first value 
//ternary operator
const marks=40
marks>35? console.log("pass"):console.log("fail")