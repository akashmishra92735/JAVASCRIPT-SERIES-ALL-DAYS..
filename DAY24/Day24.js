
                                 //DAY24 JAVASCRIPT
//Creating API...(restful)
//CLOSER...
function parent(){
  var name ='Sarthak';
  function child(){
          console.log(name);
  }
  child();
}
parent();


//Fist Class Function
var first=function(){
     console.log("Fist Class Function");
}
first(); 
//Higher Order Function

const high=function(){
         return function(){
          console.log("Hello World");
         }
}
high()();