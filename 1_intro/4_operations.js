let value = 3;

let negValue = -value; // -3
console.log(negValue); // -3

let str1 = "hello";
let str2 = "akash";

let str3 = str1 + str2; // helloakash
console.log(str3); // helloakash

let str4 = str1 + " " + str2; // hello akash
console.log(str4); // hello akash

let str5 = str1 + 3; // hello3
console.log(str5); // hello3

console.log(1 + 2 + 3); // 6
console.log(1 + 2 + "3"); // 33*** v.imp

console.log("1" + 2); // 12
console.log(1 + "2"); // 12

// jo bhi pehle hoga usi ki jai...
console.log("1" + 2 + 2); // 122
console.log(2 + 2 + "1"); // 41


console.log(2 + "1" + 2); // 212
console.log(typeof(2 + "1" + 2)) // string


console.log(3 + 4 * 5 % 3) // 5

console.log(true); // true

console.log(+true); // 1

// console.log(true+) // error

console.log(+""); // 0
console.log(+"hello"); // NaN
console.log(+"3"); // 3
console.log(+"3hello"); // NaN


let gameCounter = 100;
gameCounter++; // 101

console.log(gameCounter); // 101

++gameCounter; // 102
console.log(gameCounter); // 102


//  ---- comparison operators ----

console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 <= 1); // false

// it is better to compare same data types  (principle of homogenity)

console.log("2" > 1); // true
console.log("01" == 1); // true
console.log("02" > 1); // false

console.log(null > 0)   // false
console.log(null == 0)  // false
console.log(null >= 0)  // true**

// undefined wala teeno case mai false h...
console.log(undefined > 0)   // false
console.log(undefined == 0)  // false
console.log(undefined >= 0)  // false

console.log(null == undefined) // true
console.log(null === undefined) // false

console.log(null === 0) // false
console.log(null == false) // false

console.log(null == "0") // false
console.log(null == "null") // false
console.log(null == "undefined") // false

console.log(null == null) // true
console.log(undefined == undefined) // true

// the reason is that an equality check == and comparison < > <= <= work differently.
// comparison converts null to a number, which results in 0.


// strict check ===

console.log(2 === 2); // true
console.log(2 === "2"); // false

console.log(2 == "2"); // true

console.log(2 !== 2); // false
console.log(2 !== "2"); // true

console.log(2 != "2"); // false
console.log(2 != 2); // false

console.log(2 !== 2); // false
console.log(2 !== 3); // true


// on the basis of how the data is stored and fetched from memory, on the basis of that 
// the data types are divided into two categories -
// 1. primitive data types (7 in number) (immutable), 
// call by value - number, string, symbol, bigint, boolean, undefined, null

// 2. reference data types (mutable), call by reference - object, array, function

// javascript is a dynamically typed language, 
// which means that the type of a variable is determined at runtime 
// and can change as the program executes

const id = Symbol('123'); // unique value
const id2 = Symbol('123'); // unique value
console.log(id === id2); // false
console.log(id); // Symbol(123)
console.log(id2); // Symbol(123)


const bigint = 34567890234565678n;

console.log(bigint); // 34567890234565678n
console.log(typeof bigint); // bigint

const heros = ["ironman", "thor", "spiderman"];

let myObj = {
    name: "akash",
    age: 23,
    isActive: true,
    score: 34.5,
    heros: heros,
    id: id,
    bigint: bigint
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myObj); // object
console.log(typeof myFunction); // function
console.log(typeof heros); // object


// primitive ka data type function aata h
// function ka data type object function aata h


