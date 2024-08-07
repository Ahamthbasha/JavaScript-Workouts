//array
function sum(...n){
    return n.reduce((acc,curr)=>acc+curr,0)
}
console.log(sum(1,2,3,4,5))
//object
function displayInfo(name,age, ...hobbies){
    console.log(`name:${name}`);
    console.log(`age:${age}`);
    console.log(`Hobbies:  ${hobbies.join(',')}`)
}
displayInfo('ahamath','20','movies','travelling','reading')
//function using other parameter
function multiple(multiplier,...n){
    return n.map((n)=>n*multiplier)
}
console.log(multiple(5,1,2,3,4,5))
console.log(multiple(2,1,2,3,4,5))