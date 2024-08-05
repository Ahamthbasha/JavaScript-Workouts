//unique object property
const sym1=Symbol();
const sym2=Symbol();
const obj={
    [sym1]:'value1',
    [sym2]:'value2',
};
console.log(obj[sym1]);
const myArray=[1,2,3];
const iterator=myArray[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);