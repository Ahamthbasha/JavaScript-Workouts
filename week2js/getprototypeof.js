class car{
    constructor(make,model){
        this.make=make;
        this.model=model
    }
    startEngine(){
        return `the ${this.make} ${this.model} engine has started`
    }
}
const myCar=new car("toyot","COROLLA")
const methodPrototype=Object.getPrototypeOf(myCar.startEngine)
console.log(methodPrototype)