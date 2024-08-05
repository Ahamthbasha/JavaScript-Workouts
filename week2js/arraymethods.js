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
