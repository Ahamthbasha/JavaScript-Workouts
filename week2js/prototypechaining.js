const animal={
    type:"unknown",
    print(){
        console.log(`the ${this.type} makes sound`)
    },
};
const dog=Object.create(animal);
dog.type="lambrador";
dog.sound=function(){
    console.log("woof woof!")
}
const beagele=Object.create(dog)
beagele.type="beagele";
beagele.print();
beagele.sound();