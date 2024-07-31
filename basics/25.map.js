const n=[1,2,3,4,5]
const newN=n.map((num)=>num+10)
console.log(newN)
const newNum=n.map((num)=>{return num+10})
console.log(newNum)
//chaining
const myNum=n
  .map((number)=>number*10)
  .map((number)=>number+1)
  .filter((number)=>number>11)
console.log(myNum)