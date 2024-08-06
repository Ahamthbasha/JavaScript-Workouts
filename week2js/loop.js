/*for(let i=1;i<=5;i++)
{
    console.log(i)
}
let j=6;
while(j<=10)
{
    console.log(j);
    j++;
}
let k=11;
do
{
console.log(k);
k++;
}while(k<=15);

//array contains three objects

let students=[
    {name:"harris",age:20},
    {name:"balaraman",age:25},
    {name:"abin",age:30},
]
for(let i=0;i<students.length;i++){
    let student=students[i];
    console.log("student"+([i+1]));
    for(let key in student){
        console.log(key+":"+student[key]);
    }
    console.log(" ")
}*/
//iteraing over an array for of loop
let n=[1,2,3,4,5]
for (let i of n){
    console.log(i)
}
let name="hello"
for(let n of name){
    console.log(n)
}
let map=new Map()
map.set('name','alice');
map.set('age',30);
for(const [key,val] of map)
{
    console.log(key+":"+val);
}
let set=new Set([1,2,3,4,5])
for(let j of set){
    console.log(j)
}