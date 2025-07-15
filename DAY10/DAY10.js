 // DAY 10 JAVASCRIPT

                //PRACTICE QUESTION ON ARRAY & STRING
//Q.1
let arr=[2, 1, 4, 6, 5, 7, 0];
for (let i=0;i<arr.length;i++) {
  if (arr[i]%2==0){
    console.log(arr[i]+"even");
  } else {
    console.log(arr[i]+"Odd");
  }
}

//Q.2
let odd=[];
let even=[];
for(let i of arr)
{
    if (i % 2 === 0) {
    even.push(i);
  } else {
    odd.push(i);
  }
}

//Q.3
let arr1=[0,1,0,1,0,1,0,1,1];
let counto=[];
let countz=[];
for(let i=0;i<arr.length;i++)
{
    if(arr1[i]==0)
       counto++;
    else
        countz; 
}
console.log(counto);
console.log(countz);

//Q.4
let arr1=[5,8,5,9,2,0,7,5];
let copyArr =[...arr];
console.log(copyArr);
for(let i=0;i<arr1.length;i++)
{
    for(let n=0;n<arr1.length;n++){
        if(arr[i]==j)
            console.log(copyarr);

    }
}

//Q.5  
let str="Lakhwinder";
let countv=0;
let countco=0;
let vowels1="aeiouAEIOU";   
let consonents="bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";      
for(let i=0; i<str.length; i++){
    if (vowels1.includes(str[i])){
        countv++;
    }
    else if(consonents.includes(str[i])){
        countco++;
    }
}
console.log(countv);
console.log(countco);

//Q.6
let arr3=[4,5,6,78,1,2];
smallest=[];
largest=[];
for(let i=0;i<arr3.length;i++)
{
   if(arr3[i]>smallest){
    smallest=arr3[i];
   }
   else if(arr3[i]<largest)
    largest=arr3[i];
}
console.log("smallest");
console.log("largest");

