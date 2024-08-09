const regex=/hello/i;
const str="HELLO"
console.log(regex.test(str));
const regex1=/hello/g;
const str1="hello world"
console.log(regex1.test(str1))
const regex2=/^hello/m;
const str2=`hello world
hello universe`
console.log(regex2.test(str2))
const regex3=/hello.world/s
const str3=`hello
world`
console.log(regex3.test(str3))
const regex4=/abc/;
const str4="abc";
console.log(regex4.test(str4))
const regex5=/0-9/;
const str5="25"
console.log(regex5.test(str5))
const regex6=/x|y/;
const str6="piano"
const str7="guitar"
console.log(regex.test(str6))
console.log(regex.test(str7))
const regex7=/\d/;
const str8="233"
const str9="1323"
console.log(regex7.test(str8))
console.log(regex7.test(str9))
const regex8=/\s/;
const str10="hello world"
console.log(regex8.test(str10))
const regex9=/\bcat\b/;
const str11="cat is walking"
const str12="catalog"
console.log(regex9.test(str11))
console.log(regex9.test(str12))