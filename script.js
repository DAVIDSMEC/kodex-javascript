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
costFromTempSiteToKodex = 100;

console.log(costFromTempSiteToKodex);

/**
 * Always declare a variable with const when you know that the value should not be changed
 */