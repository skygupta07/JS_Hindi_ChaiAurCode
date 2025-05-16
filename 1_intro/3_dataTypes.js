"use strict";   // treat all js code as newer version

// alert("Hello World"); // show alert box - will give error in nodejs here

let name = "John"; // string
let age = 34; // number
let isLoggedIn = true; // boolean

// number, bigint, string, boolean, null, undefined, symbol

// null - representation of empty value - standalone value
// undefined - variable is declared but not assigned

// symbol = unique value

// object - collection of key-value pairs

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof null); // object --- Interview question

// ha bhai null ka type object hota h...



let score = 34.5; // number
console.log(typeof score); // number
console.log(typeof (score)); // number


let valueInString = String(score); // number to string
console.log(typeof valueInString); // string


let myScore = "45ab";
console.log(typeof myScore); // string
console.log(Number(myScore)); // NaN - Not a Number

let score2 = null;
console.log(typeof score2); // object   - interview - null ka typeof karne par object aata h...
console.log(Number(score2)); // actually yaha null hai toh 0 milega



let isLoggedIn2 = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn2); // 1 is true
console.log(booleanIsLoggedIn); // true
console.log(Boolean(0)); // false

let isLoggedIn3 = 0;

let booleanIsLoggedIn2 = Boolean(isLoggedIn3); // 0 is false
console.log(booleanIsLoggedIn2); // false
console.log(Boolean(0)); // false

// "" => false

// "0" => true
// "akashFalse" => true

let someNumber = 79;
console.log(someNumber); // 79
console.log(typeof someNumber); // number


let someString = String(someNumber); // number to string
console.log(typeof someString); // string
console.log(someString); // "79"