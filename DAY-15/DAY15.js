                                          //DAY 15 JAVASCRIPT
//3D ARRAY
let arr =[[[1,2],[3,4],[5,6]]];
console.log(arr);      

let arrr=[
  [
    [1,2],
    [3,4],
    [5,6],
  ],
];
console.log(arrr);
let arr2=[
  [
    [1,2],
    [2,3],
  ],
];
let [a,b]=[[1,2],[2,3]];
let res=[..a,..b];
console.log(res);




let arr3 = [[1, 2], [2, 3]];
let [a,b] =[[1, 2], [2, 3]];
let res =[...a,...b] ;
console.log(res);  


let arr4 = [[1, 2], [2, 3]];
let are=[];
for(let i=0;i<arr4.length;i++)
{
     are=are+arr4[i];
     console.log(are);
}


let arr4 = [[1, 2], [2, 3]];
let are = [];
for (let i = 0; i < arr4.length; i++) {
    are.push(...arr4[i]); 
    console.log(are);
}           