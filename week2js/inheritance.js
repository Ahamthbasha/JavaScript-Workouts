class person{
    constructor(name,role){
        this.name=name;
        this.role=role;
    }
    greet(){
        console.log(`hello ${this.name} you are the ${this.role} `)
    }
}
class newPerson extends person{
    constructor(name,age,studentId){
       super(name,age);
       this.studentId=studentId;
    }
    greet(){
        super.greet();
        console.log(`hello ${this.name} id is ${this.studentId} `)
    }
}
const basha=new newPerson("ahamathbasha","mern developer","2784")
basha.greet()
