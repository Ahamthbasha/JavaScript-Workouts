//for
for (let index = 0; index < 10; index++) {
    const element = index;
    if(index===5){
        console.log("5 is the best number")
    }
    console.log(element)  
}
// nested for loop
for(let i=0;i<=10;i++){
    console.log(`outer loop ${i}`)
    for(let j=0;j<=10;j++){
    console.log(`inner loop ${j}`)
    }
}
//printing table by nested loop
for(let a=1;a<=10;a++){
    console.log(`table ${a}`)
    for(let b=1;b<=10;b++){
        console.log(a+'*'+b+'='+a*b)
    }
}
//printing array
const dc=["batman","superman","aquaman"]
for (let index = 0; index < dc.length; index++) {
    const element=dc[index];
    console.log(element)
}
//break and continue
for (let index = 1; index <=10; index++) {
if(index==5){
    console.log("5 is the searching number we found")
    break
}
    console.log(`value of index is ${index}`)
}
//continue
for (let index = 1; index <=10; index++) {
    if(index==5){
        continue
    }
        console.log(`value of index is ${index}`)
    }