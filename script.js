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

if (money) {
  console.log('Go on a shopping ')
}

else {
  console.log('Dont spend the money');
}


let product = 0;

if (product) {
  console.log('stay at home')
}

else {
  console.log('go on a shopping spree')
}

// ----------------logical operators---------------
// logical operators are used to determine the logic between variables and values 
// && is the AND Operator
// || is the OR Operator
// ! is the NOT Operator

const hasDriversLicense = true;
const hasGoodVision = false;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log('Nonso is eligible to drive');
}
else {
  console.log('someone else should drive');
}

if (hasDriversLicense || hasGoodVision) {
  console.log('Nonso is eligible to drive');
}

else {
  console.log('someone else should drive')
}

if (!hasDriversLicense || hasGoodVision) {
  console.log('Nonso is eligible to drive');
}

else {
  console.log('someone else should drive')
}
if (hasDriversLicense && hasGoodVision || isTired) {
  console.log('Nonso is eligible to drive')
}
else {
  console.log('someone else should drive');
}


// step 1
// const manchester = (96 + 108 + 89) / 3;
// const barcelona = (88 + 91 + 110) / 3;
// console.log(manchester, barcelona);

// // step 2
// if(manchester > barcelona){
//   console.log('manchester is the winner');
// }else if(barcelona > manchester){
//   console.log('barcelona wins')
// }else if(manchester === barcelona){
//   console.log('Its a draw, both team wins');
// }

// bonus 1
// let = manchester = (97 + 112 + 101) / 3;
// let = barcelona = (109 + 95 + 123) / 3;
// console.log(manchester, barcelona);


// if(manchester > barcelona && manchester >= 100){
//   console.log('machester wins the trophy')
// } 
// else if(barcelona > manchester && barcelona >= 100){
//   console.log('Barcelona wins the trophy')
// }
// else if(manchester === barcelona && manchester >= 100 && barcelona >= 100){
//   console.log('both wins the trophy')
// }


// bonus 2
let = manchester = (97 + 112 + 81) / 3;
let = barcelona = (109 + 95 + 86) / 3;
console.log(manchester, barcelona);


if (manchester > barcelona && manchester >= 100) {
  console.log('machester wins the trophy')
}
else if (barcelona > manchester && barcelona >= 100) {
  console.log('Barcelona wins the trophy')
}
else if (manchester === barcelona && manchester >= 100 && barcelona >= 100) {
  console.log('both wins the trophy')
}
else {
  console.log("No one wins the trophy");

}
//  ==========the switch statement============

const day = "tuesday";

//  switch(day){
//   case 'monday':
//    console.log('sit at home');
//    break;
//   case 'tuesday':
//    console.log('Go for javascript class')
//    break;
//   case 'Wednesday':
//    console.log('Go to the gym')
//    break;
//   case 'thursday': 
//   case 'friday': 
//     console.log('bake some cake')
//    break;
//   case "saturday":
//   case "sunday":
//    console.log('write some code')
//  }

// using if statement to represent the if statement

if (day === 'tuesday') {
  console.log('sit at home');
} else if (day === 'tuesday') {
  console.log('Go for javascript class')
} else if (day === 'wednesday') {
  console.log('Go to the gym')
} else if (day === 'thursday') {
  console.log('bake some cake')
} else if (day === 'friday') {
  console.log('write some code')
} else if (day === 'saturday') {
  console.log('play football')
}
else if (day === 'sunday') {
  console.log('play')
}


// -------------------------The Ternary Operator------------------
const age = 23;
age >= 18 ? console.log('I love alchohol') : console.log('I like caprisun');

//  OR
// if (age >= 18) {
// console.log('I love alchohol')
// }
// else {
//   console.log('I like caprisun')
// }
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`the bills ${bill}, the tips was ${tip}, and the total value is ${bill + tip}`)

// --------------------------Functions---------------------

function sayHiToDonald() {
  console.log('My name is David , Say Hi');
}
//  you call or invoke the function
sayHiToDonald()

function getFruitName(item1, item2) {
  const juice = `Fruit salad is made with ${item1} and ${item2}`
  return juice;
}

getFruitName()
const fruitSalad = getFruitName('Cabage', 'carrot');
console.log(fruitSalad)

// function declaration
function calculateAge(birthYear) {
  return 2023 - birthYear;
}

console.log(calculateAge(1998))

// function expression 
// let a = b + c
const calculateAge1 = function (birthYear) {
  return 2023 - birthYear;
}

console.log(calculateAge1(1989));

// ==================ARROW FUNCTION ===============

const calculateAge2 = birthYear => 2023 - birthYear;
console.log(calculateAge2(1717));
//  no return keyword if the parameter is one

// use return keyword if the parameter is more than one
const yearsUntillRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 60 - age;
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntillRetirement('1992', 'Ugo'))

//  ==================FUNCTIONS CALLING OTHER FUNCTIONS=================

function cutFruitPieces(fruitNumber) {
  return fruitNumber * 4;
}

