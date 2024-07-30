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