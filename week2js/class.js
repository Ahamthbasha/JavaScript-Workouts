class google{
    constructor(name,role){
        this.name=name;
        this.role=role;
    }
     greet(name,role){
        console.log(`hello ${this.name} you are the ${this.role}`)
     }
}
const developer1=new google("ahamathbasha","sde3")
developer1.greet()