function fruitProcessor(item1, item2) {
  const item1Pieces = cutFruitPieces(item1);
  const item2Pieces = cutFruitPieces(item2);

  const juice = `Juice is made with ${item1Pieces} piceces of oranges and ${item2Pieces} pieces of Banana`;
  return juice;
}

console.log(fruitProcessor(3, 2));

// ===========function review================
// const yearsUntillRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 60 - age;
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntillRetirement('1992', 'Ugo'))





// const calcAverage = (team1, team2) => {
//   const avgmanchester = (44 + 23 + 71) / 3;
//   const avgbarcelona = (65 + 54 + 49) / 3;
// }
// console.log((manchester, barcelona));


// const checkWinner = (avgmanchester, avgbarcelona) => {
//   if(avgmanchester  >= avgbarcelona * 2){
//     console.log(`manchester is the winner`)
//   }
//   else if(avgbarcelona >= avgmanchester * 2){
//     console.log(`barcelona is the winner with average score of ${avgbarcelona}`)
//   }
//   else {
//     console.log('nobody wins')
//   }

// }
// checkWinner(avgmanchester, avgbarcelona);


const calAvg = (a, b, c) => (a + b + c) / 3;
const avgmanchester = calAvg(44, 23, 71);
const avgbarcelona = calAvg(65, 54, 49);

console.log(avgmanchester);



const checkWinner = (avgmanchester, avgbarcelona) => {
  if (avgmanchester >= avgbarcelona * 2) {
    console.log(`manchester is the winner`)
  }
  else if (avgbarcelona >= avgmanchester * 2) {
    console.log(`barcelona is the winner with average score of ${avgbarcelona}`)
  }
  else {
    console.log('nobody wins')
  }
}
checkWinner(avgmanchester, avgbarcelona);

// =======================INTRODUCTION TO ARRAYS==========================

let student1, student2, student3;
student1 = "Donald";
student2 = "Somto";
student3 = "Michael";

// Method 1
const friends = ['Ugo', 'prisca', 'David', 'Divine'];
console.log(friends);
console.log(friends[1]);
console.log(friends.length);

friends[1] = 'Donald';
console.log(friends);

// method 2
// const people = new Array ('Joseph', 'donald', 23, 81);
// console.log(people);

const findAge = function (birthYear) {
  return 2023 - birthYear;
}

const years = [1990, 1965, 1966, 1954];

const age1 = findAge(years[0]);
const age2 = findAge(years[1]);
const age3 = findAge(years[years.length - 1]);

console.log(age1, age2, age3);


// ====================Array Mehods========================

// Add Elements = The push method Appends

const newFriends = ['Ugo', 'Prisca', 'Henry', 'David'];

// Add Elements = The push method appends new elements to the end of an array, and a new length of arrray

const newLength = newFriends.push('Donald');
console.log(newFriends);
console.log(newLength);


// Removing Elements===The pop method removes the last

// =========coding challenge===========
// const yearsUntillRetirement = (birthYear, firstName) => {



const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
}
console.log(calcTip(100));

// task 2

const bills = [125, 55, 44];

// task 3
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// task 4
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


// ========================== INTRODUCTION TO OBJECT===============================

const donaldArray = [
  'Donald',
  'Wilfred',
  2023 - 1999,
  'Developer',
  ['kels', 'somto', 'olisa']
];

// const donaldObject = {
//   firstName: 'Donald',
//   lastName: 'Wilfred',
//   age: '2023 - 1999',
//   job: 'Developer',
//   friends: ['kels', 'somto', 'ugo']
// }

// console.log(donaldObject);

// Dot vs Bracket

// dot notation
// console.log(donaldObject.job);

// bracket notation
// console.log(donaldObject['friends']);

// const nameKey = "Name";
// console.log(donaldObject['first' + nameKey]);
// console.log(donaldObject['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about me? Choose between firstName, lastName, job, and friends');

// if (donaldObject[interestedIn]) {
//   console.log(donaldObject[interestedIn]);
// }
// else {
//   console.log('Wrong Request')
// };

// donaldObject.location = "Italy";
// donaldObject.['gitHub'] = "hdhdhdjj";


// Donald has 3 friends and his best friend is ugo
// console.log(`${donaldObject.firstName} has ${donaldObject.friends.length} friends and his best friend is ${donaldObject.friends[2]}`);

//  ==============================Object Methods===============================

const students = {
  firstName: 'Donald',
  lastName: 'Nwaokoro',
  birthYear: '1991',
  job: 'Developer',
  friends: ['Henry', 'pomto', 'ezeugo'],
  hasDriversLicense: true,
  calculateAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    // Donald is a 32 year old Developer, and he has a/no drivers lincence
    return `${this.firstName} is a ${this.calculateAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers licence`;
  },
}
console.log(students);
console.log(students.calculateAge());
console.log(students.age);
console.log(students.getSummary());


// coding challenge
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const John = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }

};


mark.calcBMI();
John.calcBMI();
console.log(mark.bmi, John.bmi);

if(mark.bmi > John.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${John.fullName}'s  BMI (${John.bmi})`)
}
else if (John.bmi > mark.bmi){
  console.log(`${John.fullName}'s BMI ${John.bmi} is higher than ${mark.bmi}`)
}