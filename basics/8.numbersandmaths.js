//it is also return number but we do not mention specifically
const score=400
console.log(score)
//By the below way we mention that specifically get the number
const balance=new Number(score)
console.log(balance)
console.log(balance.toString())
console.log(balance.toString().length)
//fixed method is used to make with point values if we give one it produce point with one zero if we give two it produce point with two zero

console.log(balance.toFixed(1));
console.log(balance.toFixed(2))

//precision is used to precise the value which means it give the values in precised manner.It returns with exponential value also.

console.log(balance.toPrecision(1))
const number=234.6789;
console.log(number.toPrecision(3))

//toLocaleString() it is used to convert the given number into the indian value with , like that
const rupees=10000000;
console.log(rupees.toLocaleString('en-IN'))
/* maths */
console.log(Math)
// absolute abs() it converts -ve into +ve
console.log(Math.abs(-4))
//round means it convert into full value by neglecting point values .4 convert into that given value.>.4 value means convert into next value. 
console.log(Math.round(4.6))
console.log(Math.round(4.3))
//ceil means convert it into another value
console.log(Math.ceil(4.2))
//floor means convert it into that given number
console.log(Math.floor(4.9)) 
//minimum value
console.log(Math.min(4,3,8))
//maximum value
console.log(Math.max(4,3,8))
//random 0 to 1 it means 0.1 ,0.4,0.9
console.log(Math.random())
//By multyiplying by 10 we shift it into left but we can also get 0.1 also 
console.log(Math.floor(Math.random()*10))
//math floor convert random into 0 for sometime to avoid this case we add 1.It means minimum case will be one higher will be dont care.It will give 1 to 9
console.log(Math.floor(Math.random()*10)+1)
//some time range will be given so we set like the below case in above replace 10 with max-min+1(we set range(min and max) and (1) is to avoid zero case) and replace one with min for minimum value.
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)

