//array and array methods video

// Learned: check array; length; ADD to Array; Sort and organize arrays; Sort with compare functions; array FIND



const bakeryItems = ['cookies','milk','chocolate'];

const numbers = [12,13.3,15.8,1.9,3,5,7,6,3,10,8,9.2,13];

const numbers2 = [33,100,56,78,99];

const mixed = ['fruit', null, {a: 1, z: 3}, true, 669, 'amazon', new Date()];

let val;


// length is not a function.. its a property
val = mixed.length;
// console.log(val); - > 7


// check is array? use Array object and method; and pass in item
val = Array.isArray(mixed);
// console.log(val); -> true


//ADD TO ARRAY

// add to array @ end
val = mixed.push('6');
// --> (8) ["fruit", null, {…}, true, 669, "amazon", Fri Dec 20 2019 00:21:20 GMT+0900 (Korean Standard Time), "6"]


// add value to array @ beginning:
val = mixed.unshift('6');
// --> (9) ["6", "fruit", null, {…}, true, 669, "amazon", Fri Dec 20 2019 00:22:29 GMT+0900 (Korean Standard Time), "6"]


// sort values:
val = numbers2.sort();
// sorts in order by 1's place
//-->
// 0: 100
// 1: 33
// 2: 56
// 3: 78
// 4: 99



// sort lowest to highest; USE COMPARE FUNCTION:
val = numbers2.sort(function(x,y){
  return x - y;
});
//--> [33, 56, 78, 99, 100]




// sort highest to lowest; USE COMPARE FUNCTION:
val = numbers2.sort(function(x,y){
  return y - x;
});
//--> [100, 99, 78, 56, 33]




// FIND:
// function finds and returns the first number less than '6':
function lessThan6(num){
  return num < 6;
}
// array method FIND calls the lessThan6 method
val = numbers.find(lessThan6);
// --> 1.9


//-----------------------------------------
//output:

console.log(mixed);

console.log(val);
