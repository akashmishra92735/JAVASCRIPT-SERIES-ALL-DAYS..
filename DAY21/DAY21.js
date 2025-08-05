       // DAY 21 JAVASCRIPT
//Asynchronous  function
function fun(){
      return new Promise(resolve =>{
            setTimeout(()=>{
                  resolve("Hello This is new Function");
            },1000);
      });
}

async function greet() {
      console.log("Async Function");
      let message =await fun();
      console.log(message);

            //let message = await fun();
            document.getElementById("output").innerText = message;
}
greet();


async function getUserData(){
      try{
            let response =await fetch('https://jsonplaceholder.typicode.com/users');
            let Data =await response.json();
            // document.getElementById("output").innerText=firstFive;

             //document.getElementById("output").innerText = firstFive;
             //console.log(firstFive);
            console.log(Data);

        let firstFive = Data.slice(0, 5); 
        let five=Data.filter((user)=> user.id<=5);
        let output;
        for (let i = 0; i < firstFive.length; i++) {
          output = output+"ID: "+ firstFive[i].id+"Name: " + firstFive[i].name +"Email:" + firstFive[i].email;
        }
        document.getElementById("output").innerHTML = output;


            //document.getElementById("output").innerText=Data;
           // document.getElementById("output").innerText = JSON.stringify(Data, null, 2);
           
      } catch(error){
            console.log("Data not fetch",error);
            document.getElementById("output").innerText=error;
}
      }
getUserData();

