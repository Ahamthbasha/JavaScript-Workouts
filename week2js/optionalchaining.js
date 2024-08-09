 const  user={
    name:"ahamathbasha",
    address:{
        city:"chennai",
        street:"nadu street",
        postalcode:{
            code:606601,
        }
    }
}
const city=user.address?.city;
const code=user.address?.postalcode?.code;
const street=user.address?.street;
console.log(city)
console.log(code)
console.log(street)