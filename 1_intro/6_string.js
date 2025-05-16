const name = "kr$na";
const repoCount = 38;

console.log(name + " has " + repoCount + " repositories"); // kr$na has 38 repositories

// but we use backticks for string interpolation

console.log(`${name} has ${repoCount} active repositories`)

const gameName = new String("sudoku");

/*
console output 

String {'sudoku'}0: "s"1: "u"2: "d"3: "o"4: "k"5: "u"length: 6[[Prototype]]: String[[PrimitiveValue]]: "sudoku"

string object hai yaha... 
key-value pair hai

*/


console.log(gameName[0]);
console.log(gameName.__proto__); // String {constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}

console.log(gameName.__proto__ === String.prototype); // true


console.log(gameName.length); // 6

console.log(gameName.toUpperCase()); // SUDOKU

console.log(gameName.charAt('2')); // d

console.log(gameName.indexOf('u')); // 1

console.log(gameName.slice(0, 3)); // sud   - start from 0 and end at 3, not include 3

console.log(gameName.substring(0, 4)); // sudo 
// substring bhi same hi hai lekin yaha par negative index nahi use kar sakte - ye negatve index ko ignore kar deta hai

const slicedString = gameName.slice(-7, 4);
console.log(slicedString); // sudo
// -7 se 4 tak ka slice le lo


/*
single quote ya double quote dono mai hi string likh sakte ho


*/


const newString2 = "   akashji    ";
console.log(newString2); // "   akashji    "
console.log(newString2.length); // 13

console.log(newString2.trim()); // "akashji"
console.log(newString2.trim().length); // 8

console.log(newString2.trimStart()); // "akashji    "
console.log(newString2.trimEnd()); // "   akashji"

const url = "https://www.youtube.com/@kr$na%20loopSinger";
console.log(url); // "https://www.youtube.com/@kr$na%20loopSinger"

url.replace("kr$na", "krishna");

console.log( url.replace ("%20", " ") );

console.log(url); // "https://www.youtube.com/@kr$na%20loopSinger"

console.log(url.includes("hareRama")); // false
console.log(url.includes("kr$na")); // true

console.log(url.split("/")); // [ 'https:', '', 'www.youtube.com', '@kr$na%20loopSinger' ]