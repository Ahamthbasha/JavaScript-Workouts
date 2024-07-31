//for in loop is used in object iteration purpose
const myobj={
    js:'javascript',
    cpp:'c++',
    swift:'swift by app'
}
for(const i in myobj){
    console.log(i)
}
//7-9 it return keys of the object
for(const i in myobj){
    console.log(myobj[i])
}
//11-13 it returns values of the object
for(const i in myobj){
    console.log(`${i} value is ${myobj[i]}`)
}
//15-17 it shows that above code print with key value pairs
const programming=["cpp","c","java"]
for (const i in programming){
    console.log(`${programming[i]}`)
}
//19-23 it print the values
for (const i in programming){
    console.log(`${i}`)
}
//24-26 it print the key

//map
const map=new Map()
map.set('fr',"france")
map.set('usa',"united states of america")
for(const i in map){
    console.log(i)
}
//for in loop wont be executable in map