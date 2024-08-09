let arr=[1,2,3,4,5]
console.log(arr.at(3))
console.log(arr[3])
console.log(arr.length)
console.log(arr.toString())
console.log(arr.join("-"))
console.log(arr.push(6))
console.log(arr)
console.log(arr.pop())
console.log(arr)
console.log(arr.unshift(7))
console.log(arr)
console.log(arr.shift())
console.log(arr)
console.log(delete arr[4])
console.log(arr)
let arr2=[1,2,3,4,5]
arr2.copyWithin(3,0,2)
console.log(arr2)
let arr1=[1,2,3,4,5]
let arr3=[6,7,8,9,10]
console.log(arr1+arr3)
let arr4=[1,[2,[3,[4,5]]]]
console.log(arr4.flat(3))
console.log(arr1.slice(0,4))
console.log(arr1.splice(2,0,1))
console.log(arr1)
console.log(arr1.indexOf(1))
console.log(arr1.lastIndexOf(1))
let arr5=[1,2,3,4,5]
let arr6=[1,2,3,6,5]
console.log(arr5.includes(arr6))
const arr7=[6,7,8,9,10]
const find=arr7.find((num)=>num>5)
console.log(find)
const findIndex=arr7.findIndex((num)=>num>9)
console.log(findIndex)
const arr8=[2,4,6,8]
const findlast=arr8.findLast((num)=>num%2==0)
console.log(findlast)
let arr10=[2,1,5,4,3]
console.log(arr10.sort())
console.log(arr10)
let arr11=[10,8,6,9,7]
let arrname=["apple","banana","mango"]
console.log(arrname.reverse())
let arrname2=["pk","3 idiots","munnabhai"]
console.log(arrname2.reverse())
let array=[1,2,3,4,5]
array.forEach((n)=>{
    console.log(n)
})
let newarr=array.map((n)=>{
    return n
})
console.log(newarr)
let evenarr=array.filter((n)=>{
    return n%2==0
})
console.log(evenarr)
let sum=array.reduce((acc,curr)=>{
    return acc+curr;
})
console.log(sum)
let arr19=[1,2,3,4,5]
const some=arr19.some((n)=>n>4)
console.log(some)
const every=arr19.every((n)=>n>4)
console.log(every)
const right=arr19.reduceRight((acc,curr)=>{
    return acc+" "+curr;
})
console.log(right)