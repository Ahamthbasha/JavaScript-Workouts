function myfunction(msg){
    console.log(msg)
}
myfunction("i am harrish")
function sum(x,y)
{
    return x+y
}
const add=sum(1,2)
console.log(add)
//arrow function
const multiple=(a,b)=>{
    return a*b
}
console.log("multiple of two number",multiple(1,2))
function vowel(str){
 let count=0
 for(let val of str){
    if(val=="a"||val=="e"||val=="i"||val=="o"||val=="u")
    {
        count++
    }
 }
 console.log("string vowel count is:",count)
}
let vc=vowel("harrish")
let vc2=(str)=>{
    let count=0
    for(let val of str){
        if(val=="a"||val=="e"||val=="i"||val=="o"||val=="u"){
         count++;
        }
    }
     return vc2
}
vc2("vignesh")
//passign function as a argument inside the function
let arr=[1,2,3,4,5]
arr.forEach(function printValue(val){
    console.log(val)
   })
   //higher order function
   let arr1=[1,2,3,4,5]
   arr.forEach(function print(val){
       console.log(val*val)
   })
//map
let n=[1,2,3,4,5]
let newArray=n.map((val)=>{
    return val
})
console.log(newArray)
//filter
let arr3=[1,2,3,4,5]
let newArr=arr3.filter((val)=>{
    return val%2==0
})
console.log(newArr)
//reduce
let ar4=[2,3,10,20,100]
let newArra=ar4.reduce((prev,curr)=>{
    return prev+curr
})
console.log(newArra)
//reduce 
let ar5=[1,2,3,4,5]
let newA=ar5.reduce((prev,curr)=>{
   return prev>curr? prev:curr
})
let newC=ar5.reduce((prev,curr)=>{
    return prev<curr? prev:curr
})
console.log(newA)
console.log(newC)
//filter
let marks=[91,92,93,80,95]
let newMarks=marks.filter((val)=>{
    return val>90
})
console.log(newMarks)
//reduce
let no=[1,2,3,4,5,6,7]
let newSum=no.reduce((acc,curr)=>{
    return acc+curr
})
let newPro=no.reduce((acc,curr)=>{
    return acc*curr
})
console.log(newSum)
console.log(newPro)
