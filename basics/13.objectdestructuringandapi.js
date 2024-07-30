const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
/*with in the curly braces are known as destructuring the object
1.{courseInstructor}
2.{courseInstructor:instructor} 
it is helpfull in write the clean code
*/
const{courseInstructor}=course
console.log(courseInstructor)
const{courseInstructor:instructor}=course;
console.log(instructor)