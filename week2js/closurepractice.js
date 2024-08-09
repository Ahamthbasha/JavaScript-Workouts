function count(n){
    let a=0;
    return function(){
        a++;
        return a
    }
}
const c=count()
console.log(c())
console.log(c())