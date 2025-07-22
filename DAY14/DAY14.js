                    
                                   //DAY 14 JAVASCRIPT
//OBJECT                                   
var user={
  name:"Akash",
  profession:"Developer",
  hobbies:["cricket","song","Boxing"]
}
//console.log(user.name);
//console.log(user.profession);

for (let key in user) {
  console.log(key + " → " + user['name','hobbies','profession']);
}

function car(make,model,year){
  this.make=make;
  this.model=model;
  this.year=year;
}
const car1=new car('Eagel','Talon Tsi',1993);
console.log(car1);

class Rectangle{
  constructor(Name,Address){
    this.name=this.name;
    this.Address=Address;
  }
}
const rec=new Rectangle("Akash","New Ashoknagar");
console.log(rec);

const str="Ravan";
console.log(...str);

const body={
    blood:'red',
    bone:'strong',
    weight:67,
    height:171,
};
const brain={
       iq:1,
};
const person={
     ...body,
     ...brain,
     name:'Akash'
};
console.log(person);

//Object.values

const use={
  a:'student',
  b:24,
};
console.log(Object.values(use));
//Object.keys
const us={
  c:'teacher',
  d:45,
};
console.log(Object.keys(us));

const coll={
    name:'Akash';
    Age:24;
}
console.log(coll.name);
console.log(coll.Age);