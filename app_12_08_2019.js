// concatentation video
// December 8th 2019

//THIS FILE: concatenation, string property vs string method/function/action, indexof strings, splits strings into array

const fName = 'greg';
const lName = 'goodwin';
const age = 100;
const intro = 'hello welcome to my shop';
const tags = 'cars, old school, 39 coupe, classic cars';

let val;


//concatenation
val = fName + ' ' +lName;
//console.log('val');--> greg goodwin


val = 'hello my name is ' + fName + ' ' + lName + ', and i am ' + age;
//console.log('val');--> hello my name is greg goodwin, and i am 100

//comment out with back-slash
val = 'that\'s awesome, I cant wait';
//console.log('val');-->that's awesome, I cant wait



//property is the name of a 'value'; a method is the name of a 'action/function'

// .length is a string property/value so no need for ();
// INCORRECT --> x.length();
// CORRECT --> x.length; OR x.prototype; OR x.prototype.length;
val = fName.length;
//console.log('val');--> 4

// .toUpperCase() is a method/action/function, so we need the ();
// CORRECT --> x.toUpperCase(); OR x.prototype.toUpperCase();
val = fName.toUpperCase();
//console.log('val');--> GREG;

val = fName[0];
// console.log(val); --> 'g';

//find the instance place of 'g'
val = fName.indexOf('g');
// console.log(val); --> 0;

//finds the last 'o' in lastname
val = lName.lastIndexOf('o');
//'o'-> 'goo'
// console.log(val); --> 2;

//get character at X place:
val = lName.charAt(4);
// val = lName.charAt('4'); also works, but why???
// console.log(val); --> 'w';

//split into array based on spaces:
val = intro.split(' ');
//console.log('val');--> ["hello", "welcome", "to", "my", "shop"]

// split word into an array:
val = fName.split('');
//console.log('val');--> ["g", "r", "e", "g"]

//split sentence into an array based on commas:
val = tags.split(',');
//console.log('val');--> (4) ["cars", " old school", " 39 coupe", " classic cars"]


//next level; split sentence into tag array with not extra spaces:
val = tags.split(',').map(function(tag){
  return tag.trim();
});
// no spaces below:
//console.log('val');--> (4) ["cars", "old school", "39 coupe", "classic cars"]







//==================

// output
console.log(val);
