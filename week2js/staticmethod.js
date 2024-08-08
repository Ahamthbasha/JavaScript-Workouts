class mathsop{
    static square(n){
        return n*n;
    }
    static cube(n){
        return n*n*n;
    }
}
console.log(mathsop.square(2))
console.log(mathsop.cube(2))
//static and instance
class circle{
    static pi=3.14;
    constructor(val){
        this.val=val;
    }
    displayResult(){
        return circle.pi*this.val*this.val;
    }
}
const newcircle=new circle(5)
console.log(newcircle.displayResult())
console.log(circle.pi)