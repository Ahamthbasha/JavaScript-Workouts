// for of loop used in the array to access individual element in the array
const arr=[1,2,3,4,5]
for(const i of arr){
    console.log(`the value of arr is ${i}`)
}


const greetings ="Hello world"
for(const j of greetings){
    console.log(`${j}`)
}

//map it holds key value pairs it should be unique
const map=new Map()
map.set('IN',"India")
map.set('IN',"India")
map.set('IN',"India")
console.log(map)//it return unique value or return only one time
const map2=new Map()
map2.set('usa',"united state of america")
map2.set('fr',"france")
console.log(map2)
//It will execute in the given order wise and print the output one time
//printing map by for of loop
for(const key of map2){
    console.log(key)
}
/* 25-27 by this way the key value pairs will be associated to avoid this we use syntax[key,value]*/
for(const [key,value] of map2){
    console.log(key,':-',value)
}
//map or arry mostly used in for of loop  but  for object for of loop wont executed 
