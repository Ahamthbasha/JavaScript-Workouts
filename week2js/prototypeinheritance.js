function Animal(name){
    this.name=name;
}
Animal.prototype.speak=function(){
    console.log(`${this.name} makes a noise`)
}
function Dog(name){
    Animal.call(this,name)
}
Dog.prototype=Object.create(Animal.prototype)
//Dog.prototype.constructor=Dog
Dog.prototype.bark=function(){
    console.log(`woof woof`)
}
const trex=new Dog("rex")
trex.speak()
trex.bark()