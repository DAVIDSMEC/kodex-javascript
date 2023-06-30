// Values and Variables
console.log("Hello World!");

let firstName = "David";

console.log(firstName);

// Variable naming conventions
let last_name2 = "John"
let $function = 50;

console.log($function);
console.log(last_name2);

// data types

/*
javascript has 8 Data types 
1. String 
2. Number
3. Bigint
4. boolean
5. undefined
6. null
7. symbol
8. object
 */



// Booleans ->True orFalse Values
let javaScriptEasy = true;

let davidAge = 20;
console.log(typeof javaScriptEasy);
console.log(typeof davidAge);

// strings
let message = "welcome to london";
console.log(typeof message);

let divine = "24";

// exercise
let henry = "24" + 2;
console.log(typeof henry);

// undefined
let year;
console.log(year);
console.log(typeof year);



// an empty value has nothing to do with undefined
let david = "";
console.log(typeof david);


// if the value is undefined, type is undefined
let car = undefined;
console.log(typeof car);


// when adding a number and a string ,Javascript will treat the number as a string.
let vehicle = 16 + 4 + "volvo"
console.log(typeof vehicle);
console.log(vehicle);

/*
5. 
null in javascript, null is nothing. it is supposed to be something that doesnt exist .
the data type of null is an object
*/

let prisca = null;
console.log(typeof prisca);

/* difference between null and undefined
* typeof undefined is undefined
* typeof null is object
*/

// undfined and null are equal  in value
console.log(null == undefined);


// ************************ Let, const an var *********************

/*
The let keyword was introduced in ES6 (2015)

*********RULES************

  1. let cannot be redeclared
  2. let must be declared before use
  3. let has block scope

*/
// 1. let cannot be redeclared
let ugo = "Ugochukwu";
// let ugo = "kodex student"; -> cannot be redeclared

// 1. var can be redeclared
var kels = "Kodex Student";
var kels = "laravel developer";

console.log(kels);


// --------------block scope----------------

// -----let has block scope-----
{
  let job = 5;
}
// console.log(job);

// ------var doesnt have block scope------
{
  var animal = 'lion';
}
console.log(animal);

// 

var maccBook = 10;
{
  var macBook = 200;
}

console.log(macBook);

//   -------------------redeclaring a variable inside a block will not redrclare thr variable ouside block

let windows = 5;

{
  let windows = 9000;
}
console.log(windows);

// ==========Hoisting -> you can use the variable before it is declared========== ---let and const are not hoisted---

linux = "Ubunut"
var linux;



/*
The const keyword

The const keyword was introduced in ES6 (2015)

*********RULES************

  1. const cannot be redeclared
  2. const cannot be reassigned
  3. const has block scope

*/

// 1. const cannot be redeclared

const costFromTempSiteToKodex = 150;
// costFromTempSiteToKodex = 100;

console.log(costFromTempSiteToKodex);

/**
 * Always declare a variable with const when you know that the value should not be changed
 */

//  --------basic operators in JavaScript---------

//Math Operators
const now = 2023;
const divineAge = now - 1990;
const daviAge = now - 1981;

console.log(divineAge, daviAge);


// multiplication, division and raise to power
console.log(divineAge * 2, divineAge / 10, 2 ** 3);


const myAge = '25';
const dadAge = '85';
const adding = myAge + dadAge;

console.log(adding);

// ---------assignment operators (=) -------------

let numberOne = 10 + 15;
numberOne = numberOne + 5;
// OR numberOne += 5;

console.log(numberOne);



let numberTwo = 2 + 5;
numberTwo *= 7;
// numberTwo = numberTwo *7;

console.log(numberTwo);



let numberThree = 1;
numberThree++;
// or numberThree = numberThree + 1;

console.log(numberThree);



let numberFour = 4;
numberFour--;
// or numberFour = numberFour - 1;

console.log(numberFour);



// ----------------comparison operators (>, <, >=, <=)------------------

let ugoAge, olisaAge;
ugoAge = 32;
olisaAge = 35;

// let ugoAge, olisaAge;
// ugoAge = '32';
// olisaAge = 32;
// when consoled the with == the answer will be true but when === the anwer will be false 


console.log(ugoAge > olisaAge);


// ---------------operator precedence------=======
const yearNow = 2023;
const josephAge = yearNow - 1999;
const henryAge = yearNow - 1990;

console.log(josephAge + henryAge * 10);
// 22 + 33 * 10

// ------------coding challenge ->javascript operators----------

let markHeight = 1.69;
let markWeight = 70;

let johnHeight = 1.95;
let johnWeight = 92;

let markBmi = 70 / 1.69 ** 2;
let johnBmi = 92 / 1.95 ** 2

console.log(markBmi, johnBmi);

let markHeights = 1.88;
let markWeights = 95;

let johnHeights = 1.76;
let johnWeights = 89;

let markBmis = 95 / 1.88 ** 2;
let johnBmis = 89 / 1.76 ** 2;

console.log(markBmis, johnBmis);



// let markMass, markHeight, johnMass, johnHeight;

let markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);

// ---------strings and template literals-------------
const myName = 'Donald';
const myJob = 'Developer';
const yearOfBirth = 1717;
const currentYear = 2077;

const donald = "I'm " + myName + ', a ' + (currentYear - yearOfBirth) + ' year old' + myJob + '!';
console.log(donald);

const newDonald = `I'm ${myName}, a ${currentYear - yearOfBirth} year old ${myJob}!`;
console.log(newDonald);

console.log(`This is \n\
for multiple \n\
lines`)

console.log(`This
is 
for multiple
lines`)


// ---------------------Taking decison: if / else statements-----------------

const kelsAge = 5;

if (kelsAge >= 18) {
  console.log(`Kels is eligible to drink alchohol cos his age is ${kelsAge}`)
}
// else statement excutes when the if statement returns false

else {
  const yearsLeft = 18 - kelsAge;
  console.log(`Kels is not eligible to drink achohol . wait another ${yearsLeft}`)
}



let dayOfTheWeek = 'Monday';

if (dayOfTheWeek == 'Monday') {
  console.log('SIT AT HOME');
}

else {
  console.log('Write some code');
}



const marksBmi = 28.3;
const johnsBmi = 23.9;

if (marksBmi > johnsBmi) {
  console.log(`${marksBmi} is higher than ${johnsBmi} `);
}

else {
  console.log(`${johnsBmi} is higher than ${marksBmi}`);
}

// -----Time conversion and Coercion---
// -----Time  conversion is the process of converting a value from one type to another

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 10);

console.log(Number('Donald'));
console.log(typeof NaN);

console.log(String(23), 23);

// -----Time coercion
// time coercion is when Javascript coerces or changes a data type by itself

const sum = 35 + 'hello';
console.log(sum);

console.log('23' - '10' - 3);
console.log('24' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

// *************** Truthy and Falsy  ***********

// we have 5 Falsy Values 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 100;

if(money) {
  console.log('Go on a shopping ')
}

else {
  console.log('Dont spend the money');
}


 let product = 0;

 if(product){
  console.log('stay at home')
 }

 else {
  console.log('go on a shopping spree')
 }

