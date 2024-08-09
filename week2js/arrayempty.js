//array empty
let arr=[1];
if(arr.length===0)
{
    console.log(`the given array is empty`)
}
else{
    console.log(`the given arr contains some values`)
}
//array withour duplicates or remove duplicates
let arr2=[1,2,2,3,3,4,5,5,1]
let set=new Set(arr2)
let arr2withoutDuplicates=Array.from(set)
console.log(arr2withoutDuplicates)
//pure function
function add(a,b){
    return a+b;
}
console.log(add(3,2))
//generator function
function* multiply(base){
    let multiplier=1;
    while(true){
        yield base * multiplier;
        multiplier++;
    }
}
const multipleByFive=multiply(5);
for(let i=1;i<=10;i++)
{
    //console.log(multipleByFive.next().value)
    console.log(multipleByFive.next().value)
}