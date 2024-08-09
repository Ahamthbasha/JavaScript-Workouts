function* simplecalculator(){
    yield "hello";
    yield "world";
    yield 45;
}
let g=simplecalculator()
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
function* print(start,end)
{
    for(let i=start;i<=end;i++){
        yield i;
    }
}
const counter=print(1,5)
for(let i of counter){
    console.log(i)
}