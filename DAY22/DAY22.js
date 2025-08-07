                                //DAY 22 JAVASCRIPT 
    /*                           //h.w//      //name,email,password(data consider all question).
//call,Apply,Bind
var person1={firstname:'PrepBytes',Lastname:'Student'};
function test(greeting,year){
     console.log(greeting+''+this.firstname+''+this.Lastname+''+year);
      
}
test.call(person1,"Hello",2025);
//Document.getElementbyid("pr").innerText=person1;

//Apply

let obj={
      name:'Aman',
      age:24,
      email:'aman123@gmail.com',
};
function fun(greets,gender){
      console.log(greets +""+this.name+""+this.age+"years old"+this.email=""+gender); 
      document.getElementById("pr").innerText = JSON.stringify(person1);
}
fun.apply(obj,["Hey....","Male"]);

//Bind
var p1={FirstStudent:'Akash',LastStudent:'Amit'};
function check(winner,year){
      return(winner+""+this.FirstStudent+""+this.LastStudent+""+year);
      console.log(winner+""+this.FirstStudent+""+this.LastStudent+""+year);
       
}
var ak=check.bind(p1);
ak("Car",2025);
var res=ak("car",2025);
document.getElementById("pr").innerText = res;

//PROMISES'
async function try1(){
      let myPromise=new Promise(function(resolve,reject){
            resolve("Hello World");
      });
      const result =await myPromise;
      return result;
}
      */
 var k=try1();
 console.log(k);
  fetch("https://randomuser.me/api/")//RANDOM API 
  .then(res => res.json())
  .then(data => console.log(data));

//<img src="https://picsum.photos/200" alt="Random Image">//

fetch("https://jsonplaceholder.typicode.com/users")//JSONPlaceholder (Fake Data API)
  .then(res => res.json())
  .then(data => console.log(data));

/*
  /* Public APIs hote hain:
Ye developers, companies, ya open-source communities ke dwara banaye jaate hain.

Inka purpose hota hai practice aur development me help karna.

Ye free me available hote hain "public APIs" ke naam se.
*/

                    //23 JAVASCRIPT
                    const fetchData=new Promise((resolve,reject)=>{
                        setTimeout(()=>{
                              let succes=true;
                              if(succes){
                                    resolve("Data is Fetched");
                              }
                              else{
                                    reject("failed to fetch Data");
                              }
                        },2000);
                    });
                    fetchData.then((response)=>{
                        console.log("Success",response);
                    })
                    .catch((error)=>{
                         console.log("error",error);
                    });

// NESTED FUNCTION//(promises ,asynce, await,closer)//

function length (){
       l=parseInt(prompt("Enter Your Number"));
      function breadth(){
            b=parseInt(prompt("Enter your breadth"));
      }
      breadth();
}
length();


function rectangle(l,b){
      area=l*b;
      return area;
}
let res=rectangle(l,b);
console.log(res);

async function getUserData(){
      try{
            let response =await fetch('https://boringapi.com/api/v1/photos/?page=1&limit=10');
            let Data =await response.json();
         document.getElementById("output").innerText = JSON.stringify(Data);
      } catch(error){
            console.log("Data not fetch",error);
            document.getElementById("output").innerText=error;
}
      }