function first(){
    console.log("first start")
    second();
    console.log("first end")
}
function second(){
    console.log("second start")
    third();
    console.log("second end")
}
function third(){
    console.log("third start and end")
}
console.log("start")
first()
console.log("stop")