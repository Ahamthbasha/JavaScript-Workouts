function counter(){
    let count=0;
    return function(){
        count++
        return count;
    }
}
let counting=counter()
console.log(counting());
console.log(counting())