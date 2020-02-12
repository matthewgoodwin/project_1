// video 18: Functions,functions expressions, IIFE's and Object Properties

// what I learned:

//basic funcitons:
function hello(){
  console.log('hello');
};
//output-->'hello'
function helloUser(name){
  console.log('hello' + ' ' + name);
};
//output-->'hello james'

//function expression
let helloUser2 = function(){
  console.log('hello' + ' ' + name);
};


//IIFE immediately ivokable function expressions:
(function(){
console.log('this is an IEFE')
})();
//output-->'this is an IEFE'
let oldShit = function(){
  console.log('this is the old way');
  return '1+1';
};
//output-->this is the old way
let newShit = ()=>{
  console.log('this is the new way');
};
//output-->this is the new way

//Fucntions in an object are Object Properties:
const human = {
  name: 'tyler',
  address: '123 s.11th steet',
  yob: 1983,
  age: function(){
    console.log(2020 - this.yob);
  },
  age2: function(a){
    let d = new Date();
    let y = d.getFullYear(); //same as below
    // let y = new Date().getFullYear()
    console.log(y - a);
  }
} //close human object

//get age
human.age();
//output--> 37
human.age2(1995);
//output--> 25

human.todo = function(){
  console.log('have things to do..');
}
human.todo();



hello();
helloUser('james');
helloUser2('steve');
oldShit();
newShit();
