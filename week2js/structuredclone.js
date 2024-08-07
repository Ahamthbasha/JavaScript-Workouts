const original={
    name:"basha",
    age:20,
    address:{
        street:"nadu street",
        city:"chennai",
    },
    hobbies:["reading","movies"],
}
const clone=structuredClone(original);
clone.name="ahamathbasha";
clone.address.city="TVM";
clone.hobbies.push("writing")
console.log("original",original)
console.log("clone",clone)







