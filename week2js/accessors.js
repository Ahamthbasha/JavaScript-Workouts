const person={
    firstname:"siva",
    lastname:"kathikeyan",
    get fullname(){
        return `${this.firstname} ${this.lastname}`
    },
    set fullname(name){
        const parts=name.split(" ")
        this.firstname=parts[0]||'';
        this.lastname=parts[1]||'';
    }
}
console.log(person.fullname)
person.fullname="rajni kanth"
console.log(person.fullname)
console.log(person.firstname)
console.log(person.lastname)