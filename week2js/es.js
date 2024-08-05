let a=10
a=20
console.log(a)
const b=20
console.log(20)
const add=((a,b)=>a+b)
console.log(add(2,3));
let c=20
let d=30
console.log (`the addition of two no is ${c+d}`);
function getName(name='nolan')
{
 return `hello ${name}`;
}
console.log(getName())
console.log(getName("christopher"))
//rest operator
function sum(...numbers){
    return numbers.reduce((acc,cur)=>acc+cur,0);
}

console.log(sum(1,2,3,4,5));
//spread operator
let firstn=[1,2,3,4,5]
let secondN=[...firstn,6,7,8,9,10]
console.log(secondN)