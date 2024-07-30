 //Date

 let myDate = new Date()
 console.log(myDate)
 //convert inot understandable format
 console.log(myDate.toString())
 //only date will be printed
 console.log(myDate.toDateString())
 //date and time will be printed
 console.log(myDate.toLocaleString())
 console.log(typeof myDate)//object
 //in javascript date month will begin with zero and we can also pass the value
 let createDate = new Date(2023,0,23)
 console.log(createDate.toDateString())
 let createdateTime = new Date(2023,0,23,5,53)
 console.log(createdateTime.toLocaleString())

// Time stamp will be given in the case of quiz competetion like real situation.it will give result in millisecond
let myCreateDate=new Date("01-14-2023")
let myTimeStamp = Date.now()
console.log(myTimeStamp)
//giving get time convert the millisecond value in precise manner
console.log(myCreateDate.getTime())
//conver into seconds divide it by 1000 to avoid decimal we use floor function also
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"
})