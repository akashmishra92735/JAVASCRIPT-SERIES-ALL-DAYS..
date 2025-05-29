                                //DAY 6 JAVASCRIPT
//FOR LOOP
let n=60;
for(let i=12;i<=13;i++)
{
    console.log("i am a programmer");
}

//FOR IN LOOP
let obj ={
    name:"Amit",
    Age:17,
};
for(let key in obj){
    console.log(`${key}: ${obj[key]}`);
}
//(ii)Question.
let obj={
    name:"Rahul",
    class:'x',
    age:16,
}
for(let key in obj){
    console.log(`${key}: ${obj[key]}`);//templete literal
}


//WHILE LOOP
let i=1;
while(i<=10){
    console.log("hey");
    i++;
}

//do while loop
let i=1;
do{
    console.log("India");
    ++i;
}
while(i<=20)

//Q.1 Print the table of given input.
let i;
let n=parseInt(prompt("Enter your number"));
let r;
for(i=1;i<=10;i++)
{
   r=n*i;
   //console.log(r);
   console.log(n+"*"+i+"="+r);
}