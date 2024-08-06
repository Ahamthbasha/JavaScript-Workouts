/*function* simplecalculator(){
    yield "hello";
    yield "world";
    yield 45;
}
const g=simplecalculator();
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)*/
function* counter(start,end){
    for(let i=start;i<=end;i++){
        yield i;
    }
}
const counterGen=counter(1,5)
for(let i of counterGen){
    console.log(i)
}