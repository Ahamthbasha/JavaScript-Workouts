//for loop
for(let i=1;i<=5;i++){
    console.log(i);
}
//for of loop in array
let arr=[1,2,3,4,5]
for(let i of arr){
    console.log(i)
}
//for in loop
const person={
    name:"ahamathbasha",
    age:20,
    address:{
        city:"chennai",
        street:"nadu street"
    },
}
for(let i in person){
    console.log(i)
}
//while
let i=1
while (i<=5) {
 console.log(i) 
 i++;  
}
//do while
let j=11
do{
    console.log(j)
    j++;
}while(j<=15)