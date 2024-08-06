//array does not contain any append method we can use push,concat,spread operator
let n=[1,2,3,4,5]
console.log(n.at(0));
console.log(n[2]);
console.log(n.length);
console.log(n.toString())//see
console.log(n.join(','))
console.log(n.push(6))
console.log(n)
console.log(n.pop())
console.log(n)
console.log(n.unshift(7))
console.log(n)
console.log(n.shift())
console.log(n)
//console.log(delete n[0])//see
console.log(n)
let n1=[6,7,8,9,10]
console.log(n.concat(n1))
console.log(n.slice(1,3))
console.log(n.splice(1,2,6,7))
console.log(n)
//flat method
let n2=[1,[2,3,[4,5,[6,7,[8,9]]]]]
console.log(n2.flat(1));
console.log(n2.flat(2));
console.log(n2.flat[3]);
console.log("now going to infinite flat")
console.log(n2.flat(Infinity))
let fruits=["apple","oranges","kiwi","apple"]
console.log(fruits.indexOf('apple'))
console.log(fruits.lastIndexOf('apple'))
console.log(fruits.includes('kiwi'))
//find (it returns the first value)
let number=[1,2,3,4,5]
let find=number.find(num=>num>3)
console.log(find) 
let index=number.findIndex(num=>num>4)
console.log(index)
let numbers=[4,2,5,1,3]
numbers.sort((a,b)=>a-b)
console.log(numbers)
numbers.sort((a,b)=>b-a)
console.log(numbers)
let numbers2=[10,8,7,9,6];
let cp=numbers2.toSorted((a,b)=>a-b)
console.log(cp)
let cp2=numbers2.toSorted((a,b)=>b-a)
console.log(cp2)
let num=[5,4,3,2,1]
console.log(num.reverse())
let num3=[10,9,8,7,6]
let num2=num3.toReversed();
console.log(num2)
//forEach
let num4=[1,2,3,4,5]
let total=0;
num4.forEach(num=>{
    total+=num;
})
console.log(total)
//some
let num5=[1,2,3,4,5]
let s=num5.some(num=>num%2==0)
console.log(s)
let e=num5.every(num=>num>5)
console.log(e)
//reduceright
let arr=[1,2,3,4,5]
let newArr=arr.reduceRight((acc,curr)=>acc+curr)
console.log(newArr)
let arr2=[2,4,6,8,10]
let fourArr=arr2.map((num)=>{
    return num*2;
})
console.log(fourArr)
let fil=arr2.filter((num)=>{
    return num>7;
})
console.log(fil)