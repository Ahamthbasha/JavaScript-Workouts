function add(a){
    return function(b){
        return a+b;
    }
}
const double=add(5)
console.log(double(2))