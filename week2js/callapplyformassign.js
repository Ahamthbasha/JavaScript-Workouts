//call
/*function greet(greeting,punctuation){
    console.log(`${greeting} ${this.name}${punctuation}`)
}
const person={name:"abin"}
greet.call(person,"hello","!");

const animal={name:"lion"}
const human={name:"nango"}
function greet(sound){
    console.log(`${sound} ${this.name}`)
}
greet.call(animal,"roar")
greet.call(human,"oh")
//one program with call, apply, bind
const person={
    name:'abin',
    introduce:function(greeting,punctuation){
        console.log(`${greeting} ${this.name} ${punctuation}`)
    }
}
const anotherPerson={
    name:"babu"
}
person.introduce.call(anotherPerson,"hello","!")
person.introduce.apply(anotherPerson,["hi","."])
const dukaan=person.introduce.bind(anotherPerson,"hey")
dukaan("!!")*/
const target={a:1};
const source1={b:2};
const source2={c:3};
const returntarget=Object.assign(target,source1,source2);
console.log(target);
console.log(returntarget);



