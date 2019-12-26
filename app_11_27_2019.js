// Nov 27th - video 8
  //JS Type Conversions:

let val; // why needed?
let val2; // why needed?


// original state:
  val = 5;

  //console.log(val); --> 5
  //console.log(typeof val); --> number
  //console.log(val.length); --> undefined

// to string
  val = String(5);
  // same as above
  val = (5).toString();
  // console.log(val); --> 5
  // console.log(typeof val); --> string
  // console.log(val.length); --> 1

// to string
  val = String(4+4);
  // console.log(val); --> 8 (math operation is done first)
  // console.log(typeof val); --> string
  // console.log(val.length); --> 1

// to string
  val = String(new Date());
  // console.log(val); --> Wed Nov 27 2019 16:34:47 GMT+0900 (Korean Standard Time)
  // console.log(typeof val); --> string
  // console.log(val.length); --> 56

// string Date (above) --> array object
  // split string by spaces
  val = val.split(' ');
  // console.log(val); // --> (9) ["Wed", "Nov", "27", "2019", "16:48:13", "GMT+0900", "(Korean", "Standard", "Time)"]
  // console.log(typeof val); // --> object
  // console.log(val.length); // --> 9

// array --> string
  val = String([1,3,4,5]);
  // same as above
  val = ([1,3,4,5]).toString();
  // console.log(val); --> 1,3,4,5
  // console.log(typeof val); --> string
  // console.log(val.length); --> 7

//----------------------------


// original state:
  val2 = '5';

// to number int
  val2 = Number('5.50');
  val2 = parseInt('5.50');
  // console.log(val2); --> 5
  // console.log(typeof val2); --> number
  // console.log(val2.toFixed()); --> 5


// to number int
  val2 = Number('5.50');
  val2 = parseInt('5.50');
  // console.log(val2); --> 5
  // console.log(typeof val2); --> number
  // console.log(val2.toFixed(2)); --> 5.00

// to number float
  val2 = parseFloat('5.50');
  // console.log(val2); --> 5.5
  // console.log(typeof val2); --> number
  // console.log(val2.toFixed()); --> 6

// to number float
  val2 = parseFloat('5.50');
  // console.log(val2); --> 5.5
  // console.log(typeof val2); --> number
  // console.log(val2.toFixed(2)); --> 5.50


//----------------------------

//output(s):

 //output value
console.log(val);
 //output type
console.log(typeof val);
 //output length
console.log(val.length);


 //output value
console.log(val2);
 //output type
console.log(typeof val2);
 //output sets decimal places; only works on numbers
console.log(val2.toFixed());


//_____________________________________________________________



