//constructor funcion
function name(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
}
const person=new name("ahamath","basha")
console.log(person)
//class in constructor
class personprint{
    constructor(startname,endname){
        this.startname=startname;
        this.endname=endname;
    }
    getfullname(){
        return `${startname} ${endname}`
    }
}
const newperson=new personprint("harrish","babu")
console.log(newperson)