// 12-19-2019
//template literals or template literals

const fName = 'pirate';
const lName = 'goodwin';
const address = '123 S.11th street';
const age = 36;
const gender = 'male';

let html;

//withouth template strings:

html = '<ul><li>first name:' + fName + '</li><li>last name:'+lName+'</li></ul>';

//output:
//first name:pirate
//last name:goodwin


//now with template literals:
//using back ticks!
html = `
<ul>
<li>first name: ${fName}</li>
<li>last name: ${lName}</li>
<li>address: ${address}</li>
<li>age: ${age + 2}</li>
</ul>
`;
// first name: pirate
// last name: goodwin
// address: 123 S.11th street
// age: 38



//this was not explained yet:
document.body.innerHTML = html;
