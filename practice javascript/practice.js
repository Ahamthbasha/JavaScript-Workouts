/*let n=5
if(n%2==0){
    console.log("it is even no")
}
else{
    console.log("it is odd")
}
//sum 
let sum=0
let end=7
for(i=0;i<=end;i++)
{
    sum=sum+i
}
console.log(sum)
//for-of-loop
let str="chai aur code"
for(let val of str){
    console.log(val)
}
let str1="apna college"
let size=0
//for-of-loop
for(let val of str1){
    size++
}
console.log(size)
//for-in-loop
let userDetail={
    name:"nangopan",
    id:"12333",
    job:"developer"
}
for(let val in userDetail){
    console.log("key=",val, "and value=", userDetail[val])
}*/
let name="abin"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
let college="    apnacollege"
console.log(college.trim())
console.log(name.concat(college))
console.log(name.slice(1,2))
console.log(name.replace("u","i"))
console.log(name.charAt(1))
let heroes=["ironman","superman","spiderman"]
for(let val of heroes){
    console.log(val)
}
for(let val of heroes){
    console.log(val.toUpperCase())
}
let marks=[90,95,100,150]
let sum=0
let n=marks.length
for(let i of marks){
 sum=sum+i
}
console.log("average of number=",sum/n)
//
let offer=[100,90,70,80,95]
for(i=0;i<offer.length;i++){
   let reduce=offer[i]/10;
    offer[i]=offer[i]-reduce;
    console.log(offer[i])
}
let marvel=["ironman","superman"]
console.log(marvel)
marvel.push("hey man")
console.log(marvel)
marvel.pop()
console.log(marvel.toString())
marvel.unshift("spiderman")
console.log(marvel)
marvel.shift()
console.log(marvel)
marvel.splice(1,1,"spiderman")
console.log(marvel)
//
let companies=["bloomberg","microsoft","uber","google","ibm","netflix"]
console.log(companies)
companies.shift()
console.log(companies)
companies.splice(2,1,"ola")
console.log(companies)
companies.push("amazon")
console.log(companies)