class animal{
    constructor(name){
    this.name=name;
    }
    speak(){
        console.log(`${this.name} make a noise`)
    }
}
class dog extends animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
   speak(){
    super.speak()
  console.log(`${this.name} woof!`)
   }
}
const dog1=new dog("rex","german","shepherd")
dog1.speak()