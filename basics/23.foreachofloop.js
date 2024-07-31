const coding=["js","ruby","java","python"]
//for each of loop gets callback function.call back function does not have function name it takes parameter with in the curly braces work will done
coding.forEach(function (val) {
    console.log(val)
})
//callback function in arrow function
coding.forEach((i)=>{
     console.log(i)
})
//for each also have some parameters itself we we write it it will also be executed
coding.forEach((name,index,array)=>{
    console.log(name,index,array)
})
//An array consist of many object
const myCoding=[{
    languageName:"java",
    languageFile:"js"
},
{
    languageName:"java",
    languageFile:"jv"
},
{
    languageName:"cpp",
    languageFile:"c"
}
]
myCoding.forEach((i)=>{
    console.log(i.languageFile)
})