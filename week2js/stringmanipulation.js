let name="abin"
console.log(name.length)
console.log(name.at(2))
console.log(name.charAt(2))
console.log(name.charCodeAt(2))//return the unicode of the variable
console.log(name[2])
console.log(name.slice(1,2))
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.substring(1,3))
console.log(name.substr(1,2))
let movie="  Christopher Nolan  "
console.log(movie.trim())
console.log(movie.trimStart())
console.log(movie.trimEnd())
//pad in string means adding characters to the string in the starting or ending
let n='5';
console.log(n.padStart(5,'1'))
console.log(n.padEnd(5,'1'))
//repeat create copy
let fullname="Dukaan"
let repeat=fullname.repeat(3);
console.log(repeat);
//replace
let world="hello world"
let newWorld=world.replace("world","javascript")
console.log(newWorld)
let words=" dukaan dukaan founder subhash"
let newDukaan=words.replaceAll("dukaan","DUKAAN")
console.log(newDukaan)
let firstName="christopher"
let secondName="nolan"
console.log(firstName+secondName)
//split means separate
let text="hello target to get dukaan|job"
let newText=text.split("")
console.log(newText)
//join method is used to combine and make as a single string from an array
let no=[1,2,3,4,5];
let newNo=no.join("")
console.log(newNo)
console.log(typeof newNo)
//test return true or false
let regEx=/a/g;
let text2="abc"
console.log(regEx.test(text2))
let regEx2=/a/g;
let text3="a world"
console.log(regEx2.exec(text3))