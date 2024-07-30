/*
memory is two types
1.stack(primitive)
when stack memory is used.we get copy of the variable.Original value wont be changed when we use primitive datatype
2.Heap(non primitive)
When heap memory is used .we get reference of the variable.If we change the value it also change the original value.
*/
//stack with primitive datatype
let myYoutubeName="christopher nolan"
let anothername=myYoutubeName;
anothername="quentin tarantino";
console.log(myYoutubeName);
console.log(anothername);

//heap with nonprimitive datatype
let userone={
    name:"vijay",
    email:"ajith@gmail.com"
}          
let usertwo=userone;

usertwo.email="vijay@gmail.com"
console.log(userone.email)
console.log(usertwo.email)