// object literals video 14

// LEARN: accessing objects, store a function in the object; KEYWORD THIS; calling function;

//object:


//define an object literal:
const person = {
  fName: 'bruce',
  lName: 'wayne',
  age: 30,
  yob: 1983,
  hobbies: ['fighting crime','saving the city','buying hotels', 'analyzing clues'],
  address: {
    city: 'gotham city',
    state: 'new york'
  },
  //getBday: function getBday(){} -> also works
  getBday: function(){
    //keyword "this" refers to the person object
    let currYr = new Date().getFullYear();
    return currYr - this.age;
  },
  //getAge: function(){}; --> also works
  getAge: function getAge(){
    let currYr = new Date().getFullYear();
    return currYr - this.yob;
  },
};

function cap(name){
  name.toUpperCase();
};

let val;

val = person.fName;
//also works --> val = person['fName'];
//--> bruce

val = person.getBday();
//--> 1989

// val = person.getAge();
// //--> 36

// val = person.address.city;
// //--> gotham city

// val = person.hobbies[3];
// //--> analyzing clues


//----------------------------------------------


//output:

console.log(val);

