//strings outdated syntax
const name="ahamath"
const repocount=50
console.log(name + repocount + "value")//old syntax for string concatenate

//new syntax namely called string interpolation usinh backtik and ${}

console.log(`Hello my name is ${name} and myrepocount is ${repocount}`)

//string functions

const Name = new String('tanaypratap')
//index access
console.log(Name[0])
console.log(Name.length)
console.log(Name.toUpperCase())
console.log(Name.charAt(2 ))//return character
console.log(Name.indexOf('p'))//return index position

//slicing we give starting index value and end value.end value should be stop before one.
// for substring we never give -ve value other wise it avoid it
const newString = Name.substring(0,4);
console.log(newString);
//slice we give -ve value for it.
const anotherString = Name.slice(-8,4);
console.log(anotherString)
//trim avoid whitespaces
const hero="  srk  "
console.log(hero)
console.log(hero.trim());
//replace helps replace with another value
const URL="https://basha%20";
console.log(URL)
console.log(URL.replace('%20','-'))
//checks whether the given no(or)anything is found or not
console.log(URL.includes('basha'))
//split function split based on the given input
const movie="3-idiots"
console.log(movie.split('-'))

