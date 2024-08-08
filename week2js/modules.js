//es6 modules
/*export function add(a,b){
    return a+b;
}
export function sub(a,b){
    return a-b;
}
import {add,sub} from './math.js';
console.log(add(2,3))
console.log(sub(5,3))*/
//common js
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
module.exports={
    mul,div
}
const math=require('./math.js')
console.log(math.mul(5,3))
console.log(math.div(1,1))