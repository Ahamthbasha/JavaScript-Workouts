let words="hello world hello javascript"
console.log(words.indexOf("hello"))
console.log(words.lastIndexOf("hello"))
let words2="hello javascript"
console.log(words2.search("javascript"))
console.log(words2.match("javascript"))
let word2="hello i am a damn good techie"
console.log(word2.includes("good"))
console.log(word2.startsWith("hello"))
console.log(word2.endsWith("techie"))
let n1=12341
let n2=toString(n1);
console.log(typeof n2)
let n3=String(n1)
console.log(typeof n3)
let n4=n1.toExponential();
console.log(n4)
//fixed means with point we calculate and round the values to that vale
let n=12334.5678787876
let newN=n.toFixed(2)
console.log(newN)
//precision takes full length
let num1=12334.5678787876
let newN1=num1.toPrecision(5)
console.log(newN1)
//valueOf will return the value it is object related
let str="hello nanba"
console.log(str.valueOf())