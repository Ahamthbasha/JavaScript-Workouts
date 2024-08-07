const set=new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add("hello");
set.add({name:"ahamath",role:"developer"})
console.log(set)
set.delete(2)
console.log(set)
console.log(set.has(3))
console.log(set.size)
set.forEach(val=>{
    console.log(val)
})
for(const val of set){
    console.log(val)
}