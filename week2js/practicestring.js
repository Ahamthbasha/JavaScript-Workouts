let str="sivasakthi"
console.log(str.length)
console.log(str.charAt(1))
console.log(str.at(0))
console.log(str[3])
console.log(str.slice(0,8))
console.log(str.substring(1,3))
console.log(str.substr(1,3))
console.log(str.toLocaleUpperCase())
console.log(str.toLowerCase())
let str2="  christopher nolan  "
console.log(str2.trim());
console.log(str2.trimStart())
console.log(str2.trimEnd())
let str3="5"
console.log(str3.padStart(3,1))
console.log(str3.padEnd(4,1))
let str4="hello "
console.log(str4.repeat(5))
console.log(str4.replace("h","w"))
console.log(str4.replace("lo","l"))
console.log(str2.replaceAll("o","a"))
console.log(str2.split(","))
//console.log(str2.join(""))
let regex=/hello/;
let str11="hello"
let str12="hello world"
console.log(regex.test(str12))
console.log(regex.exec(str11))
