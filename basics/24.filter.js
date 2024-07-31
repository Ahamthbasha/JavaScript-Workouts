const coding=["js","ruby","java","python","cpp"]
const value=coding.forEach((item)=>{
        console.log(item)
})
console.log(value)//it shows undefined
const value1=coding.forEach((item)=>{
    console.log(item)
    return item
})
console.log(value1)//it shows undefined
const value2=coding.forEach((item)=>{
    return item
})
console.log(value2)//it shows undefined
//for each never return value 

//FILTER IT IS USED TO RETURN NEW ARRAY WHICH IS SATISFIED THE GIVEN CONDITION.it also uses the call back function.We can store it on the variable
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNum=myNums.filter((num)=>num>5)
console.log(newNum)
//18-20 we use arrow function without curly brackets here we dont need return keyword
const num=[1,2,3,4,5,6,7,8,9,10]
const newNumber=num.filter((num)=>
    { return num>5}
)
console.log(newNumber)
//22-26 we use curly brackets scope is invoked it won't return the value so we put return keyword with the condition 
/*Another Example for filter*/
const books=[
    {
        title:"war and peace",
        writer:"leo tolstoy"
    },
    {
        title:"tenet",
        writer:"christopher nolan"
    },
    {
        title:"batman begins",
        writer:"christopher nolan"
    }
]
const userBook=books.filter((bk)=>bk.writer==="christopher nolan")
console.log(userBook)
const match=books.filter((bk)=>bk.title==="war and peace")
console.log(match)
const person=books.filter((bk)=>{
    return bk.writer==="leo tolstoy"
 }
)
console.log(person)
