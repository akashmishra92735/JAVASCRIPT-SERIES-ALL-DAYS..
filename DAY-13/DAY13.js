                                   //DAYS 13 JAVASCRIPT

//2D ARRAY
let arr=[[1,2,3,4,5],[6,7,8,9,10]];
let [a,b]=arr;
let result = a.concat(b);
console.log(result); 

        //indexing
let   arrr=[[1,2,3,4,5],[6,7,8,9,10],[16,17,18,19,110]];
console.log(arrr);

/*1        
12
123
1234
12345
123456
*/
for (let i = 1; i <= 6;i++){
  let row = "";
  for (let j = 1; j <= i; j++){
    row= row+"* ";
  }
  console.log(row);
}

for (let i=1; i<=6;i++){
  let row="";
  for (let j=1;j<=i;j++){
    row= row+",SARTHAK";
  }
  console.log(row);
}
