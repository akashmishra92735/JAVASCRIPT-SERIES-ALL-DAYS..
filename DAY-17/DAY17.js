                               //DAYS 17 JAVASCRIPT
//DOM(Document object Model)
let arr=[1,2,3,4];
let arr1=arr.reduce((a,b)=>a+b);
console.log(arr1);


//2
let loop=[1,2,3,4];
let sum=0;
for(let i=0;i<loop.length;i++)
{
    sum=sum+loop[i];
}
console.log(sum);

//3
let fe = [1, 2, 3, 4];
let sum1 = 0;
loop.forEach(num => sum1 += num);
console.log(sum1); 
//4
*/
//DOM(Document object Model)

function change(){
        let ele=document.getElementsByTagName("h1");
        ele[0].innerHTML="Hello India";
        let ele1=document.getElementsByTagName("p");
        ele1[0].innerHTML="new paragraph here";
        let ele2=document.getElementById("card-container");
        ele2.style.flexdirection="columns";
}












