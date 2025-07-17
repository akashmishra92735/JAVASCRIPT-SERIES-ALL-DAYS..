                      //DAY 12 JAVASCRIPT(function)


function fun(){
   console.log("hello regular function");
}
fun();
//arrow function
const a=() =>{
   alert("Arrow  function");
};
a();

//Function expression
const b=function(){
   document.write("Hello sarthk");
}
b();
// function argument and parameter
function funn(name,age){
  return console.log("I am a developer",name,age);
}
funn("akash,naam",45);
funn("vikas",45);//we can call multiple times.
funn("jaypraksh",45);-
funn("akash",45);
funn("akash",45);

//Q.1
function zero(){
  console.log("Zero");
}
zero();

//Q.2
const l=()=>{
      console.log("Arow with zero parameter");
}
l();

// Q.3
function one(firstName, lastName, age) {
    let letter = firstName[0]; 
    let newAge = age + 54;          
    return `${letter} is ${newAge} years old 2`;
}
let result = one("Aman", "Mishar", 45);
console.log(result);














