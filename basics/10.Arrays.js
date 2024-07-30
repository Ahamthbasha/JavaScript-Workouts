const myArr=[0, 1 ,2 , 3 ,4 ,5]
console.log(myArr[0])
//Array methods
//last position insert the no
myArr.push(6)
console.log(myArr)
//last position deleted from the no
myArr.pop()
console.log(myArr)
//insert no in starting location
myArr.unshift(2)
console.log(myArr)
//delete no in starting location
myArr.shift()
console.log(myArr)
//includes check the no is in the array or not
console.log(myArr.includes(2))
//index value
console.log(myArr.indexOf(2))
//join method it add the all element in the array and convert the datatype into string
const newArr=myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)
//slice
console.log("A",myArr)
const n1=myArr.slice(1,3)
console.log(myArr)
console.log(n1)
//splice it remove the array's given number from the original array also
console.log("B",myArr)
const n2=myArr.splice(1,3)
console.log(myArr)
console.log(n2)
//  Concatenation merging two arrays
const marvel=["ironman","thor"]
const dc=["batman","aquaman"]
const assemble=marvel.concat(dc)
console.log(assemble)
//spread operator also like concatenation
const heroes=[...marvel,...dc]
console.log(heroes)
 //flat() will be used to print all elements in the array helps in array inside array
 const anotherArr= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
 const realArr=anotherArr.flat(Infinity)
 console.log(realArr)
 //checking is the given value is array or not
console.log(Array.isArray("hitesh"))
//convert to array
console.log(Array.from("hitesh"))
//if we give object to convert into an array it will give empty array because object consist of key value pairs it won't know what to convert so it gives empty array. 
console.log(Array.from({name:"hitesh"}))
//of() is used to convert the individual elements into array 
let score1=10
let score2=20
let score3=30

console.log(Array.of(score1, score2, score3))
