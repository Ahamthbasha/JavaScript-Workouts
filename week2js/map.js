const map=new Map()
map.set("name","ahamathbasha")
map.set("age",
    20
)
map.set("city","TVM")
console.log(map)
console.log(map.has(3))
console.log(map.size)
for(let [key,val] of map)
{
    console.log(`key is:${key} value is:${val}`)
}